<template>
  <div :class="classes" :style="style">
    <div class="v-menu-item--content" @click="onClick">
      <v-icon v-if="icon" :type="icon" class="v-menu-item--content-icon" />
      <span class="v-menu-item--content-text">
        <slot />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  CSSProperties,
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

    const style = computed<CSSProperties | undefined>(() => {
      if (vMenu.mode.value === "horizontal" || vMenu.collapse.value) return;
      const level = vSubmenu ? vSubmenu.level.value + 1 : 1;
      const paddingLeft = `${vMenu.computedIndent(level)}px`;
      return { paddingLeft };
    });

    const isActive = computed(() => {
      return vMenu.activeIndex.value === props.index;
    });

    watch(
      [isActive, vMenu.collapse],
      () => {
        vMenu.inactiveAllSubmenu();
        if (!isActive.value) return;
        nextTick(vSubmenu?.active);
      },
      { immediate: true }
    );

    const classes = computed(() => {
      return [
        "v-menu-item",
        {
          "v-menu-item--active": isActive.value,
          "v-menu-item--disabled": props.disabled,
          "v-menu-item--collapse": vMenu.collapse.value,
        },
      ];
    });

    const onClick = () => {
      if (props.disabled) return;
      vMenu.updateActiveIndex(props.index);
      if (vMenu.mode.value === "vertical" && !vMenu.collapse.value) return;
      vMenu.closeAllSubmenu();
    };

    return { classes, style, onClick };
  },
});
</script>

<style lang="scss">
.v-menu-item--disabled,
.v-menu-item--disabled:hover {
  .v-menu-item--content {
    color: $-color--text-placeholder !important;
    border-color: transparent !important;
    cursor: not-allowed;
  }
}
</style>
