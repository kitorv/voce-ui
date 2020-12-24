<template>
  <div class="v-submenu">
    <div
      ref="referenceRef"
      :class="titleClass"
      :style="titleStyle"
      @click="onTitleClick"
      @mouseenter="onTitleMouseenter"
      @mouseleave="onTitleMouseleave"
    >
      <div class="v-submenu--title-content">
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
        v-show="isCollapse"
        ref="contentRef"
        class="v-submenu--inline-content"
        @mouseenter="onTitleMouseenter"
        @mouseleave="onTitleMouseleave"
      >
        <slot />
      </div>
    </v-transition>
    <teleport v-else to="body">
      <v-transition name="slide-up">
        <div
          v-show="isCollapse"
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
  <!-- <div v-if="isInline" class="v-submenu v-submenu--inline">
    <v-summenu-title
      :icon="icon"
      :title="title"
      :active="isTitleActive"
      :arrow="isShowArrow"
      :style="titleStyle"
      @click="onClick"
    />

  </div>
  <v-popup
    v-else
    v-model:visible="isCollapse"
    class="v-submenu"
    trigger="manual"
    :placement="placement"
    :offset="offset"
    :target="target"
    transition="v-submenu--popup-content"
  >
    <template #reference>
      <v-summenu-title
        :icon="icon"
        :title="title"
        :active="isTitleActive"
        :arrow="isShowArrow"
        @mouseenter="onMouseenter"
        @mouseleave="onMouseleave"
      />
    </template>
    <template #content>
      <div
        class="v-submenu--popup-content"
        @mouseenter="onMouseenter"
        @mouseleave="onMouseleave"
      >
        <slot />
      </div>
    </template>
  </v-popup> -->
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

    const isCollapse = ref(false);

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

    const submenuAcitons = {
      open() {
        isInline.value = isInlineValue.value;
        nextTick(() => {
          isCollapse.value = true;
        });
      },
      close() {
        if (!isCollapse.value) {
          isInline.value = isInlineValue.value;
        }
        isCollapse.value = false;
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
      active() {
        vSubmenu?.active();
        submenuAcitons.active();
        if (vMenu.mode.value === "horizontal" || vMenu.collapse.value) return;
        submenuAcitons.open();
      },
    });

    const titleArrowIcon = computed(() => {
      return vMenu.mode.value === "horizontal" ? "right" : "down";
    });

    const isShowTitleArrow = computed(() => {
      if (vMenu.mode.value === "horizontal") return !!vSubmenu;
      return !vMenu.collapse.value;
    });

    const titleClass = computed(() => {
      return [
        "v-submenu--title",
        {
          "v-submenu--title-active": isActive.value,
          "v-submenu--title-arrow": isShowTitleArrow.value,
          "v-submenu--title-collapse": vMenu.collapse.value,
        },
      ];
    });

    const titleStyle = computed<CSSProperties | undefined>(() => {
      if (vMenu.mode.value === "horizontal" || vMenu.collapse.value) return;
      return {
        paddingLeft: vMenu.computedPaddingLeft(level.value),
      };
    });

    const onTitleClick = () => {
      if (vMenu.mode.value === "horizontal" || vMenu.collapse.value) return;
      if (isCollapse.value) {
        submenuAcitons.close();
      } else {
        submenuAcitons.open();
      }
    };

    let popperInstance: Instance | undefined;
    const referenceRef = ref<HTMLDivElement>();
    const contentRef = ref<HTMLDivElement>();

    // const placement = computed(() => {

    //   return "right-start";
    // });

    const createPopperInstacne = () => {
      const referenceEl = referenceRef.value;
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
            name: "popupAttributes",
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
        ],
      });
    };

    let setTimeoutId: number;
    const onTitleMouseenter = () => {
      if (vMenu.mode.value === "vertical" && !vMenu.collapse.value) return;
      clearTimeout(setTimeoutId);
      submenuAcitons.open();
      nextTick(createPopperInstacne);
      console.log(popperInstance);
    };
    const onTitleMouseleave = () => {
      if (vMenu.mode.value === "vertical" && !vMenu.collapse.value) return;
      setTimeoutId = window.setTimeout(() => {
        clearTimeout(setTimeoutId);
        submenuAcitons.close();
      }, 200);
    };

    //   const isInline = computed(() => {
    //     return true;
    //   });

    //   // const onInlineAfterLeave = () => {
    //   //   nextTick(() => {
    //   //     // isInline.value = isInlineValue.value;
    //   //   });
    //   // };

    //   const isTitleActive = computed(() => {
    //     if (vMenu.mode.value === "horizontal") {
    //       return isActive.value || isCollapse.value;
    //     }
    //     return isActive.value;
    //   });

    //   const target = computed(() => {
    //     return vSubmenu ? null : "body";
    //   });
    //   const offset = computed<PopupOffset>(() => {
    //     if (placement.value === "bottom-start") return [20, 6];
    //     return [0, 6];
    //   });
    //   const onClick = () => {
    //     if (isCollapse.value) {
    //       closeSubmenu();
    //     } else {
    //       openSubmenu();
    //     }
    //   };

    const inlineTransitionName = computed<TransitionName>(() => {
      if (vMenu.mode.value === "horizontal") {
        return "slide-up";
      }
      return "collapse";
    });

    const key = Symbol();

    onBeforeMount(() => {
      vMenu.addSubmenu(key, {
        isActive: computed(() => isActive.value),
        ...submenuAcitons,
      });
    });

    return {
      isCollapse,
      isInline,
      titleClass,
      titleStyle,
      isShowTitleArrow,
      titleArrowIcon,
      onTitleClick,
      onInlineAfterLeave,
      onTitleMouseenter,
      onTitleMouseleave,
      referenceRef,
      contentRef,
      inlineTransitionName,
      //     isInline,
      //     titleStyle,
      //     onClick,
      //     isCollapse,
      //     isTitleActive,
      //     isShowArrow,
      //     placement,
      //     target,
      //     offset,
      //     onMouseenter,
      //     onMouseleave,
    };
  },
});
</script>

<style lang="scss">
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

// .v-submenu--popup-content {
//   &-enter-active,
//   &-leave-active {
//     opacity: 1;
//     transform: scaleY(1);
//     transform-origin: center top;
//     transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
//       opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
//   }

//   &-enter-from,
//   &-leave-to {
//     opacity: 0;
//     transform: scaleY(0);
//   }
// }
</style>
