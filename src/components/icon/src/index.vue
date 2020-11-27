<template>
  <i :class="classes" :style="style" />
</template>

<script lang="ts">
import { defineComponent, PropType, computed, CSSProperties } from "vue";
import { IconEffect, IconType } from "./interface";

export default defineComponent({
  name: "VIcon",
  props: {
    type: {
      type: String as PropType<IconType>,
      required: true,
    },
    size: {
      type: Number,
      default: 0,
    },
    effect: {
      type: String as PropType<IconEffect>,
      default: "default" as IconEffect,
    },
  },
  setup(props) {
    const classes = computed(() => {
      return [
        "v-icon",
        `v-icon-${props.type}`,
        {
          [`v-icon--effect-${props.effect}`]: props.effect,
        },
      ];
    });

    const style = computed<CSSProperties>(() => {
      if (!props.size) return {};
      return { fontSize: `${props.size}px` };
    });

    return { classes, style };
  },
});
</script>

<style lang="scss">
@import "./index.scss";

$color-maps: (
  default: inherit,
  regular: $-color--text-regular,
  secondary: $-color--text-secondary,
  placeholder: $-color--text-placeholder,
  primary: $-color--primary,
  success: $-color--success,
  danger: $-color--danger,
  warning: $-color--warning,
  dark: $-color--dark,
);

@each $key in map-keys($color-maps) {
  $color: map-get($color-maps, $key);

  .v-icon--effect-#{$key} {
    color: $color;
  }
}
</style>
