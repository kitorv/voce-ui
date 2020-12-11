<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { MenuMode } from "./interface";

export default defineComponent({
  name: "VMenu",
  props: {
    mode: {
      type: String as PropType<MenuMode>,
      default: "horizontal" as MenuMode,
    },
    activeIndex: {
      type: [String, Number],
      default: undefined,
    },
  },
  setup(props, { attrs }) {
    console.log(attrs);

    const classes = computed(() => {
      return ["v-menu", `v-v-menu--mode-${props.mode}`];
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

.v-v-menu--mode-horizontal {
  line-height: 46px;
  border-bottom: 1px solid $-color--border-base;
  white-space: nowrap;
}
</style>
