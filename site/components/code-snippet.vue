<template>
  <div class="vc-code-snippet">
    <div class="vc-code-snippet--example">
      <slot name="example" />
    </div>
    <div class="vc-code-snippet--desc">
      <slot name="description" />
    </div>
    <div class="vc-code-snippet--code">
      <slot name="source" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "VcCodeSnippet",
});
</script>

<style lang="scss" scoped>
.vc-code-snippet {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin: 0 0 16px;
  border-radius: 4px;
  transition: all 0.2s;
  box-shadow: 0 6px 12px -2px rgba(0, 32, 128, 0.1),
    0 0 0 1px $-border-color-base;
  background-color: #ffffff;
  text-align: left;
  margin-bottom: 30px;
}

.vc-code-snippet--example {
  box-sizing: border-box;
  padding: 30px 35px;
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

.vc-code-snippet--code {
  box-sizing: border-box;
  border-top: 1px solid $-border-color-light;
}
</style>
