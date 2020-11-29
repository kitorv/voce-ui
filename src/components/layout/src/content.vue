<template>
  <div class="v-layout-content">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VLayoutContent",
  setup(props, { slots }) {},
});
</script>

<style lang="scss">
.v-layout-content {
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  height: 100%;
  box-sizing: border-box;
}
</style>
