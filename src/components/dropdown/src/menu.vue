<template>
  <div class="v-dropdown-menu">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, provide } from "vue";
import {
  DropdownMenuProvide,
  DropdownMenuProvideKey,
  DropdownProvide,
  DropdownProvideKey,
} from "./interface";

export default defineComponent({
  name: "VDropdownMenu",
  emits: ["click"],
  setup(props, { emit }) {
    const mDropdown = inject<DropdownProvide>(DropdownProvideKey);

    provide<DropdownMenuProvide>(DropdownMenuProvideKey, {
      execOnClick(value) {
        emit("click", value);
        mDropdown?.updateVisible(false);
      },
    });
  },
});
</script>

<style lang="scss">
.v-dropdown-menu {
  position: relative;
  margin: 0;
  padding: 4px 0;
  text-align: left;
  background-color: #ffffff;
  background-clip: padding-box;
  border-radius: 2px;
  outline: none;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
}
</style>
