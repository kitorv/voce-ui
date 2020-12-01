<template>
  <div ref="triggerRef">trigger</div>
  <div ref="contentRef">content</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { createPopper } from "@popperjs/core";

export default defineComponent({
  name: "VPopup",
  props: {},
  setup(props, { emit }) {
    const triggerRef = ref<HTMLDivElement>();
    const contentRef = ref<HTMLDivElement>();

    onMounted(() => {
      if (!triggerRef.value || !contentRef.value) return;

      createPopper(triggerRef.value, contentRef.value, {
        placement: "bottom-start",
      });
    });

    return { triggerRef, contentRef };
  },
});
</script>

<style lang="scss"></style>
