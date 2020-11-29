<template>
  <div class="v-layout-left" :style="style">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, CSSProperties, defineComponent } from "vue";

export default defineComponent({
  name: "VLayoutLeft",
  props: {
    width: {
      type: [Number, String],
      default: 300,
    },
  },
  setup(props, { slots }) {
    const style = computed<CSSProperties>(() => {
      const isString = typeof props.width === "string";
      return {
        width: isString ? props.width : `${props.width}px`,
      };
    });

    return { style };
  },
});
</script>

<style lang="scss">
.v-layout-left {
  overflow: auto;
  height: 100%;
  box-sizing: border-box;
}
</style>
