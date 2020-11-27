<template>
  <div :class="colClasses" :style="colStyle">
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
import {
  ColFlex,
  ColOffset,
  ColPull,
  ColPush,
  ColSize,
  ColSizeKey,
  ColSpan,
  RowProvide,
  RowProvideKey,
} from "./interface";

export default defineComponent({
  name: "VCol",
  props: {
    span: {
      type: Number as PropType<ColSpan>,
      default: 24 as ColSpan,
    },
    offset: {
      type: Number as PropType<ColOffset>,
      default: 0 as ColOffset,
    },
    pull: {
      type: Number as PropType<ColPull>,
      default: 0 as ColOffset,
    },
    push: {
      type: Number as PropType<ColPush>,
      default: 0 as ColPush,
    },
    flex: {
      type: [String, Number] as PropType<ColFlex>,
      default: undefined,
    },
    xs: {
      type: [Number, Object] as PropType<ColSize>,
      default: 24 as ColSize,
    },
    sm: {
      type: [Number, Object] as PropType<ColSize>,
      default: 24 as ColSize,
    },
    md: {
      type: [Number, Object] as PropType<ColSize>,
      default: 24 as ColSize,
    },
    lg: {
      type: [Number, Object] as PropType<ColSize>,
      default: 24 as ColSize,
    },
    xl: {
      type: [Number, Object] as PropType<ColSize>,
      default: 24 as ColSize,
    },
    xxl: {
      type: [Number, Object] as PropType<ColSize>,
      default: 24 as ColSize,
    },
  },
  setup(props, { slots, emit }) {
    const vRow = inject<RowProvide>(RowProvideKey)!;

    const sizeClass = computed(() => {
      const sizes: Array<ColSizeKey> = ["xs", "sm", "md", "lg", "xl", "xxl"];
      let sizeClasses: Record<string, boolean> = {};
      sizes.forEach((size) => {
        let sizeProps: ColSize = {};
        const propSize = props[size];
        if (typeof propSize === "number") {
          sizeProps.span = propSize;
        }
        if (typeof propSize === "object") {
          sizeProps = propSize || {};
        }
        const { span, offset, push, pull } = sizeProps;
        Object.assign(sizeClasses, {
          [`v-col--${size}-${span}`]: span !== 24,
          [`v-col--${size}-offset-${offset}`]: offset,
          [`v-col--${size}-push-${push}`]: push,
          [`v-col--${size}-pull-${pull}`]: pull,
        });
      });
      return sizeClasses;
    });

    const colClasses = computed(() => {
      return [
        `v-col`,
        `v-col--${props.span}`,
        {
          [`v-col--offset-${props.offset}`]: props.offset,
          [`v-col--pull-${props.pull}`]: props.pull,
          [`v-col--push-${props.push}`]: props.push,
          ...sizeClass.value,
        },
      ];
    });

    const parseFlex = () => {
      if (props.flex === undefined) return;
      if (typeof props.flex === "number") {
        return `${props.flex} ${props.flex} auto`;
      }
      if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(props.flex)) {
        return `0 0 ${props.flex}`;
      }
      return props.flex;
    };

    const colStyle = computed<CSSProperties>(() => {
      const [hGutter, vGutter] = vRow.gutter.value;
      const flex = parseFlex();

      return {
        paddingLeft: hGutter ? `${hGutter / 2}px` : 0,
        paddingRight: hGutter ? `${hGutter / 2}px` : 0,
        paddingTop: vGutter ? `${vGutter / 2}px` : 0,
        paddingBottom: vGutter ? `${vGutter / 2}px` : 0,
        flex,
      };
    });

    return { colClasses, colStyle };
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
        display: block;
        flex: 0 0 $value;
        max-width: $value;
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
