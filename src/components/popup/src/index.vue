<template>
  <div v-bind="$attrs" ref="referenceRef">
    <slot name="reference" />
  </div>
  <teleport to="body">
    <div ref="contentRef">
      <transition :name="transition">
        <div v-click-outside="onOutsdieClick" v-show="visible">
          <slot name="content" />
        </div>
      </transition>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue";
import { createPopper, Instance } from "@popperjs/core";
import { PopupPlacement } from "./interface";
import ClickOutside from "@/directives/click-outside";

export default defineComponent({
  name: "VPopup",
  directives: { ClickOutside },
  emits: ["update:visible", "update:placement"],
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    transition: {
      type: String,
      default: undefined,
    },
    placement: {
      type: String as PropType<PopupPlacement>,
      default: "bottom" as PopupPlacement,
    },
  },
  setup(props, { emit }) {
    let popper: Instance | undefined;
    const referenceRef = ref<HTMLDivElement>();
    const contentRef = ref<HTMLDivElement>();

    const createPopperInstacne = () => {
      if (!referenceRef.value || !contentRef.value) return;
      return createPopper(referenceRef.value, contentRef.value, {
        placement: props.placement,
        modifiers: [],
      });
    };

    watch(
      () => props.visible,
      () => {
        if (!popper) {
          popper = createPopperInstacne();
        } else {
          popper.update();
        }
        console.log(popper);

        emit("update:placement", popper?.state.placement);
      }
    );

    const onOutsdieClick = (event: MouseEvent) => {
      if (
        !props.visible ||
        !referenceRef.value ||
        referenceRef.value.contains(event.target as HTMLElement)
      ) {
        return;
      }
      emit("update:visible", false);
    };

    return { referenceRef, contentRef, onOutsdieClick };
  },
});
</script>

<style lang="scss"></style>
