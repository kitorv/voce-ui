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
} from "vue";
import {
  RowAlign,
  RowGutter,
  RowJustify,
  RowProvide,
  RowProvideKey,
} from "./interface";

export default defineComponent({
  name: "VRow",
  props: {
    gutter: {
      type: [Number, Array] as PropType<RowGutter>,
      default: 0,
    },
    justify: {
      type: String as PropType<RowJustify>,
      default: "start",
    },
    align: {
      type: String as PropType<RowAlign>,
      default: "top",
    },
  },
  setup(props, { slots, emit }) {
    const normalizedGutter = computed<[number, number]>(() => {
      if (Array.isArray(props.gutter)) {
        return props.gutter as [number, number];
      }
      return [props.gutter, 0];
    });

    const rowStyle = computed<CSSProperties | undefined>(() => {
      const [hGutter, vGutter] = normalizedGutter.value;
      if (!hGutter && !vGutter) return;
      return {
        marginLeft: hGutter ? `${hGutter / -2}px` : 0,
        marginRight: hGutter ? `${hGutter / -2}px` : 0,
        marginTop: vGutter ? `${vGutter / -2}px` : 0,
        marginBottom: vGutter ? `${vGutter / -2}px` : 0,
      };
    });

    const rowClass = computed(() => {
      return [
        "v-row",
        `v-row--justify-${props.justify}`,
        `v-row--align-${props.align}`,
      ];
    });

    provide<RowProvide>(RowProvideKey, { gutter: normalizedGutter });

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

.v-row--justify-start {
  justify-content: flex-start;
}

.v-row--justify-center {
  justify-content: center;
}

.v-row--justify-end {
  justify-content: flex-end;
}

.v-row--justify-space-between {
  justify-content: space-between;
}

.v-row--justify-space-around {
  justify-content: space-around;
}

.v-row--align-top {
  align-items: flex-start;
}

.v-row--align-middle {
  align-items: center;
}

.v-row--align-bottom {
  align-items: flex-end;
}
</style>
