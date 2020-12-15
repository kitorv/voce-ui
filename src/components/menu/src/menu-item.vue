<template>
  <div :class="classes">
    <div class="v-menu-item-content" @click="onContentClick">
      <v-icon v-if="icon" :type="icon" class="v-menu-item-content-icon" />
      <div class="v-menu-item-content-text">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";
import { MenuItemIcon, MenuProvide, MenuProvideKey } from "./interface";

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

    return { classes, onContentClick };
  },
});
</script>

<style lang="scss">
.v-menu-item {
  position: relative;
  display: block;
  margin: 0;
  padding: 0 20px;
  white-space: nowrap;
  line-height: 48px;
  cursor: pointer;
}

.v-menu-item-content {
  display: flex;
  align-items: center;
}

.v-menu-item-content-text {
  flex: 1;
}

.v-menu-item-content-icon {
  margin-right: 8px;
  font-size: 18px;
  transition: all 0.3s;
}

.v-menu-item:hover,
.v-menu-item--active {
  .v-menu-item-content {
    color: $-color--primary;
    border-color: $-color--primary;
  }
}

.v-menu-item--disabled,
.v-menu-item--disabled:hover {
  .v-menu-item-content {
    color: $-color--text-placeholder;
    background: 0 0;
    border-color: transparent;
    cursor: not-allowed;
  }
}
</style>
