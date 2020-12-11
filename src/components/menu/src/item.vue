<template>
  <div :class="classes">
    <div class="v-menu-item-content">
      <v-icon v-if="icon" :type="icon" class="v-menu-item-content-icon" />
      <div class="v-menu-item-content-text">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { MenuItemIcon } from "./interface";

export default defineComponent({
  name: "VMenuItem",
  props: {
    icon: {
      type: String as PropType<MenuItemIcon>,
      default: undefined,
    },
  },
  setup() {
    const classes = computed(() => {
      return ["v-menu-item", `v-v-menu-item--horizontal`];
    });

    return { classes };
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
}
</style>
