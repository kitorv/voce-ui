<template>
  <button :class="classList">
    <slot />
  </button>
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
  setup(props) {
    const classList = [`v-button`, `v-button--type-${props.type}`];
    return { classList };
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
}

.v-button--type-default {
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

$color-maps: (
  primary: $-color--primary,
  success: $-color--success,
  warning: $-color--warning,
  danger: $-color--danger,
);

@each $key in map-keys($color-maps) {
  $color: map-get($color-maps, $key);

  .v-button--type-#{$key} {
    border-color: $color;
    background: $color;
    color: #ffffff;

    &:hover {
      border-color: mix($color, #ffffff, 90%);
      background: mix($color, #ffffff, 90%);
    }

    &:active {
      border-color: mix($color, #000000, 90%);
      background: mix($color, #000000, 90%);
    }
  }
}
</style>
