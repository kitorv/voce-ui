<template>
  <div v-bind="$attrs" ref="triggerRef">
    <slot name="trigger" />
  </div>
  <teleport to="body">
    <transition name="transition">
      <div v-click-outside="onOutsdieClick" v-show="visible" ref="contentRef">
        <slot name="content" />
      </div>
    </transition>
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
  emits: ["update:visible"],
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
      default: "bottom",
    },
  },
  setup(props, { emit }) {
    let popper: Instance;
    const triggerRef = ref<HTMLDivElement>();
    const contentRef = ref<HTMLDivElement>();
    watch(
      () => props.visible,
      () => {
        if (popper) return;
        if (!triggerRef.value || !contentRef.value) return;
        popper = createPopper(triggerRef.value, contentRef.value, {
          placement: props.placement,
        });
      }
    );

    const onOutsdieClick = () => {
      if (!props.visible) return;
      emit("update:visible", false);
    };

    return { triggerRef, contentRef, onOutsdieClick };
  },
});
</script>

<style lang="scss"></style>
