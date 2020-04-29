<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, segoe ui, Roboto,
    helvetica neue, Arial, noto sans, sans-serif, apple color emoji,
    segoe ui emoji, segoe ui symbol, noto color emoji;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
}

#app {
  height: 100%;
  color: $-text-color-primary;
}
</style>
