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

export type ColSpan = ColSpanType;

export type ColOffset = ColSpanType;

export default defineComponent({
  name: "VCol",
  props: {
    span: Number as PropType<ColSpan>,
    offset: Number as PropType<ColOffset>,
  },
  setup(props, { slots, emit }) {
    const vRow = inject<VRow>("VRow", { gutter: [0, 0] });

    const colClass = [
      `v-col`,
      {
        [`v-col--${props.span}`]: props.span,
        [`v-col--offset-${props.offset}`]: props.offset,
      },
    ];

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

  // .n-col-pull-#{$i} {
  //   position: relative;
  //   right: (1 / 24 * $i * 100) * 1%;
  // }

  // .n-col-push-#{$i} {
  //   position: relative;
  //   left: (1 / 24 * $i * 100) * 1%;
  // }
}

// .ant-col-24 {
//     display: block;
//     -webkit-box-flex: 0;
//     -ms-flex: 0 0 100%;
//     flex: 0 0 100%;
//     max-width: 100%
// }

// .ant-col-push-24 {
//     left: 100%
// }

// .ant-col-pull-24 {
//     right: 100%
// }

// .ant-col-offset-24 {
//     margin-left: 100%
// }

// .ant-col-order-24 {
//     -webkit-box-ordinal-group: 25;
//     -ms-flex-order: 24;
//     order: 24
// }
</style>
