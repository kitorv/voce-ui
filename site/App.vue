<template>
  <div>
    <h1>vuce-ui</h1>
    <start-doc-view></start-doc-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StartDocView from "./docs/start.md";

export default defineComponent({
  components: { StartDocView },
});
</script>

<style lang="scss">
h1 {
  color: $-color-primary;
}
</style>
