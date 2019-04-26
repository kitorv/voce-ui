# Input 输入框

## 基础用法

:::snippet `kv-input` 初始化，默认宽度百分百。

```html
<template>
  <div class="kv-demo--input">
    <kv-input placeholder="请输入内容" v-model="value"></kv-input>
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
  .kv-demo--input .kv-input {
    width: 250px;
  }
</style>
```

:::

## 输入框禁用

:::snippet 通过 `disabled` 属性禁用输入框。

```html
<template>
  <div class="kv-demo--input">
    <kv-input placeholder="请输入内容" disabled></kv-input>
  </div>
</template>
<style>
  .kv-demo--input .kv-input {
    width: 250px;
  }
</style>
```

:::

## 输入框图标

:::snippet 通过插槽 `slot` 来配置图标，`prefix` 前置图标，`suffix` 后置图标。

```html
<template>
  <div class="kv-demo--input">
    <div>
      <kv-input placeholder="请输入内容">
        <i slot="prefix" class="k-v-icon-github"></i>
      </kv-input>
      <kv-input placeholder="请输入内容">
        <i slot="suffix" class="k-v-icon-github"></i>
      </kv-input>
    </div>
  </div>
</template>
<style>
  .kv-demo--input .kv-input {
    width: 250px;
  }
</style>
```

:::

## 输入框组合

:::snippet 通过插槽 `slot` 来前后组合，`prepend` 前置元素，`append` 后置元素。

```html
<template>
  <div class="kv-demo--input">
    <div class="kv-demo--input-item">
      <kv-input placeholder="请输入内容">
        <span slot="prepend">Email</span>
      </kv-input>
    </div>
    <div class="kv-demo--input-item">
      <kv-input placeholder="请输入内容">
        <span slot="append">@qq.com</span>
      </kv-input>
    </div>
    <div class="kv-demo--input-item">
      <kv-input placeholder="请输入内容">
        <span slot="prepend">www</span>
        <span slot="append">com</span>
      </kv-input>
    </div>
  </div>
</template>
<style>
  .kv-demo--input-item .kv-input {
    width: 400px;
  }
  .kv-demo--input-item {
    margin-bottom: 15px;
  }

  .kv-demo--input-item:last-child {
    margin-bottom: 0;
  }
</style>
```

:::
