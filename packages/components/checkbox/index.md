# Checkbox 复选框

## 基本功能

:::snippet 使用 `v-model` 来进行数据绑定，值为 `Boolean` 类型。

```html
<template>
  <div class="kv-demo-checkbox">
    <kv-checkbox v-model="normal">未选中</kv-checkbox>
    <kv-checkbox v-model="checked">已选中</kv-checkbox>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        normal: false,
        checked: true
      };
    }
  };
</script>
<style>
  .kv-demo-checkbox .kv-checkbox {
    margin-right: 15px;
  }
</style>
```

:::

## 复选框禁用

:::snippet 通过 `disabled` 属性禁用复选框。

```html
<template>
  <div class="kv-demo-checkbox">
    <kv-checkbox v-model="normal" disabled>未选中</kv-checkbox>
    <kv-checkbox v-model="checked" disabled>已选中</kv-checkbox>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        normal: false,
        checked: true
      };
    }
  };
</script>
<style>
  .kv-demo-checkbox .kv-checkbox {
    margin-right: 15px;
  }
</style>
```

:::

## 复选框分组

:::snippet 使用 `kv-checkbox-group` 管理多个复选框，复选框绑定 value 的值，复选框选中状态会将值同步到分组的 v-model 数组中。

```html
<template>
  <div class="kv-demo-checkbox">
    <kv-checkbox-group v-model="checkedList">
      <kv-checkbox :value="1">选项A</kv-checkbox>
      <kv-checkbox :value="2">选项B</kv-checkbox>
      <kv-checkbox :value="3">选项C</kv-checkbox>
    </kv-checkbox-group>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checkedList: []
      };
    }
  };
</script>
<style>
  .kv-demo-checkbox .kv-checkbox {
    margin-right: 15px;
  }
</style>
```

:::

## KvCheckbox Attributes

| 参数     | 说明       | 类型                  | 可选值 | 默认值 |
| -------- | ---------- | --------------------- | ------ | ------ |
| disabled | 是否禁用   | boolean               | —      | false  |
| value    | 复选框的值 | boolean/number/string | —      | —      |

## KvCheckbox Events

| 事件名称 | 说明                     | 回调参数    |
| -------- | ------------------------ | ----------- |
| change   | 当绑定值变化时触发的事件 | value,event |

## KvCheckbox Slots

| 名称 | 说明       |
| ---- | ---------- |
| —    | 复选框内容 |

## KvCheckboxGroup Attributes

| 参数     | 说明                    | 类型    | 可选值 | 默认值 |
| -------- | ----------------------- | ------- | ------ | ------ |
| disabled | 是否禁用                | boolean | —      | false  |
| value    | 选中复选框的 value 数组 | array   | —      | —      |
