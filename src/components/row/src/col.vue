<template>
  <div :class="classList">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export type SpanType =
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

export default defineComponent({
  name: "VCol",
  props: {
    span: Number as PropType<SpanType>,
  },
  setup(props, { slots, emit }) {
    const classList = [
      `v-col`,
      {
        [`v-col--${props.span}`]: props.span,
      },
    ];

    return { classList };
  },
});
</script>

<style lang="scss">
.v-col {
  position: relative;
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

  // .n-col-offset-#{$i} {
  //   margin-left: (1 / 24 * $i * 100) * 1%;
  // }

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
