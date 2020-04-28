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
    <div v-show="showCode" class="vc-code-snippet--code">
      <slot name="source" />
    </div>
  </div>
</template>

<script>
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

    return { showCode, codeIconClass, handleIconClick };
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
  box-shadow: 0 6px 12px -2px mix($-color-primary, #ffffff, 10%),
    0 0 0 1px $-border-color-base;
  background-color: #ffffff;
  text-align: left;
  margin-bottom: 30px;
}

.vc-code-snippet--example {
  box-sizing: border-box;
  padding: 26px 32px;
  color: $-text-color-primary;
  border-bottom: 1px solid $-border-color-light;
  font-size: 12px;
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
  border-top: 1px solid $-border-color-light;

  > pre {
    margin: 0;
    padding: 0;
  }
}
</style>
