<template>
  <transition
    leave-active-class="v-transition--collapse"
    enter-active-class="v-transition--collapse"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <slot />
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    let cacheStyle: Pick<
      CSSStyleDeclaration,
      "paddingTop" | "paddingBottom" | "overflow"
    >;

    const beforeEnter = (el: HTMLElement) => {
      cacheStyle = {
        paddingTop: el.style.paddingTop,
        paddingBottom: el.style.paddingBottom,
        overflow: "hidden",
      };
      el.style.height = "0";
      el.style.paddingTop = "0";
      el.style.paddingBottom = "0";
    };

    const enter = (el: HTMLElement) => {
      cacheStyle.overflow = el.style.overflow;

      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + "px";
      } else {
        el.style.height = "";
      }

      const { paddingTop, paddingBottom } = cacheStyle;
      el.style.paddingTop = paddingTop;
      el.style.paddingBottom = paddingBottom;
      el.style.overflow = "hidden";
    };

    const afterEnter = (el: HTMLElement) => {
      el.style.height = "";
      el.style.overflow = cacheStyle.overflow;
    };

    const beforeLeave = (el: HTMLElement) => {
      cacheStyle = {
        paddingTop: el.style.paddingTop,
        paddingBottom: el.style.paddingBottom,
        overflow: el.style.overflow,
      };
      el.style.height = `${el.scrollHeight}px`;
      el.style.overflow = "hidden";
    };

    const leave = (el: HTMLElement) => {
      if (el.scrollHeight === 0) return;
      el.style.height = "0";
      el.style.paddingTop = "0";
      el.style.paddingBottom = "0";
    };

    const afterLeave = (el: HTMLElement) => {
      el.style.height = "";
      el.style.overflow = cacheStyle.overflow;
      el.style.paddingTop = cacheStyle.paddingTop;
      el.style.paddingBottom = cacheStyle.paddingBottom;
    };

    return {
      beforeEnter,
      enter,
      afterEnter,
      beforeLeave,
      leave,
      afterLeave,
    };
  },
});
</script>

<style lang="scss">
.v-transition--collapse {
  transition: all 0.3s ease-in-out;
}
</style>
