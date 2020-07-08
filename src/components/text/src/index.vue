<template>
  <span :class="classList">Text</span>
</template>

<script lang="ts">
import { defineComponent, PropType, h } from "vue";

export type LevelType = 1 | 2 | 3 | 4 | 5 | 6;

export type TextType =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info";

export default defineComponent({
  name: "VText",
  props: {
    level: Number as PropType<LevelType>,
    type: {
      type: String as PropType<TextType>,
      default: "default",
    },
  },
  setup(props, { slots }) {
    const classList = [
      `v-text`,
      `v-text--type-${props.type}`,
      {
        [`v-text--level-${props.level}`]: props.level,
      },
    ];

    const htmlTag = props.level ? `h${props.level}` : "span";

    // return { classList };
    return () => h(htmlTag, { class: classList }, slots);
  },
});
</script>

<style lang="scss">
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

  .v-text--type-#{$key} {
    color: $color;
  }
}

h1.v-text {
  font-size: 38px;
  line-height: 1.23;
}

h2.v-text {
  font-size: 30px;
  line-height: 1.35;
}

h3.v-text {
  font-size: 24px;
  line-height: 1.35;
}

h4.v-text {
  font-size: 20px;
  line-height: 1.4;
}

h5.v-text {
  font-size: 18px;
  line-height: 1.45;
}

h6.v-text {
  font-size: 16px;
  line-height: 1.5;
}

h1.v-text,
h2.v-text,
h3.v-text,
h4.v-text,
h5.v-text,
h6.v-text {
  margin-top: 0.7em;
  margin-bottom: 0.5em;
  font-weight: 600;
}
</style>
