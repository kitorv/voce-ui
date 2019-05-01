<template>
  <div class="kv-dropdown"
       v-clickoutside="handleClickOutside">
    <div class="kv-dropdown--selection"
         @click="handleSelectionClick">
      <slot name="selection"></slot>
    </div>
    <transition name="kv-dropdown">
      <div class="kv-dropdown--panel"
           v-show="visible">
        <slot name="panel"></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import clickoutside from "../../directives/clickoutside.js";

export default {
  name: "KvDropdown",
  componentName: "KvDropdown",
  directives: { clickoutside },
  props: {
    visible: Boolean,
    disabled: Boolean
  },
  methods: {
    handleClickOutside() {
      this.$emit("update:visible", false);
    },
    handleSelectionClick() {
      if (!this.visible && this.disabled) {
        return;
      }
      this.$emit("update:visible", !this.visible);
    }
  }
};
</script>