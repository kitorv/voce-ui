# Select 下拉框

## 基础用法

:::snippet

```html
<template>
  <kv-select v-model="value" placeholder="请选择">
    <kv-option v-for="item in options" :value="item.value"> </kv-option>
  </kv-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [
          {
            value: "选项1",
            label: "黄金糕"
          },
          {
            value: "选项2",
            label: "双皮奶"
          },
          {
            value: "选项3",
            label: "蚵仔煎"
          },
          {
            value: "选项4",
            label: "龙须面"
          },
          {
            value: "选项5",
            label: "北京烤鸭"
          }
        ],
        value: ""
      };
    }
  };
</script>
```

:::
