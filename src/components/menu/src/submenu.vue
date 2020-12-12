<template>
  <div :class="classes">
    <v-menu-item :icon="icon">
      {{ title }}
    </v-menu-item>
    <div v-if="isCollapse">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref } from "vue";
import { MenuProvide, MenuProvideKey } from "./interface";
import VMenuItem from "./item.vue";

export default defineComponent({
  name: "VSubMenu",
  components: { VMenuItem },
  props: {
    icon: {
      type: String,
      default: undefined,
    },
    title: {
      type: [String, Number],
      default: undefined,
    },
  },
  setup() {
    const vMenu = inject<MenuProvide>(MenuProvideKey)!;

    const isCollapse = ref(false);

    const classes = computed(() => {
      return ["v-sub-menu", `v-sub-menu--${vMenu.mode.value}`];
    });
    return { classes, isCollapse };
  },
});
</script>

<style lang="scss">
.v-sub-menu--horizontal {
  display: inline-block;
  vertical-align: bottom;
}
</style>
