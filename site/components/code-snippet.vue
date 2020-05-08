<template>
  <div class="vc-code-snippet">
    <div class="vc-code-snippet--example">
      <slot name="example" />
    </div>
    <div class="vc-code-snippet--desc">
      <slot name="description" />
      <div class="vc-code-snippet--operate" @click="handleIconClick">
        <i :class="codeIconClass"></i>
      </div>
    </div>
    <transition
      leave-active-class="vc-code-snippet--transition"
      enter-active-class="vc-code-snippet--transition"
      @before-enter="transitionBeforeEnter"
      @enter="transitionEnter"
      @after-enter="transitionAfterEnter"
      @before-leave="transitionEnter"
      @leave="transitionBeforeEnter"
      @after-leave="transitionAfterEnter"
    >
      <div v-show="showCode" class="vc-code-snippet--code" ref="codeEl">
        <slot name="source" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "VcCodeSnippet",
  setup() {
    let showCode = ref(false);

    const codeIconClass = computed(() => {
      return showCode ? "v-icon-code-collapse" : "v-icon-code-expand";
    });

    const handleIconClick = () => {
      showCode.value = !showCode.value;
    };

    let codeEl = ref<HTMLDivElement>();

    const transitionBeforeEnter = (el: HTMLElement) => {
      el.style.maxHeight = "0px";
    };

    const transitionEnter = (el: HTMLElement) => {
      if (!codeEl.value) return;
      el.style.maxHeight = `${codeEl.value.scrollHeight}px`;
    };

    const transitionAfterEnter = (el: HTMLElement) => {
      el.style.maxHeight = "auto";
    };

    return {
      showCode,
      codeIconClass,
      handleIconClick,
      codeEl,
      transitionBeforeEnter,
      transitionEnter,
      transitionAfterEnter,
    };
  },
});
</script>

<style lang="scss">
.vc-code-snippet {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin: 0 0 16px;
  border-radius: 4px;
  transition: all 0.2s;
  box-shadow: 0 6px 12px -2px mix($-color--primary, #ffffff, 10%),
    0 0 0 1px $-color--border-base;
  background-color: #ffffff;
  text-align: left;
  margin-bottom: 30px;
}

.vc-code-snippet--example {
  box-sizing: border-box;
  padding: 26px 32px;
  color: $-color--text-primary;
  border-bottom: 1px solid $-color--border-light;
}

.vc-code-snippet--desc {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-height: 44px;
  padding: 10px 50px 10px 20px;
  font-size: 14px;
  line-height: 1.5;
}

.vc-code-snippet--operate {
  position: absolute;
  right: 16px;
  bottom: 13px;
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
}

.vc-code-snippet--code {
  box-sizing: border-box;
  border-top: 1px solid $-color--border-light;
  box-sizing: border-box;
  overflow: hidden;

  > pre {
    margin: 0;
    padding: 0;
  }
}

.vc-code-snippet--transition {
  transition: 0.25s max-height ease-in-out;
}
</style>
