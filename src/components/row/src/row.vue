<template>
  <div class="v-row">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VRow",
  props: {},
  setup(props, { slots, emit }) {},
});
</script>

<style lang="scss">
.v-row {
  display: flex;
  flex-flow: row wrap;

  &::before,
  &::after {
    display: flex;
  }
}
</style>
