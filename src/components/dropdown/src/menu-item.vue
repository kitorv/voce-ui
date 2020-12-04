<template>
  <div class="v-dropdown-menu-item">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VDropdownMenuItem",
});
</script>

<style lang="scss">
.v-dropdown-menu-item {
  clear: both;
  margin: 0;
  padding: 5px 12px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  white-space: nowrap;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background: darken(#ffffff, 8%);
  }
}
</style>
