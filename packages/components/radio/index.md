# Radio 单选框

## 基本功能

:::snippet `KvRadioGroup` 绑定 `v-model` 和 `KvRadio` 选中 `value` 选中对应的值 `v-model` 绑定同步改变。

```html
<template>
  <div>
    <kv-radio-group v-model="checkedValue">
      <kv-radio value="A">选项A</kv-radio>
      <kv-radio value="B">选项B</kv-radio>
      <kv-radio value="C">选项C</kv-radio>
    </kv-radio-group>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checkedValue: "A"
      };
    }
  };
</script>
```

:::

## 单选框禁用

:::snippet 通过 `disabled` 属性禁用单选框。

```html
<template>
  <div>
    <kv-radio-group v-model="checkedValue" disabled>
      <kv-radio :value="1">选项1</kv-radio>
      <kv-radio :value="2">选项2</kv-radio>
      <kv-radio :value="3">选项3</kv-radio>
    </kv-radio-group>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checkedValue: 1
      };
    }
  };
</script>
```

:::

## KvRadio Attributes

| 参数     | 说明       | 类型                      | 可选值 | 默认值 |
| -------- | ---------- | ------------------------- | ------ | ------ |
| value    | 单选框的值 | string / number / boolean | —      | —      |
| disabled | 是否禁用   | boolean                   | —      | false  |

## KvRadio Slots

| 名称 | 说明       |
| ---- | ---------- |
| —    | 单选框文本 |

## KvRadioGroup Attributes

| 参数     | 说明           | 类型                      | 可选值 | 默认值 |
| -------- | -------------- | ------------------------- | ------ | ------ |
| value    | 单选框选中的值 | string / number / boolean | —      | —      |
| disabled | 是否禁用       | boolean                   | —      | false  |
