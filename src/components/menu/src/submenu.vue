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
            v-if="isShowTitleArrow"
            class="v-submenu--title-content-arrow"
            :type="titleArrowIcon"
          />
        </transition>
      </div>
    </div>
    <v-submenu-popup
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
  SubMenuProvide,
  SubMenuProvideKey,
} from "./interface";
import { createPopper, Instance, Placement } from "@popperjs/core";
import VSubmenuPopup from "./submenu-popup.vue";
import VSubmenuInline from "./submenu-inline.vue";

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

    const vSubmenu = inject<SubMenuProvide | null>(SubMenuProvideKey, null);

    const isPopupOpen = ref(false);

    const isInlineOpen = ref(false);

    const isActive = ref(false);

    const titleClass = computed(() => {
      const isExpandActive = isPopupOpen.value && vMenu.isHorizontal.value;
      return [
        "v-submenu--title",
        {
          "v-submenu--title-active": isActive.value || isExpandActive,
          "v-submenu--title-arrow": isShowTitleArrow.value,
        },
      ];
    });

    const titleStyle = computed<CSSProperties | undefined>(() => {
      if (vMenu.isHorizontal.value || vMenu.isCollapse.value) return;
      const level = vSubmenu ? vSubmenu.level.value + 1 : 1;
      const paddingLeft = `${vMenu.computedIndent(level)}px`;
      return { paddingLeft };
    });

    const isShowTitleArrow = computed(() => {
      if (vSubmenu) return true;
      if (vMenu.isHorizontal.value) return false;
      return !vMenu.isCollapse.value;
    });

    const titleArrowIcon = computed(() => {
      if (vMenu.isHorizontal.value) return "right";
      if (!vMenu.isCollapse.value) return "down";
      return vSubmenu ? "right" : "down";
    });

    const submenuContext: SubMenuProvide = {
      key: Symbol(),
      level: computed(() => {
        return vSubmenu ? vSubmenu.level.value + 1 : 1;
      }),
      isActive: computed(() => isActive.value),
      open() {
        if (vMenu.isCollapse.value || vMenu.isHorizontal.value) {
          isPopupOpen.value = true;
        } else {
          isInlineOpen.value = true;
        }
      },
      close() {
        isPopupOpen.value = false;
        isInlineOpen.value = false;
      },
      active: () => {
        isActive.value = true;
      },
      inactive: () => {
        isActive.value = false;
      },
      closestActive() {
        vSubmenu?.closestActive();
        submenuContext.active();
        if (vMenu.isHorizontal.value || vMenu.isCollapse.value) return;
        submenuContext.open();
      },
    };

    provide<SubMenuProvide>(SubMenuProvideKey, submenuContext);

    const onTitleClick = () => {
      if (vMenu.isHorizontal.value || vMenu.isCollapse.value) return;
      if (isInlineOpen.value) {
        submenuContext.close();
      } else {
        submenuContext.open();
      }
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
              if (vMenu.isVertical.value || vSubmenu) return;
              if (!titleContentRef.value) return;
              state.styles.popper.minWidth = `${titleContentRef.value.clientWidth}px`;
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
      if (vMenu.isVertical.value && !vMenu.isCollapse.value) return;
      clearTimeout(setTimeoutId);
      submenuContext.open();
      nextTick(createPopperInstacne);
    };

    const onTitleMouseleave = () => {
      clearTimeout(setTimeoutId);
      setTimeoutId = window.setTimeout(() => {
        if (vMenu.isVertical.value && !vMenu.isCollapse.value) return;
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
      isShowTitleArrow,
      titleContentRef,
      onTitleMouseenter,
      onTitleMouseleave,
      onTitleClick,
      contentRef,
      isPopupOpen,
      isInlineOpen,
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
}

.v-submenu--content {
  background-color: $-color--white;
  padding: 4px 0;
  font-size: 14px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
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
