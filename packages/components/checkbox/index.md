# 复选框

主要用于选项多选

## 基本功能

选中状态切换

:::snippet

```html
<template>
  <div>
    <kv-checkbox v-model="checked"></kv-checkbox>
    <kv-checkbox v-model="checked" disabled></kv-checkbox>
    <kv-checkbox-group v-model="checkList">
      <kv-checkbox value="1"></kv-checkbox>
      <kv-checkbox value="2"></kv-checkbox>
      <kv-checkbox value="3"></kv-checkbox>
    </kv-checkbox-group>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checked: true,
        checkList: ["1"]
      };
    }
  };
</script>
```

:::
