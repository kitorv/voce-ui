<template>
  <teleport v-if="to" :to="to">
    <slot />
  </teleport>
  <slot v-else />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { PopupTarget } from "./interface";

export default defineComponent({
  props: {
    to: {
      type: [String, Object] as PropType<PopupTarget>,
      default: "body" as PopupTarget,
    },
  },
});
</script>
