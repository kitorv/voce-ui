<template>
  <div class="v-layout-right" :style="rootStyle">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, CSSProperties, defineComponent } from "vue";

export default defineComponent({
  name: "VLayoutRight",
  props: {
    width: {
      type: [Number, String],
      default: 300,
    },
  },
  setup(props, { slots }) {
    const rootStyle = computed<CSSProperties>(() => {
      const isString = typeof props.width === "string";
      return {
        width: isString ? props.width : `${props.width}px`,
      };
    });

    return { rootStyle };
  },
});
</script>

<style lang="scss">
.v-layout-right {
  overflow: auto;
  height: 100%;
  box-sizing: border-box;
}
</style>
