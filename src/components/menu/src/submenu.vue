<template>
  <div class="v-submenu">
    <div
      ref="titleRef"
      :class="titleClass"
      :style="titleStyle"
      @mouseenter="onTitleMouseenter"
      @mouseleave="onTitleMouseleave"
      @click="onTitleClick"
    >
      <div class="v-submenu--title-content" ref="titleContentRef">
        <v-icon
          v-if="icon"
          class="v-submenu--title-content-icon"
          :type="icon"
        />
        <span class="v-submenu--title-content-text"> {{ title }}</span>
        <transition name="v-submenu-arrow">
          <v-icon
            v-if="isShowArrow"
            class="v-submenu--title-content-arrow"
            :type="titleArrowIcon"
          />
        </transition>
      </div>
    </div>
    <v-submenu-popup
      :name="transitionName"
      @before-enter="onPopupBeforeEnter"
      @after-leave="onPopupAfterLeave"
    >
      <div
        v-show="isPopupOpen"
        ref="contentRef"
        class="v-submenu--content"
        @mouseenter="onTitleMouseenter"
        @mouseleave="onTitleMouseleave"
      >
        <slot />
      </div>
    </v-submenu-popup>
    <v-submenu-inline>
      <div
        v-show="isInlineOpen"
        class="v-submenu--content"
        @mouseenter="onTitleMouseenter"
        @mouseleave="onTitleMouseleave"
      >
        <slot />
      </div>
    </v-submenu-inline>
  </div>
</template>

<script lang="ts">
import {
  computed,
  CSSProperties,
  defineComponent,
  inject,
  nextTick,
  onBeforeMount,
  onBeforeUnmount,
  PropType,
  provide,
  ref,
} from "vue";
import {
  MenuProvide,
  MenuProvideKey,
  SubmenuIcon,
  SubmenuProvide,
  SubmenuProvideKey,
  SubmenuTransitionName,
} from "./interface";
import { createPopper, Instance, Placement } from "@popperjs/core";
import VSubmenuPopup from "./submenu-popup.vue";
import VSubmenuInline from "./submenu-inline.vue";
import { nextZIndex } from "@/utils";

