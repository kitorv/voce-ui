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
  SubmenuProvide,
  SubmenuProvideKey,
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

    const vSubmenu = inject<SubmenuProvide | null>(SubmenuProvideKey, null);

    const isActive = computed(() => {
      return vMenu.activeIndex.value === props.index;
    });

    watch(isActive, () => {
      vMenu.inactiveAllSubmenu();
      if (!isActive.value || !vSubmenu) return;
      nextTick(() => {
        vSubmenu.closestActive();
        if (!vMenu.isAccordion.value) {
          vSubmenu.closestOpen();
          return;
        }
        if (vSubmenu.isOpen.value) return;
        vMenu.accordionOpenSubmenu(vSubmenu.key);
      });
    });

    const rootStyle = computed<CSSProperties | undefined>(() => {
      if (!vMenu.isInline.value) return;
      const level = vSubmenu ? vSubmenu.level.value + 1 : 1;
      return { paddingLeft: `${vMenu.computedIndent(level)}px` };
    });

    const rootClass = computed(() => {
      return [
        "v-menu-item",
        {
          "v-menu-item--active": isActive.value,
          "v-menu-item--disabled": props.disabled,
        },
      ];
    });

    const onClick = () => {
      if (props.disabled) return;
      vMenu.updateActiveIndex(props.index);
      if (vMenu.isInline.value) return;
      vMenu.closeAllSubmenu();
    };

    onBeforeMount(() => {
      if (!isActive.value) return;
      vSubmenu?.closestActive();
      vSubmenu?.closestOpen();
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
