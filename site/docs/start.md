# Test

基础的数据输入。

## 基础用法

:::tip
Tip
:::

:::danger
Danger
:::

:::snippet 使用`v-mdoel`进行值的绑定。

```vue
<template>
  <div class="vs-component">
    <div v-text="value"></div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "VcCodeSnippet",
  setup() {
    const value = ref("Component Text");
    return { value };
  },
});
</script>

<style lang="scss">
.vs-component {
  color: #1f74ff;
}
</style>
```

:::

## Compoent Events

| 事件名称  | 说明     | 回调参数 |
| --------- | -------- | -------- |
| eventName | 触发事件 | event    |
