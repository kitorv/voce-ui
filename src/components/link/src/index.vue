<template>
  <a :class="classList" target="_blank">
    <span class="v-link--text">
      <slot />
    </span>
  </a>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export type LinkType =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info";

export default defineComponent({
  name: "VLink",
  props: {
    type: {
      type: String as PropType<LinkType>,
      default: "default",
    },
    underline: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    const classList = [
      `v-link`,
      `v-link--type-${props.type}`,
      {
        "v-link--underline": props.underline,
      },
    ];
    return { classList };
  },
});
</script>

<style lang="scss">
.v-link {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  position: relative;
  text-decoration: none;
  outline: none;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

.v-link--underline:hover:after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 0;
  bottom: 0;
  border-bottom: 1px solid transparent;
}

$color-maps: (
  primary: $-color--primary,
  success: $-color--success,
  warning: $-color--warning,
  danger: $-color--danger,
  info: #999999,
);

@each $key in map-keys($color-maps) {
  $color: map-get($color-maps, $key);

  .v-link--type-#{$key} {
    color: $color;
  }

  .v-link--type-#{$key}.v-link--underline:hover:after {
    border-bottom-color: $color;
  }
}
</style>
