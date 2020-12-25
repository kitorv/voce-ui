<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, provide, watch } from "vue";
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

    const isCollapse = computed(() => {
      return props.mode === "vertical" && props.collapse;
    });

    provide<MenuProvide>(MenuProvideKey, {
      mode: computed(() => props.mode),
      collapse: isCollapse,
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
      inactiveAllSubmenu() {
        vSubmenuList.forEach((submenu) => submenu.inactive());
      },
      computedIndent: (level) => level * 24,
    });

    watch(isCollapse, (value) => {
      vSubmenuList.forEach((submenu) => {
        if (value) {
          submenu.close();
          return;
        }
        if (submenu.isActive.value) {
          submenu.open();
        } else {
          submenu.close();
        }
      });
    });

    const classes = computed(() => {
      return [
        "v-menu",
        `v-menu--mode-${props.mode}`,
        {
          "v-menu--inline-collapse": isCollapse.value,
        },
      ];
    });

    return { classes, isCollapse };
  },
});
</script>

<style lang="scss">
.v-menu {
  box-sizing: border-box;
  color: $-color--text-primary;
  font-size: 14px;
  text-align: left;
  background-color: $-color--white;
  transition: background-color 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1);
}

.v-submenu--title,
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
  transition: border-color 0.3s, background-color 0.3s,
    padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
  cursor: pointer;
}

.v-submenu--title:hover .v-submenu--title-content,
.v-submenu--title-active .v-submenu--title-content,
.v-menu-item:hover .v-menu-item--content,
.v-menu-item--active .v-menu-item--content {
  color: $-color--primary;
}

.v-submenu--popup-content .v-menu-item--active {
  background-color: $-color--primary-1;
}

.v-submenu--title-content-icon,
.v-menu-item--content-icon {
  margin-right: 8px;
  transition: all 0.3s;
}

.v-submenu--title-content-text,
.v-menu-item--content-text {
  display: inline-block;
  transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), color 0.3s;
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

  .v-submenu--title,
  .v-menu-item {
    line-height: 46px;
    height: 46px;
    padding: 0 20px;
  }

  .v-submenu--title-content,
  .v-menu-item--content {
    border-bottom: 2px solid transparent;
    transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      background-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .v-submenu--title:hover .v-submenu--title-content,
  .v-submenu--title-active .v-submenu--title-content,
  .v-menu-item:hover .v-menu-item--content,
  .v-menu-item--active .v-menu-item--content {
    color: $-color--primary;
    border-color: $-color--primary;
  }
}

.v-menu--mode-vertical {
  width: 100%;
  border-right: 1px solid $-color--border-base;

  .v-submenu--title-collapse,
  .v-menu-item--collapse {
    padding: 0 32px;
    overflow: hidden;
    text-overflow: clip;
  }

  .v-submenu--title-collapse .v-submenu--title-content-icon,
  .v-menu-item--collapse .v-menu-item--content-icon {
    margin-right: 0;
    font-size: 16px;
  }

  .v-submenu--title-collapse .v-submenu--title-content-text,
  .v-menu-item--collapse .v-menu-item--content-text {
    max-width: 0;
    opacity: 0;
    text-overflow: ellipsis;
  }
}

.v-menu--inline-collapse {
  width: 80px;
  transition: background-color 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
  overflow: hidden;
}
</style>
