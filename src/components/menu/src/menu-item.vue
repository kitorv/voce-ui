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

    const style = computed<CSSProperties>(() => {
      if (
        vMenu.mode.value === "horizontal" ||
        (vMenu.collapse.value && !vSubmenu)
      )
        return {};
      const level = vSubmenu ? vSubmenu.level.value + 1 : 1;
      return {
        paddingLeft: vMenu.computedPaddingLeft(level),
      };
    });

    const isActive = computed(() => {
      return vMenu.activeIndex.value === props.index;
    });

    watch(
      isActive,
      (value) => {
        vMenu.inactiveAllSubmenu();
        if (!value) return;
        if (vMenu.inline.value) {
          vSubmenu?.open();
        }
        nextTick(() => {
          vSubmenu?.active();
        });
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
      if (!vMenu.inline.value) {
        vMenu.closeAllSubmenu();
      }
    };

    return { classes, style, onClick };
  },
});
</script>

<style lang="scss">
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
