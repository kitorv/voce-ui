<template>
  <div :class="rootClass">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, provide } from "vue";
import { MenuMode, MenuProvide, MenuProvideKey } from "./interface";

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
    accordion: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const isCollapse = computed(() => {
      return props.mode === "vertical" && props.collapse;
    });

    const rootClass = computed(() => {
      return [
        "v-menu",
        `v-menu--mode-${props.mode}`,
        { "v-menu--collapse": isCollapse.value },
      ];
    });

    provide<MenuProvide>(MenuProvideKey, {
      mode: computed(() => props.mode),
      submenuList: new Map(),
      isCollapse: isCollapse,
      isAccordion: computed(() => props.accordion),
      isHorizontal: computed(() => props.mode === "horizontal"),
      isVertical: computed(() => props.mode === "vertical"),
      activeIndex: computed(() => props.activeIndex),
      updateActiveIndex(value) {
        emit("update:active-index", value);
      },
      addSubmenu(key, submenu) {
        this.submenuList.set(key, submenu);
      },
      delSubmenu(key) {
        this.submenuList.delete(key);
      },
      closeAllSubmenu() {
        this.submenuList.forEach((submenu) => submenu.close());
      },
      inactiveAllSubmenu() {
        this.submenuList.forEach((submenu) => submenu.inactive());
      },
      computedIndent: (level) => level * 24,
    });

    return { rootClass, isCollapse };
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
  width: 100%;
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

.v-submenu--content .v-menu-item--active {
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

  .v-submenu--content {
    box-shadow: none;
    padding: 0;
  }

  // .v-submenu--title-collapse,

  // .v-submenu--title-collapse .v-submenu--title-content-icon,
  // .v-menu-item--collapse .v-menu-item--content-icon {
  //   margin-right: 0;
  //   font-size: 16px;
  // }

  // .v-submenu--title-collapse .v-submenu--title-content-text,
  // .v-menu-item--collapse .v-menu-item--content-text {
  //   max-width: 0;
  //   opacity: 0;
  //   text-overflow: ellipsis;
  // }

  .v-menu-item::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    border-right: 3px solid $-color--primary;
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
      opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
    transform: scaleY(0.0001);
    opacity: 0;
  }

  .v-menu-item--active::after {
    transform: scaleY(1);
    opacity: 1;
  }
}

.v-menu--collapse {
  width: 80px;
  transition: background-color 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1);
  overflow: hidden;

  .v-menu-item,
  .v-submenu--title {
    padding: 0 30px;
    overflow: hidden;
    text-overflow: clip;
  }

  .v-submenu--title-content-icon,
  .v-menu-item--content-icon {
    margin-right: 0;
    font-size: 18px;
  }

  .v-submenu--title-content-text,
  .v-menu-item--content-text,
  .v-menu-item-group--title {
    max-width: 0;
    opacity: 0;
    text-overflow: ellipsis;
  }
}
</style>
