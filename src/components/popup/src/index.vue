<template>
  <div ref="referenceRef" v-bind="$attrs" v-on="referenceEvents">
    <slot name="reference" />
  </div>
  <teleport to="body">
    <transition :name="transition">
      <div
        v-show="isVisible"
        v-click-outside="onOutsdieClick"
        ref="contentRef"
        class="v-popup--content"
        :style="contentStyle"
      >
        <div
          v-if="$slots.arrow"
          ref="arrowRef"
          class="v-popup--content-arrow"
          :style="arrowStyle"
        >
          <slot name="arrow" />
        </div>
        <slot name="content" />
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { computed, CSSProperties, defineComponent, PropType, ref } from "vue";
import { PopupPlacement, PopupTrigger } from "./interface";
import ClickOutside from "@/directives/click-outside";
import { nextZIndex } from "@/utils";
import { createPopper, Instance } from "@popperjs/core";

export default defineComponent({
  name: "VPopup",
  directives: { ClickOutside },
  emits: ["update:visible", "update:placement"],
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    trigger: {
      type: String as PropType<PopupTrigger>,
      default: "hover" as PopupTrigger,
    },
    placement: {
      type: String as PropType<PopupPlacement>,
      default: "bottom" as PopupPlacement,
    },
    transition: {
      type: String,
      default: undefined,
    },
  },
  setup(props, { emit }) {
    let popper: Instance | undefined;
    const referenceRef = ref<HTMLDivElement>();
    const arrowRef = ref<HTMLDivElement>();
    const contentRef = ref<HTMLDivElement>();
    const createPopperInstacne = () => {
      if (!referenceRef.value || !contentRef.value) return;
      return createPopper(referenceRef.value, contentRef.value, {
        placement: props.placement,
        modifiers: [
          {
            name: "computeStyles",
            options: { gpuAcceleration: false, adaptive: false },
          },
          {
            name: "arrow",
            options: { element: arrowRef.value, padding: 10 },
          },
        ],
      });
    };

    const zIndex = ref(nextZIndex());
    const arrowStyle = computed<CSSProperties>(() => {
      return { zIndex: zIndex.value + 1 };
    });
    const contentStyle = computed<CSSProperties>(() => {
      return { position: "relative", zIndex: zIndex.value };
    });

    const isVisible = computed({
      get() {
        return props.visible;
      },
      async set(value) {
        if (value) {
          zIndex.value = nextZIndex();
        }
        emit("update:visible", value);
        if (!popper) {
          popper = await createPopperInstacne();
        } else {
          await popper?.update();
        }
        emit("update:placement", popper?.state.placement);
      },
    });

    const referenceEvents = computed(() => {
      if (props.trigger === "hover") {
        let setTimeoutId: number;
        return {
          mouseenter() {
            clearTimeout(setTimeoutId);
            isVisible.value = true;
          },
          mouseleave() {
            clearTimeout(setTimeoutId);
            setTimeoutId = window.setTimeout(() => {
              isVisible.value = false;
            }, 200);
          },
        };
      }
      if (props.trigger === "click") {
        return {
          click() {
            isVisible.value = !isVisible.value;
          },
        };
      }
    });
    const contentEvents = computed(() => {
      if (props.trigger === "hover") {
        return referenceEvents.value;
      }
      return {};
    });

    const onOutsdieClick = (event: MouseEvent) => {
      if (
        !isVisible.value ||
        !referenceRef.value ||
        referenceRef.value.contains(event.target as HTMLElement)
      ) {
        return;
      }
      isVisible.value = false;
    };

    return {
      isVisible,
      referenceRef,
      referenceEvents,
      arrowRef,
      arrowStyle,
      contentRef,
      contentEvents,
      contentStyle,
      onOutsdieClick,
    };
  },
});
</script>

<style lang="scss">
.v-popup--content[data-popper-placement^="top"] .v-popup--content-arrow {
  bottom: 0;
}
.v-popup--content[data-popper-placement^="right"] .v-popup--content-arrow {
  left: 0;
}
.v-popup--content[data-popper-placement^="bottom"] .v-popup--content-arrow {
  top: 0;
}
.v-popup--content[data-popper-placement^="left"] .v-popup--content-arrow {
  right: 0;
}
</style>
