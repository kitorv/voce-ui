<template>
  <div :class="['vs-index-menu', classes]">
    <router-link v-if="data.path" class="vs-index-menu--link" :to="data.path">
      {{ data.title }}
      <span v-text="data.subtitle" />
    </router-link>
    <div v-else class="vs-index-menu--title" v-text="data.title" />
    <vc-index-menu
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
  name: "VcIndexMenu",
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
      "vs-index-menu--root": props.level === 0,
      "vs-index-menu--group":
        props.level > 0 &&
        props.data.children &&
        props.data.children.length > 0,
    };
    return { classes };
  },
});
</script>

<style lang="scss" scoped>
.vs-index-menu--link {
  display: block;
  position: relative;
  padding: 8px 24px;
  color: $-color--text-primary;
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
    color: $-color--primary;
  }

  &.router-link-exact-active {
    background: $-color--primary-1;
    color: $-color--primary;
  }

  &.router-link-exact-active::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: $-color--primary;
    box-shadow: 1px 0 12px 0 $-color--primary;
  }
}

.vs-index-menu--root {
  > .vs-index-menu--title {
    font-size: 14px;
    color: $-color--text-primary;
    padding: 12px 8px 12px 24px;
    font-weight: bold;
  }
}

.vs-index-menu--group {
  > .vs-index-menu--title {
    color: $-color--text-secondary;
    font-size: 14px;
    padding: 6px 8px 6px 24px;
  }
}
</style>
