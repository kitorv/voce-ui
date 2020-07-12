<template>
  <span>ROW<slot /></span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VRow",
  props: {},
  setup(props, { slots, emit }) {},
});
</script>

<style lang="scss"></style>
