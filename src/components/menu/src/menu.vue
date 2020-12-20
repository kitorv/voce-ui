<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, provide } from "vue";
import {
  MenuMode,
  MenuProvide,
  MenuProvideKey,
  MenuSubmenu,
} from "./interface";

export default defineComponent({
  name: "VMenu",
  emits: ["update:active-index"],
  props: {
    mode: {
      type: String as PropType<MenuMode>,
      default: "horizontal" as MenuMode,
    },
    activeIndex: {
      type: [String, Number],
      default: undefined,
    },
    collapse: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const vSubmenuList: Map<symbol, MenuSubmenu> = new Map();

    provide<MenuProvide>(MenuProvideKey, {
      mode: computed(() => props.mode),
      collapse: computed(() => props.collapse),
      inline: computed(() => {
        return props.mode === "vertical";
      }),
      activeIndex: computed(() => props.activeIndex),
      updateActiveIndex(value) {
        emit("update:active-index", value);
      },
      addSubmenu(key, submenu) {
        vSubmenuList.set(key, submenu);
      },
      delSubmenu(key) {
        vSubmenuList.delete(key);
      },
      closeAllSubmenu() {
        vSubmenuList.forEach((submenu) => submenu.close());
      },
      computedPaddingLeft(level) {
        return `${level * 24}px`;
      },
    });

    const classes = computed(() => {
      return ["v-menu", `v-menu--mode-${props.mode}`];
    });

    return { classes };
  },
});
</script>

<style lang="scss">
.v-menu {
  box-sizing: border-box;
  color: $-color--text-primary;
  font-size: 14px;
  text-align: left;
  background: #ffffff;
  transition: background-color 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
}

.v-submenu-title,
.v-menu-item {
  position: relative;
  display: block;
  font-size: 14px;
  margin: 0;
  padding: 0 16px;
  white-space: nowrap;
  line-height: 40px;
  height: 40px;
  box-sizing: border-box;
  cursor: pointer;
}

.v-submenu-title:hover .v-submenu-title--content,
.v-submenu-title--active .v-submenu-title--content,
.v-menu-item:hover .v-menu-item--content,
.v-menu-item--active .v-menu-item--content {
  color: $-color--primary;
}

.v-submenu-title--content-icon,
.v-menu-item--content-icon {
  margin-right: 8px;
  transition: all 0.3s;
}

.v-menu--mode-horizontal {
  height: 48px;
  border-bottom: 1px solid $-color--border-base;
  white-space: nowrap;

  .v-submenu,
  .v-menu-item {
    display: inline-block;
    vertical-align: bottom;
  }

  .v-submenu-title,
  .v-menu-item {
    line-height: 46px;
    height: 46px;
    padding: 0 20px;
  }

  .v-submenu-title--content,
  .v-menu-item--content {
    border-bottom: 2px solid transparent;
    transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      background-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .v-submenu-title:hover .v-submenu-title--content,
  .v-submenu-title--active .v-submenu-title--content,
  .v-menu-item:hover .v-menu-item--content,
  .v-menu-item--active .v-menu-item--content {
    color: $-color--primary;
    border-color: $-color--primary;
  }
}

.v-menu--mode-vertical {
  width: 250px;
  border-right: 1px solid $-color--border-base;
}
</style>
