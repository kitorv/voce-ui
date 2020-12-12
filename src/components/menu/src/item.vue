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
        `v-v-menu-item--${vMenu.mode.value}`,
        { "v-menu-item--active": isActive && !props.disabled },
        { "v-menu-item--disabled": props.disabled },
      ];
    });

    const onContentClick = () => {
      if (props.disabled) return;
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

.v-v-menu-item--horizontal {
  display: inline-block;
  vertical-align: bottom;

  .v-menu-item-content {
    border-bottom: 2px solid transparent;
    transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      background-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    margin-bottom: -1px;
  }
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
