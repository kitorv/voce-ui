<template>
  <div :class="submenuClass">
    <div
      ref="titleRef"
      :class="titleClass"
      :style="titleStyle"
      @click="onTitleClick"
      @mouseenter="onTitleMouseenter"
      @mouseleave="onTitleMouseleave"
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
    <v-transition
      v-if="isInline"
      :name="inlineTransitionName"
      @after-leave="onInlineAfterLeave"
    >
      <div
        v-show="isExpand"
        ref="contentRef"
        class="v-submenu--inline-content"
        @mouseenter="onTitleMouseenter"
        @mouseleave="onTitleMouseleave"
      >
        <slot />
      </div>
    </v-transition>
    <teleport v-else to="body">
      <v-transition
        name="slide-up"
        @before-enter="onPopupBeforeEnter"
        @after-leave="onPopupAfterLeave"
      >
        <div
          v-show="isExpand"
          ref="contentRef"
          class="v-submenu--popup-content"
          @mouseenter="onTitleMouseenter"
          @mouseleave="onTitleMouseleave"
        >
          <slot />
        </div>
      </v-transition>
    </teleport>
  </div>
</template>

<script lang="ts">
import {
  Transition as VTransition,
  TransitionName,
} from "@/components/transition";
import { createPopper, Instance, Placement } from "@popperjs/core";
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
  Submenu,
  SubmenuIcon,
  SubMenuProvide,
  SubMenuProvideKey,
} from "./interface";

export default defineComponent({
  components: { VTransition },
  name: "VSubmenu",
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

    const vSubmenu = inject<SubMenuProvide>(SubMenuProvideKey, null);

    const level = computed(() => {
      return vSubmenu ? vSubmenu.level.value + 1 : 1;
    });

    const isExpand = ref(false);

    const isActive = ref(false);

    const isInlineValue = computed(() => {
      if (vSubmenu) return true;
      if (vMenu.mode.value === "horizontal") return false;
      return !vMenu.collapse.value;
    });

    const isInline = ref(isInlineValue.value);

    const onInlineAfterLeave = () => {
      isInline.value = isInlineValue.value;
    };

    const isCollapseTransition = ref(false);

    const submenuClass = computed(() => {
      return [
        "v-submenu",
        { "v-submenu--no-collapse-transition": isCollapseTransition.value },
      ];
    });

    const submenuContext: Submenu = {
      isActive: computed(() => isActive.value),
      open(isTransition = false) {
        isInline.value = isInlineValue.value;
        isCollapseTransition.value = isTransition;
        nextTick(() => {
          isExpand.value = true;
        });
      },
      close() {
        if (!isExpand.value) {
          isInline.value = isInlineValue.value;
        }
        isExpand.value = false;
      },
      active() {
        isActive.value = true;
      },
      inactive() {
        isActive.value = false;
      },
    };

    provide<SubMenuProvide>(SubMenuProvideKey, {
      level,
      active(isInitActive) {
        vSubmenu?.active(isInitActive);
        submenuContext.active();
        if (vMenu.mode.value === "horizontal" || vMenu.collapse.value) return;
        submenuContext.open(isInitActive);
      },
    });

    const titleArrowIcon = computed(() => {
      if (vMenu.mode.value === "horizontal") return "right";
      if (!vMenu.collapse.value) return "down";
      return vSubmenu ? "right" : "down";
    });

    const isShowTitleArrow = computed(() => {
      if (vSubmenu) return true;
      if (vMenu.mode.value === "horizontal") return false;
      return !vMenu.collapse.value;
    });

    const titleClass = computed(() => {
      const expandActive = isExpand.value && vMenu.mode.value === "horizontal";
      return [
        "v-submenu--title",
        {
          "v-submenu--title-active": isActive.value || expandActive,
          "v-submenu--title-arrow": isShowTitleArrow.value,
          "v-submenu--title-collapse": vMenu.collapse.value,
        },
      ];
    });

    const titleStyle = computed<CSSProperties | undefined>(() => {
      if (vMenu.mode.value === "horizontal" || vMenu.collapse.value) return;
      const paddingLeft = `${vMenu.computedIndent(level.value)}px`;
      return { paddingLeft };
    });

    const onTitleClick = () => {
      if (vMenu.mode.value === "horizontal" || vMenu.collapse.value) return;
      if (isExpand.value) {
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
      if (popperInstance) return;
      const referenceEl = titleRef.value;
      const contentEl = contentRef.value;
      if (!referenceEl || !contentEl) return;

      let placement: Placement = "right-start";
      if (vMenu.mode.value === "horizontal") {
        placement = vSubmenu ? "right-start" : "bottom-start";
      }

      popperInstance = createPopper(referenceEl, contentEl, {
        placement: placement,
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
              if (vMenu.mode.value !== "horizontal" || !titleContentRef.value) {
                return;
              }
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
      destroyTimeoutId = window.setTimeout(destroyPopperInstance, 200);
    };

    let setTimeoutId: number;

    const onTitleMouseenter = () => {
      if (vMenu.mode.value === "vertical" && !vMenu.collapse.value) return;
      clearTimeout(setTimeoutId);
      submenuContext.open();
      nextTick(createPopperInstacne);
    };

    const onTitleMouseleave = () => {
      if (vMenu.mode.value === "vertical" && !vMenu.collapse.value) return;
      setTimeoutId = window.setTimeout(() => {
        clearTimeout(setTimeoutId);
        submenuContext.close();
      }, 200);
    };

    const inlineTransitionName = computed<TransitionName>(() => {
      if (vMenu.mode.value === "horizontal") return "slide-up";
      if (!vMenu.collapse.value) return "collapse";
      return vSubmenu ? "slide-up" : "collapse";
    });

    const key = Symbol();

    onBeforeMount(() => {
      vMenu.addSubmenu(key, submenuContext);
    });

    onBeforeUnmount(() => {
      vMenu.delSubmenu(key);
    });

    return {
      submenuClass,
      isExpand,
      isInline,
      titleClass,
      titleStyle,
      isShowTitleArrow,
      titleArrowIcon,
      onTitleClick,
      onInlineAfterLeave,
      onTitleMouseenter,
      onTitleMouseleave,
      titleRef,
      titleContentRef,
      contentRef,
      inlineTransitionName,
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

.v-submenu--popup-content,
.v-submenu--popup-content .v-submenu--inline-content {
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

.v-submenu--no-collapse-transition {
  .v-transition--collapse {
    transition: all 0s;
  }
}
</style>
