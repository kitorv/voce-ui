<template>
  <v-tansition-collapse v-if="isCollapseComponent">
    <slot />
  </v-tansition-collapse>
  <transition v-else :name="transitionName">
    <slot />
  </transition>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import VTansitionCollapse from "./collapse.vue";
import { TransitionName } from "./interface";

export default defineComponent({
  name: "vTransition",
  components: { VTansitionCollapse },
  props: {
    name: {
      type: String as PropType<TransitionName>,
      default: undefined,
    },
  },
  setup(props) {
    const isCollapseComponent = computed(() => {
      return props.name === "collapse";
    });

    const transitionName = computed(() => {
      return `v-transition--${props.name}`;
    });

    return { isCollapseComponent, transitionName };
  },
});
</script>
