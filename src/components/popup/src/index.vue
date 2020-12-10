<template>
  <div ref="referenceRef" v-bind="$attrs" v-on="referenceEvents">
    <slot name="reference" />
  </div>
  <teleport to="body">
    <transition
      :name="transition"
      @before-enter="onBeforeEnter"
      @after-leave="onAfterLeave"
    >
      <div
        v-show="isVisible"
        v-click-outside="onOutsideClick"
        ref="contentRef"
        class="v-popup--content"
        :style="contentStyle"
      >
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
    let popperInstance: Instance | undefined;
    const referenceRef = ref<HTMLDivElement>();
    const contentRef = ref<HTMLDivElement>();

    const createPopperInstacne = () => {
      const referenceEl = referenceRef.value;
      const contentEl = contentRef.value;
      if (!referenceEl || !contentEl) return;
      popperInstance = createPopper(referenceEl, contentEl, {
        placement: props.placement,
        modifiers: [
          {
            name: "computeStyles",
            options: { gpuAcceleration: false, adaptive: false },
          },
          {
            name: "arrow",
            options: { element: "v-popup-arrow", padding: 10 },
          },
          {
            name: "popupAttributes",
            enabled: true,
            phase: "beforeWrite",
            fn({ state }) {
              const attrs = state.attributes.popper;
              const popupAttrs: Record<string, string | boolean> = {};
              for (const key in attrs) {
                const pKey = key.replace("data-popper", "v-popup");
                popupAttrs[pKey] = attrs[key];
              }
              state.attributes.popper = popupAttrs;
            },
            requires: ["computeStyles"],
          },
        ],
      });
    };

    const destroyPopperInstance = () => {
      if (!popperInstance) return;
      popperInstance.destroy();
    };

    const zIndex = ref(nextZIndex());
    const contentStyle = computed<CSSProperties>(() => {
      return { zIndex: zIndex.value };
    });

    const isVisible = computed({
      get() {
        return props.visible;
      },
      set(value) {
        emit("update:visible", value);
        if (!value) return;
        zIndex.value = nextZIndex();
        createPopperInstacne();
      },
    });

    const referenceEvents = computed(() => {
      return {
        click() {
          isVisible.value = !isVisible.value;
        },
      };
    });

    let destroyTimeoutId = -1;
    const onAfterLeave = () => {
      destroyTimeoutId = window.setTimeout(destroyPopperInstance, 200);
    };
    const onBeforeEnter = () => {
      clearTimeout(destroyTimeoutId);
    };

    const onOutsideClick = (event: Event) => {
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
      onBeforeEnter,
      onAfterLeave,
      contentRef,
      contentStyle,
      onOutsideClick,
    };
  },
});
</script>
