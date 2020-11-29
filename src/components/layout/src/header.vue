<template>
  <div class="v-layout-header">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VLayoutHeader",
  setup(props, { slots }) {},
});
</script>

<style lang="scss">
.v-layout-header {
  box-sizing: border-box;
}
</style>
