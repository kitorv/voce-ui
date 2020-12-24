<template>
  <div class="v-submenu">
    <div :class="titleClass" :style="titleStyle" @click="onTitleClick">
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
      name="collapse"
      @after-leave="onInlineAfterLeave"
    >
      <div v-show="isCollapse" class="v-submenu--inline-content">
        <slot />
      </div>
    </v-transition>
    <teleport v-else to="body">
      <div v-show="isCollapse" class="v-submenu--popup-content">
        <slot />
      </div>
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
import { Transition as VTransition } from "@/components/transition";
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

    //   const placement = computed(() => {
    //     if (vMenu.mode.value === "horizontal") {
    //       return vSubmenu ? "right-start" : "bottom-start";
    //     }
    //     return "right-start";
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
    //   let setTimeoutId: number;
    //   const onMouseenter = () => {
    //     clearTimeout(setTimeoutId);
    //     openSubmenu();
    //   };
    //   const onMouseleave = () => {
    //     setTimeoutId = window.setTimeout(() => {
    //       clearTimeout(setTimeoutId);
    //       closeSubmenu();
    //     }, 200);
    //   };
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

// .v-submenu--popup-content {
//   font-size: 14px;
//   box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
//     0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
// }

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
