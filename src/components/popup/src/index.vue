<template>
  <div ref="referenceRef" v-bind="$attrs" v-on="referenceEvents">
    <slot name="reference" />
  </div>
  <teleport to="body">
    <div ref="contentRef" class="v-popup--content" v-on="contentEvents">
      <transition :name="transition">
        <div
          v-click-outside="onOutsdieClick"
          v-show="visible"
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
    </div>
  </teleport>
</template>

<script lang="ts">
import {
  computed,
  CSSProperties,
  defineComponent,
  PropType,
  ref,
  watch,
} from "vue";
import { PopupPlacement, PopupTrigger } from "./interface";
import ClickOutside from "@/directives/click-outside";
import { createPopper, Instance } from "@popperjs/core";
import { nextZIndex } from "@/utils";

export default defineComponent({
  name: "VPopup",
  directives: { ClickOutside },
  emits: ["update:visible", "update:placement"],
  props: {
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
    const visible = ref(false);
    let setTimeoutId: number;
    const referenceEvents = computed(() => {
      if (props.trigger === "hover") {
        return {
          mouseenter() {
            clearTimeout(setTimeoutId);
            visible.value = true;
          },
          mouseleave() {
            clearTimeout(setTimeoutId);
            setTimeoutId = window.setTimeout(() => {
              visible.value = false;
            }, 200);
          },
        };
      }
      if (props.trigger === "click") {
        return {
          click() {
            visible.value = !visible.value;
          },
        };
      }
      if (props.trigger === "contextMenu") {
        return {
          contextMenu(event: Event) {
            event.preventDefault();
            visible.value = true;
          },
        };
      }
    });
    const contentEvents = computed(() => {
      if (props.trigger !== "hover") return {};
      return referenceEvents.value;
    });

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
            name: "arrow",
            options: { element: arrowRef.value, padding: 10 },
          },
        ],
      });
    };
    const zIndex = ref(nextZIndex());
    watch(visible, async () => {
      if (visible.value) {
        zIndex.value = nextZIndex();
      }
      if (!popper) {
        popper = createPopperInstacne();
      } else {
        await popper.update();
      }
      emit("update:placement", popper?.state.options.placement);
    });
    const arrowStyle = computed<CSSProperties>(() => {
      return { zIndex: zIndex.value + 1 };
    });
    const contentStyle = computed<CSSProperties>(() => {
      return { position: "relative", zIndex: zIndex.value };
    });

    const onOutsdieClick = (event: MouseEvent) => {
      if (
        !visible.value ||
        !referenceRef.value ||
        referenceRef.value.contains(event.target as HTMLElement)
      ) {
        return;
      }
      visible.value = false;
    };

    return {
      visible,
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