export default defineComponent({
  name: "VSubmenu",
  components: { VSubmenuPopup, VSubmenuInline },
  props: {
    icon: {
      type: String as PropType<SubmenuIcon>,
      default: undefined,
    },
    title: {
      type: [String, Number],
      default: undefined,
    },
  },
  setup(props) {
    const vMenu = inject<MenuProvide>(MenuProvideKey)!;

    const vSubmenu = inject<SubmenuProvide | null>(SubmenuProvideKey, null);

    const isPopupOpen = ref(false);

    const isInlineOpen = ref(false);

    const isActive = ref(false);

    const transitionName = ref<SubmenuTransitionName>("zoom-top");

    const submenuContext: SubmenuProvide = {
      key: Symbol(),
      parentKey: computed(() => {
        return vSubmenu?.key;
      }),
      level: computed(() => {
        return vSubmenu ? vSubmenu.level.value + 1 : 1;
      }),
      isActive: computed(() => {
        return isActive.value;
      }),
      isOpen: computed(() => {
        return vMenu.isInline.value ? isInlineOpen.value : isPopupOpen.value;
      }),
      open() {
        if (vMenu.isInline.value) {
          isInlineOpen.value = true;
        } else {
          submenuContext.updateTransitionName();
          isPopupOpen.value = true;
        }
      },
      close() {
        submenuContext.updateTransitionName();
        isInlineOpen.value = false;
        isPopupOpen.value = false;
      },
      active: () => {
        isActive.value = true;
      },
      inactive: () => {
        isActive.value = false;
      },
      collapse() {
        isInlineOpen.value = false;
        isPopupOpen.value = false;
      },
      expand() {
        isInlineOpen.value = true;
        isPopupOpen.value = false;
      },
      closestActive() {
        submenuContext.active();
        vSubmenu?.closestActive();
      },
      closestOpen() {
        if (!vMenu.isInline.value) return;
        submenuContext.open();
        vSubmenu?.closestOpen();
      },
      updateTransitionName() {
        if (vMenu.isHorizontal.value) {
          transitionName.value = "zoom-top";
          return;
        }
        let isSameLevelOpen = false;
        vMenu.submenuList.forEach((submenu) => {
          if (submenu.key === submenuContext.key) return;
          if (!submenu.isOpen.value) return;
          if (isSameLevelOpen) return;
          isSameLevelOpen = submenu.level.value === submenuContext.level.value;
        });
        transitionName.value = isSameLevelOpen ? "zoom-fade" : "zoom-right";
      },
    };

    provide<SubmenuProvide>(SubmenuProvideKey, submenuContext);

    const titleClass = computed(() => {
      const isExpandActive = isPopupOpen.value && vMenu.isHorizontal.value;
      return [
        "v-submenu--title",
        {
          "v-submenu--title-active": isActive.value || isExpandActive,
          "v-submenu--title-arrow": isShowArrow.value,
          "v-submenu--title-inline-open": isInlineOpen.value,
        },
      ];
    });

    const titleStyle = computed<CSSProperties | undefined>(() => {
      if (!vMenu.isInline.value) return;
      const level = submenuContext.level.value;
      const paddingLeft = `${vMenu.computedIndent(level)}px`;
      return { paddingLeft };
    });

    const isShowArrow = computed(() => {
      if (vSubmenu) return true;
      if (vMenu.isHorizontal.value) return false;
      return !vMenu.isCollapse.value;
    });

    const titleArrowIcon = computed(() => {
      if (vMenu.isHorizontal.value) return "right";
      if (!vMenu.isCollapse.value) return "down";
      return vSubmenu ? "right" : "down";
    });

    const onTitleClick = () => {
      if (!vMenu.isInline.value) return;
      if (isInlineOpen.value) {
        submenuContext.close();
        return;
      }
      if (!vMenu.isAccordion.value) {
        submenuContext.open();
        return;
      }
      if (vSubmenu?.isOpen.value) {
        if (isInlineOpen.value) return;
        submenuContext.open();
        return;
      }
      vMenu.closeAllSubmenu();
      submenuContext.closestOpen();
    };

    let popperInstance: Instance | null;
    const titleRef = ref<HTMLDivElement>();
    const titleContentRef = ref<HTMLDivElement>();
    const contentRef = ref<HTMLDivElement>();

    const createPopperInstacne = () => {
      const referenceEl = titleRef.value;
      const contentEl = contentRef.value;

      if (popperInstance || !referenceEl || !contentEl) return;
      const isRootHorizontalSubmenu = vMenu.isHorizontal.value && !vSubmenu;

      popperInstance = createPopper(referenceEl, contentEl, {
        placement: isRootHorizontalSubmenu ? "bottom-start" : "right-start",
        modifiers: [
          {
            name: "computeStyles",
            options: { gpuAcceleration: false, adaptive: false },
          },
          {
            name: "offset",
            options: {
              offset: (state: { placement: Placement }) => {
                return state.placement === "bottom-start" ? [20, 6] : [0, 6];
              },
            },
          },
          {
            name: "submenuAttributes",
            enabled: true,
            phase: "beforeWrite",
            fn({ state }) {
              const attrs = state.attributes.popper;
              const popupAttrs: Record<string, string | boolean> = {};
              for (const key in attrs) {
                const pKey = key.replace("data-popper", "popup-menu");
                popupAttrs[pKey] = attrs[key];
              }
              state.attributes.popper = popupAttrs;
            },
            requires: ["computeStyles"],
          },
          {
            name: "submenuStyle",
            enabled: true,
            phase: "beforeWrite",
            fn({ state }) {
              state.styles.popper.zIndex = nextZIndex().toString();
              if (vMenu.isVertical.value) {
                state.styles.popper.minWidth = "160px";
                return;
              }
              if (vSubmenu) return;
              const clientWidth = titleContentRef.value?.clientWidth;
              if (!clientWidth) return;
              state.styles.popper.minWidth = `${clientWidth}px`;
            },
            requires: ["computeStyles"],
          },
        ],
      });
    };

    const destroyPopperInstance = () => {
      if (!popperInstance) return;
      popperInstance.destroy();
      popperInstance = null;
    };

    let destroyTimeoutId = -1;

    const onPopupBeforeEnter = () => {
      clearTimeout(destroyTimeoutId);
    };

    const onPopupAfterLeave = () => {
      clearTimeout(destroyTimeoutId);
      destroyTimeoutId = window.setTimeout(destroyPopperInstance, 200);
    };

    let setTimeoutId: number;

    const onTitleMouseenter = () => {
      if (vMenu.isInline.value) return;
      clearTimeout(setTimeoutId);
      clearTimeout(destroyTimeoutId);
      submenuContext.open();
      nextTick(createPopperInstacne);
    };

    const onTitleMouseleave = () => {
      if (vMenu.isInline.value) return;
      setTimeoutId = window.setTimeout(() => {
        submenuContext.close();
      }, 200);
    };

    onBeforeMount(() => {
      vMenu.addSubmenu(submenuContext.key, submenuContext);
    });

    onBeforeUnmount(() => {
      vMenu.delSubmenu(submenuContext.key);
    });

    return {
      titleRef,
      titleClass,
      titleStyle,
      titleArrowIcon,
      isShowArrow,
      titleContentRef,
      onTitleMouseenter,
      onTitleMouseleave,
      onTitleClick,
      contentRef,
      isPopupOpen,
      isInlineOpen,
      transitionName,
      onPopupBeforeEnter,
      onPopupAfterLeave,
    };
  },
});
</script>

<style lang="scss">
.v-submenu {
  background-color: $-color--white;
}

.v-submenu--title-arrow {
  padding-right: 40px;
}

.v-submenu--title-content-arrow {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s;
}

.v-submenu--content {
  background-color: $-color--white;
  padding: 4px 0;
  font-size: 14px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 12px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
}

.v-submenu--title-inline-open {
  > .v-submenu--title-content .v-submenu--title-content-arrow {
    transform: translateY(-50%) rotate(180deg);
  }
}

.v-submenu-arrow {
  &-leave-active {
    opacity: 1;
    transition: all 0.1s ease-out;
  }

  &-enter-active {
    opacity: 1;
    transition: all 0.3s ease-in;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    font-size: 0;
  }
}
</style>
