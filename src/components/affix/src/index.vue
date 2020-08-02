<template>
  <div>
    <div>
      <slot />
    </div>
    <div></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted, PropType } from "vue";

export default defineComponent({
  name: "VAffix",
  props: {
    offsetTop: {
      type: Number,
      default: 0,
    },
    offsetBottom: Number,
    target: {
      type: [Object, Window] as PropType<HTMLElement | Window>,
      default: window,
    },
  },
  emits: ["change"],
  setup(props, { emit }) {
    const scroll = () => {};

    onMounted(() => {
      window.addEventListener("scroll", scroll, false);
      window.addEventListener("resize", scroll, false);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", scroll, false);
      window.removeEventListener("resize", scroll, false);
    });

    return {};
  },
});
</script>

<style lang="scss"></style>
