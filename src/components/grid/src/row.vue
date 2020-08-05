<template>
  <div :class="rowClass" :style="rowStyle">
    <slot />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  computed,
  CSSProperties,
  provide,
  ComputedRef,
} from "vue";

export type RowGutter = number;

export type RowJustify =
  | "start"
  | "end"
  | "center"
  | "space-around"
  | "space-between";

export type RowAlign = "top" | "middle" | "bottom";

export interface VRow {
  gutter: ComputedRef<[number, number]>;
}

export default defineComponent({
  name: "VRow",
  props: {
    gutter: [Number, Array] as PropType<RowGutter | Array<RowGutter>>,
    justify: String as PropType<RowJustify>,
    align: String as PropType<RowAlign>,
  },
  setup(props, { slots, emit }) {
    const normalizedGutter = computed((): [number, number] => {
      if (Array.isArray(props.gutter)) {
        const [h, v] = props.gutter;
        return [h, v];
      }
      const gutter = props.gutter || 0;
      return [gutter, 0];
    });

    const rowStyle = computed(() => {
      const [hGutter, vGutter] = normalizedGutter.value;
      const style: CSSProperties = {};
      if (hGutter > 0) {
        style.marginLeft = `${hGutter / -2}px`;
        style.marginRight = `${hGutter / -2}px`;
      }
      if (vGutter > 0) {
        style.marginTop = `${vGutter / -2}px`;
        style.marginBottom = `${vGutter / -2}px`;
      }
      return style;
    });

    const rowClass = computed(() => {
      return [
        "v-row",
        { "v-row--start": props.justify === "start" },
        { "v-row--center": props.justify === "center" },
        { "v-row--end": props.justify === "end" },
        { "v-row--space-around": props.justify === "space-around" },
        { "v-row--space-between": props.justify === "space-between" },
        { "v-row--top": props.align === "top" },
        { "v-row--middle": props.align === "middle" },
        { "v-row--bottom": props.align === "bottom" },
      ];
    });

    provide<VRow>("VRow", { gutter: normalizedGutter });

    return { rowClass, rowStyle };
  },
});
</script>

<style lang="scss">
.v-row {
  display: flex;
  flex-flow: row wrap;

  &::before,
  &::after {
    display: flex;
  }
}

.v-row--start {
  justify-content: flex-start;
}

.v-row--center {
  justify-content: center;
}

.v-row--end {
  justify-content: flex-end;
}

.v-row--space-between {
  justify-content: space-between;
}

.v-row--space-around {
  justify-content: space-around;
}

.v-row--top {
  align-items: flex-start;
}

.v-row--middle {
  align-items: center;
}

.v-row--bottom {
  align-items: flex-end;
}
</style>
