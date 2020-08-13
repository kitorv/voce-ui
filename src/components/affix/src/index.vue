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
  Ref,
  CSSProperties,
} from "vue";
import { nextZIndex } from "../../../utils";

export type AffixTarget = HTMLElement | Window;

export default defineComponent({
  name: "VAffix",
  props: {
    offsetTop: Number,
    offsetBottom: Number,
    target: [HTMLElement, Window] as PropType<AffixTarget>,
  },
  emits: ["change"],
  setup(props, { emit }) {
    const affixRef = ref<unknown>() as Ref<HTMLDivElement>;

    const getTargetRect = () => {
      if (!props.target || props.target === window) {
        return { top: 0, bottom: window.innerHeight } as ClientRect;
      }
      const targetElement = props.target as HTMLElement;
      return targetElement.getBoundingClientRect();
    };

    const getFixedTop = (
      placeholderReact: ClientRect,
      targetRect: ClientRect,
      offsetTop?: number
    ) => {
      if (offsetTop === undefined) return;
      if (targetRect.top < placeholderReact.top - offsetTop) return;
      return offsetTop + targetRect.top;
    };

    const getFixedBottom = (
      placeholderReact: ClientRect,
      targetRect: ClientRect,
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
