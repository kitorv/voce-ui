<template>
  <div v-bind="$attrs" ref="triggerRef">
    <slot name="trigger" />
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
    const triggerRef = ref<HTMLDivElement>();
    const contentRef = ref<HTMLDivElement>();

    const createPopperInstacne = () => {
      if (!triggerRef.value || !contentRef.value) return;
      return createPopper(triggerRef.value, contentRef.value, {
        placement: props.placement,
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
        emit("update:placement", popper?.state.placement);
      }
    );

    const onOutsdieClick = (event: MouseEvent) => {
      if (
        !props.visible ||
        !triggerRef.value ||
        triggerRef.value.contains(event.target as HTMLElement)
      ) {
        return;
      }
      emit("update:visible", false);
    };

    return { triggerRef, contentRef, onOutsdieClick };
  },
});
</script>

<style lang="scss"></style>
