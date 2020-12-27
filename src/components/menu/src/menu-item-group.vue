<template>
  <div class="v-menu-item-group">
    <div class="v-menu-item-group--title" :style="titleStyle">{{ title }}</div>
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, CSSProperties, defineComponent, inject } from "vue";
import {
  MenuProvide,
  MenuProvideKey,
  SubMenuProvide,
  SubMenuProvideKey,
} from "./interface";

export default defineComponent({
  name: "VMenuItemGroup",
  props: {
    title: {
      type: [String, Number],
      default: undefined,
    },
  },
  setup() {
    const vMenu = inject<MenuProvide>(MenuProvideKey)!;

    const vSubmenu = inject<SubMenuProvide>(SubMenuProvideKey, null);

    const titleStyle = computed<CSSProperties | undefined>(() => {
      if (vMenu.mode.value === "horizontal" || vMenu.collapse.value) return;
      const level = vSubmenu ? vSubmenu.level.value + 1 : 1;
      const indent = vMenu.computedIndent(level) - 16;
      const paddingLeft = indent <= 0 ? 0 : `${indent}px`;
      return { paddingLeft };
    });

    return { titleStyle };
  },
});
</script>

<style lang="scss">
.v-menu-item-group--title {
  padding: 8px 16px;
  color: $-color--text-secondary;
  font-size: 14px;
  transition: all 0.3s;
}

.v-menu-item-group {
  .v-menu-item {
    padding-left: 36px;
  }
}
</style>
