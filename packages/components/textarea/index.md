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

:::snippet 通过 `disabled` 禁用文本域。

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

## KvTextarea Attributes

| 参数        | 说明                   | 类型            | 可选值 | 默认值 |
| ----------- | ---------------------- | --------------- | ------ | ------ |
| value       | 绑定值                 | string / number | —      | —      |
| maxlength   | 原生属性，最大输入长度 | number          | —      | —      |
| minlength   | 原生属性，最小输入长度 | number          | —      | —      |
| placeholder | 输入框占位文本         | string          | —      | —      |
| disabled    | 禁用文本域             | boolean         | —      | false  |
| name        | 原生属性               | string          | —      | —      |
| readonly    | 原生属性，是否只读     | boolean         | —      | false  |

## KvTextarea Events

| 事件名称 | 说明                       | 回调参数                  |
| -------- | -------------------------- | ------------------------- |
| blur     | 在 textarea 失去焦点时触发 | (event: Event)            |
| focus    | 在 textarea 获得焦点时触发 | (event: Event)            |
| change   | 在 textarea 值改变时触发   | (value: string \| number) |
