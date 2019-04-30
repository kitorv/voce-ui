# Select 下拉框

## 基础用法

:::snippet

```html
<template>
  <div>
    <div v-text="value"></div>
    <kv-select v-model="value" placeholder="请选择">
      <kv-option v-for="{value,label} in options" :value="value" :label="label">
      </kv-option>
    </kv-select>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [
          {
            value: "1",
            label: "黄金糕"
          },
          {
            value: "2",
            label: "双皮奶"
          },
          {
            value: "3",
            label: "蚵仔煎"
          },
          {
            value: "4",
            label: "龙须面"
          },
          {
            value: "5",
            label: "北京烤鸭"
          }
        ],
        value: "1"
      };
    }
  };
</script>
```

:::
:::snippet

```html
<template>
  <div>
    <div v-text="value"></div>
    <kv-select v-model="value" placeholder="请选择" mode="multiple">
      <kv-option v-for="{value,label} in options" :value="value" :label="label">
      </kv-option>
    </kv-select>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [
          {
            value: "1",
            label: "黄金糕"
          },
          {
            value: "2",
            label: "双皮奶"
          },
          {
            value: "3",
            label: "蚵仔煎"
          },
          {
            value: "4",
            label: "龙须面"
          },
          {
            value: "5",
            label: "北京烤鸭"
          }
        ],
        value: ["1"]
      };
    }
  };
</script>
```

:::
