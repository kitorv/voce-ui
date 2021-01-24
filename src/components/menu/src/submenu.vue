<template>
  <div :class="rootClass">
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
    <v-submenu-transition
      ref="transitionRef"
      @before-enter="onTransitionBeforeEnter"
      @after-leave="onTransitionAfterEnter"
    >
      <div
        v-show="isOpen"
        ref="contentRef"
        class="v-submenu--content"
        @mouseenter="onTitleMouseenter"
        @mouseleave="onTitleMouseleave"
      >
        <slot />
      </div>
    </v-submenu-transition>
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
  Submenu,
  SubmenuIcon,
  SubMenuProvide,
  SubMenuProvideKey,
} from "./interface";
import { createPopper, Instance, Placement } from "@popperjs/core";
import VSubmenuTransition from "./submenu-transition.vue";

export default defineComponent({
  name: "VSubmenu",
  components: { VSubmenuTransition },
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

    const isOpen = ref(false);

    const isActive = ref(false);

    const isNoTransition = ref(false);

    const rootClass = computed(() => {
      return [
        "v-submenu",
        { "v-submenu--no-transition": isNoTransition.value },
      ];
    });

    const titleClass = computed(() => {
      const expandActive = isOpen.value && vMenu.isHorizontal.value;
      return [
        "v-submenu--title",
        {
          "v-submenu--title-active": isActive.value || expandActive,
          "v-submenu--title-arrow": isShowTitleArrow.value,
          "v-submenu--title-collapse": vMenu.isCollapse.value,
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

    const transitionRef = ref();

    const submenuContext: Submenu = {
      isActive: computed(() => isActive.value),
      open(isTransition = false) {
        isNoTransition.value = isTransition;
        isOpen.value = true;
      },
      close() {
        isNoTransition.value = false;
        isOpen.value = false;
      },
      collapse() {
        if (!isOpen.value) return;
        isNoTransition.value = false;
        transitionRef.value.collapse();
        isOpen.value = false;
      },
      expand() {
        if (isOpen.value) return;
        isNoTransition.value = false;
        transitionRef.value.expand();
        isOpen.value = true;
      },
      active: () => (isActive.value = true),
      inactive: () => (isActive.value = false),
    };

    provide<SubMenuProvide>(SubMenuProvideKey, {
      level: computed(() => {
        return vSubmenu ? vSubmenu.level.value + 1 : 1;
      }),
      active(isInitActive) {
        vSubmenu?.active(isInitActive);
        submenuContext.active();
        if (vMenu.isHorizontal.value || vMenu.isCollapse.value) return;
        submenuContext.open(isInitActive);
      },
      hasParentSubmenu: computed(() => !!vSubmenu),
    });

    const onTitleClick = () => {
      if (vMenu.isHorizontal.value || vMenu.isCollapse.value) return;
      if (isOpen.value) {
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

    const onTransitionBeforeEnter = () => {
      clearTimeout(destroyTimeoutId);
    };

    const onTransitionAfterEnter = () => {
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
      if (vMenu.mode.value === "vertical" && !vMenu.isCollapse.value) return;
      setTimeoutId = window.setTimeout(() => {
        clearTimeout(setTimeoutId);
        submenuContext.close();
      }, 200);
    };

    const key = Symbol();

    onBeforeMount(() => {
      vMenu.addSubmenu(key, submenuContext);
    });

    onBeforeUnmount(() => {
      vMenu.delSubmenu(key);
    });

    return {
      rootClass,
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
      isOpen,
      transitionRef,
      onTransitionBeforeEnter,
      onTransitionAfterEnter,
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

.v-submenu--no-transition {
  .v-submenu-transition--big-top,
  .v-submenu-transition--collapse {
    transition: all 0s;
  }
}
</style>
