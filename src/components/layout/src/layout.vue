<template>
  <section :class="rootClass">
    <slot />
  </section>
</template>

<script lang="ts">
import { Component, computed, defineComponent } from "vue";
import VLayoutHeader from "./layout-header.vue";

export default defineComponent({
  name: "VLayout",
  setup(props, { slots }) {
    const isVertical = computed(() => {
      if (!slots.default) return false;
      const vNodes = slots.default();
      return vNodes.some((vNode) => {
        const componentName = (vNode.type as Component).name;
        if (!componentName) return false;
        return [VLayoutHeader.name].includes(componentName);
      });
    });

    const rootClass = computed(() => {
      return ["v-layout", { "v-layout--vertical": isVertical.value }];
    });

    return { rootClass };
  },
});
</script>

<style lang="scss">
.v-layout {
  display: flex;
  flex: 1;
  flex-basis: auto;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

.v-layout--vertical {
  flex-direction: column;
}
</style>
