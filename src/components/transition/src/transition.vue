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

<style lang="scss">
.v-transition--slide-up {
  &-enter-active,
  &-leave-active {
    animation-duration: 0.25s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }

  &-enter-active {
    animation-name: vSlideUpIn;
    animation-play-state: running;
    opacity: 0;
    animation-timing-function: ease-in-out;
  }

  &-leave-active {
    animation-name: vSlideUpOut;
    animation-play-state: running;
    animation-timing-function: ease-in-out;
  }
}

@keyframes vSlideUpIn {
  0% {
    opacity: 0;
    transform-origin: 0 0;
    transform: scaleY(0.5);
  }

  to {
    opacity: 1;
    transform-origin: 0 0;
    transform: scaleY(1);
  }
}

@keyframes vSlideUpOut {
  0% {
    opacity: 1;
    transform-origin: 0 0;
    transform: scaleY(1);
  }

  to {
    opacity: 0;
    transform-origin: 0 0;
    transform: scaleY(0.5);
  }
}
</style>
