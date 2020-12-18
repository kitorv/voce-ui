<template>
  <div :class="classes" :style="contentStyle">
    <div class="v-menu-item--content" @click="onContentClick">
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
  CSSProperties,
  defineComponent,
  inject,
  PropType,
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

    const vSubMenu = inject<SubMenuProvide>(SubMenuProvideKey, null);

    const contentStyle = computed<CSSProperties>(() => {
      const level = vSubMenu ? vSubMenu.level.value + 1 : 1;
      return {
        paddingLeft: `${vMenu.computedPaddingLeft(level)}px`,
      };
    });

    const classes = computed(() => {
      const isActive = vMenu.activeIndex.value === props.index;
      return [
        "v-menu-item",
        { "v-menu-item--active": isActive && !props.disabled },
        { "v-menu-item--disabled": props.disabled },
      ];
    });

    const onContentClick = () => {
      if (props.disabled || props.index === undefined) return;
      vMenu.updateActiveIndex(props.index);
    };

    return { classes, onContentClick, contentStyle };
  },
});
</script>

<style lang="scss">
.v-menu-item:hover,
.v-menu-item--active {
  .v-menu-item--content {
    color: $-color--primary;
    border-color: $-color--primary;
  }
}

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
