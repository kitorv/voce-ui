<template>
  <button class="v-button">Default</button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export type ButtonType =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger";

export default defineComponent({
  name: "VButton",
  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: "default" as ButtonType,
    },
  },
});
</script>

<style lang="scss">
.v-button {
  line-height: 1.5;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  padding: 4px 15px;
  font-size: 14px;
  border-radius: 2px;
  color: $-color--text-primary;
  background-color: #fff;
  border-color: $-color--border-base;
  appearance: button;
  cursor: pointer;

  &:active,
  &:focus {
    outline: 0;
  }

  &:hover {
    color: $-color--primary;
    background-color: #fff;
    border-color: $-color--primary;
  }

  &:active {
    color: darken($-color--primary, 10%);
    background-color: #fff;
    border-color: darken($-color--primary, 10%);
  }
}
</style>
