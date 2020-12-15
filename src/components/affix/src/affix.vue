<template>
  <div ref="affixRef">
    <div class="v-affix" :style="affixStyle">
      <slot />
    </div>
    <div :style="placeholderStyle" />
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted,
  PropType,
  ref,
  CSSProperties,
} from "vue";
import { AffixTarget } from "./interface";
import { nextZIndex } from "@/utils";

export default defineComponent({
  name: "VAffix",
  props: {
    offsetTop: {
      type: Number,
      default: 0,
    },
    offsetBottom: {
      type: Number,
      default: 0,
    },
    target: {
      type: [HTMLElement, Window] as PropType<AffixTarget>,
      default: undefined,
    },
  },
  emits: ["change"],
  setup(props, { emit }) {
    const affixRef = ref<HTMLDivElement>();

    const getTargetRect = () => {
      if (!props.target || props.target === window) {
        return { top: 0, bottom: window.innerHeight } as DOMRect;
      }
      const el = props.target as HTMLElement;
      return el.getBoundingClientRect();
    };

    const getFixedTop = (
      placeholderReact: DOMRect,
      targetRect: DOMRect,
      offsetTop?: number
    ) => {
      if (offsetTop === undefined) return;
      if (targetRect.top < placeholderReact.top - offsetTop) return;
      return offsetTop + targetRect.top;
    };

    const getFixedBottom = (
      placeholderReact: DOMRect,
      targetRect: DOMRect,
      offsetBottom?: number
    ) => {
      if (offsetBottom === undefined) return;
      if (targetRect.bottom > placeholderReact.bottom + offsetBottom) return;
      const targetBottomOffset = window.innerHeight - targetRect.bottom;
      return offsetBottom + targetBottomOffset;
    };

    const affixStyle = ref<CSSProperties>();
    const placeholderStyle = ref<CSSProperties>();

    const scroll = () => {
      if (!affixRef.value) return;
      const { offsetTop, offsetBottom } = props;
      const targetRect = getTargetRect();
      const affixReact = affixRef.value.getBoundingClientRect();

      const width = `${affixReact.width}px`;
      const height = `${affixReact.height}px`;
      const zIndex = nextZIndex();

      const fixedTop = getFixedTop(affixReact, targetRect, offsetTop);

      if (fixedTop !== undefined) {
        affixStyle.value = {
          position: "fixed",
          top: `${fixedTop}px`,
          width,
          height,
          zIndex,
        };
        placeholderStyle.value = { width, height };
        return;
      }
      const fixedBottom = getFixedBottom(affixReact, targetRect, offsetBottom);

      if (fixedBottom !== undefined) {
        affixStyle.value = {
          position: "fixed",
          bottom: `${fixedBottom}px`,
          width,
          height,
          zIndex,
        };
        placeholderStyle.value = { width, height };
        return;
      }

      affixStyle.value = {};
      placeholderStyle.value = {};
    };

    onMounted(() => {
      window.addEventListener("scroll", scroll, false);
      window.addEventListener("resize", scroll, false);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", scroll, false);
      window.removeEventListener("resize", scroll, false);
    });

    return { affixRef, affixStyle, placeholderStyle };
  },
});
</script>
