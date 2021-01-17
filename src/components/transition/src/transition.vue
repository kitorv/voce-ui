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
.v-transition--fade-in {
  &-enter-active,
  &-leave-active {
    transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}

.v-transition--zoom {
  &-enter-active,
  &-leave-active {
    transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scale(0.6, 0.6);
  }
}

.v-transition--zoom-top {
  &-enter-active,
  &-leave-active {
    opacity: 1;
    transform: scaleY(1);
    transition: transform 0.3s, opacity 0.3s;
    transform-origin: center top;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scaleY(0);
  }
}

.v-transition--zoom-right {
  &-enter-active,
  &-leave-active {
    opacity: 1;
    transform: scaleX(1);
    transition: transform 0.3s, opacity 0.3s;
    transform-origin: left center;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scaleX(0);
  }
}

.v-transition--zoom-bottom {
  &-enter-active,
  &-leave-active {
    opacity: 1;
    transform: scaleY(1);
    transition: transform 0.3s, opacity 0.3s;
    transform-origin: center bottom;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scaleY(0);
  }
}

.v-transition--zoom-left {
  &-enter-active,
  &-leave-active {
    opacity: 1;
    transform: scaleX(1);
    transition: transform 0.3s, opacity 0.3s;
    transform-origin: right center;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scaleX(0);
  }
}

.v-transition--zoom-big-top {
  &-enter-active,
  &-leave-active {
    opacity: 1;
    transform: scaleY(1);
    transition: transform 0.3s, opacity 0.3s;
    transform-origin: center top;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scaleY(0.6);
  }
}

.v-transition--zoom-big-right {
  &-enter-active,
  &-leave-active {
    opacity: 1;
    transform: scaleX(1);
    transition: transform 0.3s, opacity 0.3s;
    transform-origin: left center;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scaleX(0.6);
  }
}

.v-transition--zoom-big-bottom {
  &-enter-active,
  &-leave-active {
    opacity: 1;
    transform: scaleY(1);
    transition: transform 0.3s, opacity 0.3s;
    transform-origin: center bottom;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scaleY(0.6);
  }
}

.v-transition--zoom-big-left {
  &-enter-active,
  &-leave-active {
    opacity: 1;
    transform: scaleX(1);
    transition: transform 0.3s, opacity 0.3s;
    transform-origin: right center;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scaleX(0.6);
  }
}
</style>
