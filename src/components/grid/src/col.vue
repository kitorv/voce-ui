<template>
  <div :class="colClass" :style="colStyle">
    <slot />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  inject,
  computed,
  CSSProperties,
} from "vue";
import { VRow } from "./row.vue";

type ColSpanType =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;

type ColSizeType = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export type ColSpan = ColSpanType;

export type ColOffset = ColSpanType;

export type ColPull = ColSpanType;

export type ColPush = ColSpanType;

export type ColFlex = number | "none" | "auto" | string;

export interface ColSize {
  span?: ColSpan;
  order?: ColSpan;
  offset?: ColSpan;
  push?: ColSpan;
  pull?: ColSpan;
}

export default defineComponent({
  name: "VCol",
  props: {
    span: Number as PropType<ColSpan>,
    offset: Number as PropType<ColOffset>,
    pull: Number as PropType<ColPull>,
    push: Number as PropType<ColPush>,
    flex: [String, Number] as PropType<ColFlex>,
    xs: [Number, Object] as PropType<ColSpan | ColSize>,
    sm: [Number, Object] as PropType<ColSpan | ColSize>,
    md: [Number, Object] as PropType<ColSpan | ColSize>,
    lg: [Number, Object] as PropType<ColSpan | ColSize>,
    xl: [Number, Object] as PropType<ColSpan | ColSize>,
    xxl: [Number, Object] as PropType<ColSpan | ColSize>,
  },
  setup(props, { slots, emit }) {
    const vRow = inject<VRow>("VRow", { gutter: [0, 0] });

    const sizeClass = computed(() => {
      const sizes: Array<ColSizeType> = ["xs", "sm", "md", "lg", "xl", "xxl"];
      let sizeClasses: Record<string, boolean> = {};
      sizes.forEach((size) => {
        let sizeProps: ColSize = {};
        const propSize = props[size];
        if (typeof propSize === "number") {
          sizeProps.span = propSize;
        }
        if (typeof propSize === "object") {
          sizeProps = propSize || {};
          debugger;
        }

        const { span, offset, push, pull } = sizeProps;
        sizeClasses = {
          ...sizeClasses,
          [`v-col--${size}-${span}`]: span !== undefined,
          [`v-col--${size}-offset-${offset}`]: offset !== undefined,
          [`v-col--${size}-push-${push}`]: push !== undefined,
          [`v-col--${size}-pull-${pull}`]: pull !== undefined,
        };
      });
      return sizeClasses;
    });

    const colClass = [
      `v-col`,
      {
        [`v-col--${props.span}`]: props.span,
        [`v-col--offset-${props.offset}`]: props.offset,
        [`v-col--pull-${props.pull}`]: props.pull,
        [`v-col--push-${props.push}`]: props.push,
        ...sizeClass.value,
      },
    ];

    const parseFlex = () => {
      if (!props.flex) return;
      if (typeof props.flex === "number") {
        return `${props.flex} ${props.flex} auto`;
      }
      if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(props.flex)) {
        return `0 0 ${props.flex}`;
      }
      return props.flex;
    };

    const colStyle = computed(() => {
      const style: CSSProperties = {};
      const [hGutter, vGutter] = vRow.gutter;
      if (hGutter > 0) {
        style.paddingLeft = `${hGutter / 2}px`;
        style.paddingRight = `${hGutter / 2}px`;
      }
      if (vGutter > 0) {
        style.paddingTop = `${vGutter / 2}px`;
        style.paddingBottom = `${vGutter / 2}px`;
      }
      style.flex = parseFlex();
      return style;
    });

    return { colClass, colStyle };
  },
});
</script>

<style lang="scss">
.v-col {
  position: relative;
  box-sizing: border-box;
}

.v-col-0 {
  display: none;
}

@for $i from 0 through 24 {
  $value: (1 / 24 * $i * 100) * 1%;

  .v-col--#{$i} {
    display: block;
    flex: 0 0 $value;
    max-width: $value;
  }

  .v-col--offset-#{$i} {
    margin-left: $value;
  }

  .v-col--pull-#{$i} {
    right: $value;
  }

  .v-col--push-#{$i} {
    left: $value;
  }
}

$size-maps: (
  xs: max-width 576px,
  sm: max-width 768px,
  md: max-width 992px,
  lg: max-width 1200px,
  xl: max-width 1600px,
  xxl: min-width 1600px,
);

@each $key in map-keys($size-maps) {
  $screen: map-get($size-maps, $key);

  @media only screen and (nth($screen,1): nth($screen, 2)) {
    @for $i from 0 through 24 {
      $value: (1 / 24 * $i * 100) * 1%;

      .v-col--#{$key}-#{$i} {
        width: $value;
      }

      .v-col--#{$key}-offset-#{$i} {
        margin-left: $value;
      }

      .v-col--#{$key}-pull-#{$i} {
        right: $value;
      }

      .v-col--#{$key}-push-#{$i} {
        left: $value;
      }
    }
  }
}
</style>
