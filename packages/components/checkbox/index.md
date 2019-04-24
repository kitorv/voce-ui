# 复选框

主要用于选项多选

## 基本功能

选中状态切换

:::snippet

```html
<template>
  <div>
    <kv-checkbox v-model="checked"></kv-checkbox>
  </div>
</template>
<script>
  export default {
    data() {
      return { checked: true };
    }
  };
</script>
```

:::
