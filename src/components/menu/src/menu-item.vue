<template>
  <div :class="classes">
    <div class="v-menu-item--content" @click="onClick">
      <v-icon v-if="icon" :type="icon" class="v-menu-item--content-icon" />
      <span>
        <slot />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  inject,
  nextTick,
  PropType,
  watch,
} from "vue";
import {
  MenuItemIcon,
  MenuProvide,
  MenuProvideKey,
  SubMenuProvide,
  SubMenuProvideKey,
} from "./interface";

export default defineComponent({
  name: "VMenuItem",
  props: {
    icon: {
      type: String as PropType<MenuItemIcon>,
      default: undefined,
    },
    index: {
      type: [String, Number],
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const vMenu = inject<MenuProvide>(MenuProvideKey)!;

    const vSubmenu = inject<SubMenuProvide>(SubMenuProvideKey, null);

    // const contentStyle = computed<CSSProperties>(() => {
    //   if (vMenu.mode.value === "horizontal") return {};
    //   const level = vSubMenu ? vSubMenu.level.value + 1 : 1;
    //   return {
    //     paddingLeft: `${vMenu.computedPaddingLeft(level)}px`,
    //   };
    // });
    const isActive = computed(() => {
      return vMenu.activeIndex.value === props.index;
    });

    watch(
      isActive,
      () => {
        vSubmenu?.updateActive(false);
      },
      { immediate: true }
    );

    const classes = computed(() => {
      return [
        "v-menu-item",
        { "v-menu-item--active": isActive.value },
        { "v-menu-item--disabled": props.disabled },
      ];
    });

    const onClick = () => {
      if (props.disabled) return;
      vMenu.updateActiveIndex(props.index);
      vMenu.closeAllSubmenu();
      nextTick(() => {
        vSubmenu?.updateActive(isActive.value);
      });
    };

    return { classes, onClick };
  },
});
</script>

<style lang="scss">
// .v-menu-item:hover,
// .v-menu-item--active {
//   .v-menu-item--content {
//     color: $-color--primary;
//     border-color: $-color--primary;
//   }
// }

.v-menu-item--disabled,
.v-menu-item--disabled:hover {
  .v-menu-item--content {
    color: $-color--text-placeholder;
    background: 0 0;
    border-color: transparent;
    cursor: not-allowed;
  }
}
</style>
