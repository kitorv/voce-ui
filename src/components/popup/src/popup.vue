<template>
  <div ref="referenceRef" v-bind="$attrs" v-on="referenceEvents">
    <slot name="reference" />
  </div>
  <v-popup-teleport :to="target">
    <transition
      :name="transition"
      @before-enter="onBeforeEnter"
      @after-leave="onAfterLeave"
    >
      <div
        v-show="isVisible"
        v-click-outside="onOutsideClick"
        v-on="contentEvents"
        ref="contentRef"
        class="v-popup--content"
        :style="contentStyle"
      >
        <slot name="content" />
      </div>
    </transition>
  </v-popup-teleport>
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
import {
  PopupOffset,
  PopupPlacement,
  PopupTarget,
  PopupTrigger,
} from "./interface";
import ClickOutside from "@/directives/click-outside";
import { nextZIndex } from "@/utils";
import { createPopper, Instance } from "@popperjs/core";
import VPopupTeleport from "./popup-teleport.vue";

export default defineComponent({
  name: "VPopup",
  components: { VPopupTeleport },
  directives: { ClickOutside },
  emits: ["update:visible", "update:placement"],
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    trigger: {
      type: String as PropType<PopupTrigger>,
      default: "click" as PopupTrigger,
    },
    placement: {
      type: String as PropType<PopupPlacement>,
      default: "bottom" as PopupPlacement,
    },
    transition: {
      type: String,
      default: undefined,
    },
    offset: {
      type: [Array, Function] as PropType<PopupOffset>,
      default: () => [0, 0],
    },
    target: {
      type: [String, Object] as PropType<PopupTarget>,
      default: "body" as PopupTarget,
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
            options: { element: "[popup-arrow]", padding: 10 },
          },
          {
            name: "offset",
            options: {
              offset: (state: {
                reference: DOMRect;
                popper: DOMRect;
                placement: PopupPlacement;
              }) => {
                if (Array.isArray(props.offset)) return props.offset;
                const { reference, popper, placement } = state;
                return props.offset({ reference, placement, popup: popper });
              },
            },
          },
          {
            name: "popupAttributes",
            enabled: true,
            phase: "beforeWrite",
            fn({ state }) {
              const attrs = state.attributes.popper;
              const popupAttrs: Record<string, string | boolean> = {};
              for (const key in attrs) {
                const pKey = key.replace("data-popper", "popup");
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
      },
    });
    watch(isVisible, () => {
      if (!isVisible.value) return;
      zIndex.value = nextZIndex();
      createPopperInstacne();
    });

    let setTimeoutId: number;
    const referenceEvents = computed(() => {
      if (props.trigger === "hover") {
        return {
          mouseenter() {
            clearTimeout(setTimeoutId);
            isVisible.value = true;
          },
          mouseleave() {
            setTimeoutId = window.setTimeout(() => {
              clearTimeout(setTimeoutId);
              isVisible.value = false;
            }, 200);
          },
        };
      }
      return {
        click() {
          isVisible.value = !isVisible.value;
        },
      };
    });

    const contentEvents = computed(() => {
      if (props.trigger === "hover") {
        return referenceEvents.value;
      }
      return {};
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
        props.trigger === "manual" ||
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
      contentEvents,
      contentStyle,
      onOutsideClick,
    };
  },
});
</script>
