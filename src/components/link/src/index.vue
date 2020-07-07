<template>
  <a :class="classList" target="_blank">
    <i v-if="prefixIcon" :class="['v-link--prefix-icon', prefixIcon]" />
    <span class="v-link--text">
      <slot />
    </span>
    <i v-if="suffixIcon" :class="['v-link--suffix-icon', suffixIcon]" />
  </a>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IconType } from "../../icons";

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
    disabled: Boolean,
    prefixIcon: String as PropType<IconType>,
    suffixIcon: String as PropType<IconType>,
  },
  setup(props, { emit }) {
    const classList = [
      `v-link`,
      `v-link--type-${props.type}`,
      {
        "v-link--underline": props.underline && !props.disabled,
        "v-link--disabled": props.disabled,
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
  default: $-color--text-primary,
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

    &.v-link--underline:hover:after {
      border-bottom-color: $color;
    }

    &.v-link--disabled {
      color: mix($color, #ffffff, 60%);
      cursor: not-allowed;
    }
  }
}

.v-link--prefix-icon {
  margin-right: 4px;
}

.v-link--suffix-icon {
  margin-left: 4px;
}
</style>
