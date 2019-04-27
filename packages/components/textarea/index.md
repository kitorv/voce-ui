# Teatarea 文本域

## 基础用法

:::snippet

```html
<template>
  <div class="kv-demo--input">
    <kv-textarea placeholder="请输入内容" v-model="value"></kv-textarea>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: ""
      };
    }
  };
</script>
```

:::
