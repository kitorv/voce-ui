# Teatarea 文本域

## 基础用法

:::snippet `kv-textarea` 初始化，默认宽度百分吧。

```html
<template>
  <div class="kv-demo--textarea">
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
<style>
  .kv-demo--textarea .kv-textarea {
    width: 400px;
  }
</style>
```

:::

## 文本域禁用

:::snippet `kv-textarea` 初始化，默认宽度百分吧。

```html
<template>
  <div class="kv-demo--textarea">
    <kv-textarea placeholder="请输入内容" disabled></kv-textarea>
  </div>
</template>
<style>
  .kv-demo--textarea .kv-textarea {
    width: 400px;
  }
</style>
```

:::

## 内容高度自适应

:::snippet 设置 `autosize` 属性为 `true` 根据内容适应高度。

```html
<template>
  <div class="kv-demo--textarea">
    <kv-textarea
      placeholder="内容无限加高"
      v-model="value"
      autosize
    ></kv-textarea>
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
<style>
  .kv-demo--textarea .kv-textarea {
    width: 400px;
  }
</style>
```

:::

## 内容高度限制

:::snippet 设置 `autosize` 属性为 `{minRows,maxRows}` 根据内容适应高度。

```html
<template>
  <div class="kv-demo--textarea">
    <kv-textarea
      placeholder="限制从2行到5行超出滚动条"
      v-model="value"
      :autosize="{minRows: 2,maxRows: 5}"
    ></kv-textarea>
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
<style>
  .kv-demo--textarea .kv-textarea {
    width: 400px;
  }
</style>
```

:::
