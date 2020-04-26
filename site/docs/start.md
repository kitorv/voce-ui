# Input 输入框

基础的数据输入。

## 基础用法

:::snippet 使用 `v-mdoel` 进行值的绑定。

```html
<template>
  <div class="nd-input">
    <n-input placeholder="请输入内容" v-model="value"></n-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: "",
      };
    },
  };
</script>

<style lang="scss">
  .nd-input .n-input {
    width: 250px;
    margin-right: 10px;
  }
</style>
```

:::

## 禁用状态

:::snippet 设置 `disabled` 属性禁用输入框。

```html
<template>
  <div class="nd-input">
    <n-input placeholder="请输入内容" v-model="value" disabled></n-input>
    <n-input placeholder="请输入内容" value="Nebula" disabled></n-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: "",
      };
    },
  };
</script>
```

:::

## 内容清空

:::snippet 设置属性 `clearable` 启用可清空。

```html
<template>
  <div class="nd-input">
    <n-input placeholder="请输入内容" v-model="value" clearable></n-input>
    <n-input
      placeholder="请输入内容"
      v-model="value1"
      clearable
      suffix-icon="n-icon-search"
    ></n-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: "",
        value1: "",
      };
    },
  };
</script>

<style lang="scss">
  .nd-input-box {
    margin-bottom: 10px;
  }
</style>
```

:::

## 图标设置

:::snippet 通过 `prefix-icon` 或者 `suffix-icon` 属性设置图标，也可以通过插槽 `slot` 来配置图标，`prefix` 前置图标，`suffix` 后置图标。

```html
<template>
  <div class="nd-input">
    <div class="nd-input-group">
      <n-input
        v-model="value"
        placeholder="请输入内容"
        prefix-icon="n-icon-search"
      />
      <n-input
        v-model="value"
        placeholder="请输入内容"
        suffix-icon="n-icon-search"
      />
    </div>
    <div>
      <n-input v-model="value" placeholder="请输入内容">
        <i slot="prefix" class="n-icon-search"></i>
      </n-input>
      <n-input v-model="value" placeholder="请输入内容">
        <i slot="suffix" class="n-icon-search"></i>
      </n-input>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: "",
      };
    },
  };
</script>

<style lang="scss">
  .nd-input-group {
    margin-bottom: 10px;
  }
</style>
```

:::

## 输入框组合

:::snippet 通过插槽 `slot` 来前后组合，`prepend` 前置元素，`append` 后置元素。

```html
<template>
  <div class="nd-input">
    <div class="nd-input-item">
      <n-input placeholder="请输入内容">
        <span slot="prepend">Email</span>
      </n-input>
    </div>
    <div class="nd-input-item">
      <n-input placeholder="请输入内容">
        <span slot="append">@qq.com</span>
      </n-input>
    </div>
    <div class="nd-input-item">
      <n-input placeholder="请输入内容">
        <span slot="prepend">www</span>
        <span slot="append">com</span>
      </n-input>
    </div>
  </div>
</template>
<style>
  .nd-input-item .n-input {
    width: 400px;
  }
  .nd-input-item {
    margin-bottom: 15px;
  }

  .nd-input-item:last-child {
    margin-bottom: 0;
  }
</style>
```

:::

## Input Attributes

| 参数            | 说明                   | 类型            | 可选值   | 默认值 |
| --------------- | ---------------------- | --------------- | -------- | ------ |
| value / v-model | 绑定值                 | String / Number | —        | —      |
| maxlength       | 原生属性，最大输入长度 | Number          | —        | —      |
| minlength       | 原生属性，最小输入长度 | Number          | —        | —      |
| placeholder     | 输入框占位文本         | String          | —        | —      |
| disabled        | 禁用文本框             | Boolean         | —        | false  |
| clearable       | 是否可以清空           | Boolean         | —        | false  |
| auto-complete   | 原生属性，自动补全     | String          | on / off | off    |
| name            | 原生属性               | String          | —        | —      |
| readonly        | 原生属性，是否只读     | Boolean         | —        | false  |
| prefix-icon     | 前置图标               | String          | —        | —      |
| suffix-icon     | 后置图标               | String          | —        | —      |

## Input Slots

| 名称    | 说明                         |
| ------- | ---------------------------- |
| prefix  | 输入框头部内容，用于设置图标 |
| suffix  | 输入框尾部内容，用于设置图标 |
| prepend | 输入框前置内容               |
| append  | 输入框后置内容               |

## Input Events

| 事件名称 | 说明                    | 回调参数     |
| -------- | ----------------------- | ------------ |
| blur     | 在 Input 失去焦点时触发 | event        |
| focus    | 在 Input 获得焦点时触发 | event        |
| change   | 在 Input 值改变时触发   | value，event |
