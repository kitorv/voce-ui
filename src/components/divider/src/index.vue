<template>
  <div :class="classList">
    divider
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VDivider",
  props: {},
  setup(props, { slots, emit }) {
    const classList = [`v-vidider`];

    return { classList };
  },
});
</script>

<style lang="scss"></style>
