<template>
  <div :class="['vs-left-menu-item', classes]">
    <router-link
      v-if="data.path"
      class="vs-left-menu-item--link"
      :to="data.path"
    >
      {{ data.title }}
      <span v-text="data.subtitle" />
    </router-link>
    <div v-else class="vs-left-menu-item--title" v-text="data.title" />
    <vs-left-menu-item
      v-for="(child, index) in data.children"
      :key="index"
      :data="child"
      :level="level + 1"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export type MenuItemModel = {
  title: string;
  subtitle?: string;
  path?: string;
  children?: Array<MenuItemModel>;
};

export default defineComponent({
  name: "vs-left-menu-item",
  props: {
    data: {
      type: Object as PropType<MenuItemModel>,
      required: true,
    },
    level: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const classes = {
      "vs-left-menu-item--root": props.level === 0,
      "vs-left-menu-item--group":
        props.level > 0 &&
        props.data.children &&
        props.data.children.length > 0,
    };
    return { classes };
  },
});
</script>

<style lang="scss" scoped>
.vs-left-menu-item--link {
  display: block;
  position: relative;
  padding: 8px 24px;
  color: $-text-color-primary;
  font-weight: normal;
  line-height: 1.5;
  text-decoration: none;
  background-color: transparent;
  outline: none;
  transition: color 0.3s;
  cursor: pointer;

  &:active,
  &:hover {
    text-decoration: none;
    outline: 0;
    color: $-color-primary;
    background: mix($-color-primary, #ffffff, 3%);
  }

  &.router-link-exact-active {
    background: mix($-color-primary, #ffffff, 3%);
    color: $-color-primary;
  }

  &.router-link-exact-active::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: $-color-primary;
    box-shadow: 1px 0 12px 0 $-color-primary;
  }
}

.vs-left-menu-item--root {
  > .vs-left-menu-item--title {
    font-size: 14px;
    color: $-text-color-primary;
    padding: 12px 8px 12px 24px;
    font-weight: bold;
  }
}

.vs-left-menu-item--group {
  > .vs-left-menu-item--title {
    color: $-color-text-secondary;
    font-size: 14px;
    padding: 6px 8px 6px 24px;
  }
}
</style>
