<template>
  <div class="v-layout-footer">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VLayoutFooter",
  setup(props, { slots }) {},
});
</script>

<style lang="scss">
.v-layout-footer {
  box-sizing: border-box;
}
</style>
