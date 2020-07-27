<template>
  <div class="v-row" :style="rowStyle">
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
} from "vue";

export type RowGutter = number;

export interface VRow {
  gutter: [number, number];
}

export default defineComponent({
  name: "VRow",
  props: {
    gutter: [Number, Array] as PropType<RowGutter | Array<RowGutter>>,
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

    provide<VRow>("VRow", { gutter: normalizedGutter.value });

    return { rowStyle };
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
</style>
