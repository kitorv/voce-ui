<template>
  <div :class="rootClass" :style="rootStyle">
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
  onBeforeMount,
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

    const isActive = computed(() => {
      return vMenu.activeIndex.value === props.index;
    });

    watch([isActive, vMenu.isCollapse], () => {
      vMenu.inactiveAllSubmenu();
      if (!isActive.value) return;
      nextTick(vSubmenu?.active);
    });

    const rootStyle = computed<CSSProperties | undefined>(() => {
      if (vMenu.isHorizontal.value || vMenu.isCollapse.value) return;
      const level = vSubmenu ? vSubmenu.level.value + 1 : 1;
      const paddingLeft = `${vMenu.computedIndent(level)}px`;
      return { paddingLeft };
    });

    const rootClass = computed(() => {
      return [
        "v-menu-item",
        {
          "v-menu-item--active": isActive.value,
          "v-menu-item--disabled": props.disabled,
          "v-menu-item--collapse": vMenu.isCollapse.value,
        },
      ];
    });

    const onClick = () => {
      if (props.disabled) return;
      vMenu.updateActiveIndex(props.index);
      if (vMenu.isVertical.value && !vMenu.isCollapse.value) return;
      vMenu.closeAllSubmenu();
    };

    onBeforeMount(() => {
      if (!isActive.value) return;
      vSubmenu?.active(true);
    });

    return { rootClass, rootStyle, onClick };
  },
});
</script>

<style lang="scss">
.v-menu-item--disabled,
.v-menu-item--disabled:hover {
  .v-menu-item--content {
    color: $-color--text-placeholder !important;
    border-color: transparent !important;
    cursor: not-allowed !important;
  }
}
</style>
