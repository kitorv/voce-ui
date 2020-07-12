# Text 文本

文本的基本格式。

## 基础用法

:::snippet 通过`level`定义不同的标题。

```vue
<template>
  <div class="vsc-text">
    <v-text title="h1">H1.VECO</v-text>
    <v-text title="h2">H2.VECO</v-text>
    <v-text title="h3">H3.VECO</v-text>
    <v-text title="h4">H4.VECO</v-text>
    <v-text title="h5">H5.VECO</v-text>
    <v-text title="h6">H6.VECO</v-text>
  </div>
</template>
```

:::

## 基础类型

:::snippet 通过`type`定义文本的基础样式。

```vue
<template>
  <div class="vsc-text">
    <v-text>Default</v-text>
    <v-text type="primary">Primary</v-text>
    <v-text type="success">Success</v-text>
    <v-text type="warning">Warning</v-text>
    <v-text type="danger">Danger</v-text>
    <v-text type="info">Info</v-text>
  </div>
</template>
```

:::

## 内置类型

:::snippet 内置不同样式的文本。

```vue
<template>
  <div class="vsc-text">
    <v-text disabled>Disabled</v-text>
    <v-text mark>Mark</v-text>
    <v-text code>Code</v-text>
    <v-text keyboard>Keyboard</v-text>
    <v-text underline>Underline</v-text>
    <v-text delete>Delete</v-text>
    <v-text strong>Strong</v-text>
  </div>
</template>
```

:::

## 文本省略

:::snippet 通过`ellipsis`超出自身宽度或者超出父容器宽度自动显示省略号。

```vue
<template>
  <div class="vsc-text">
    <v-text ellipsis>Ellipsis Ellipsis Ellipsis</v-text>
  </div>
</template>
```

:::

## Text Props

[text-type] = _default \| primary \| success \| warning \| danger \| info_
[title-type] = _h1 \| h2 \| h3 \| h4 \| h5 \| h6_

| 属性      | 说明     | 类型      | 可选值         | 默认值    |
| --------- | -------- | --------- | -------------- | --------- |
| type      | 类型     | _String_  | [[text-type]]  | `default` |
| title     | 标题类型 | _String_  | [[title-type]] | —         |
| disabled  | 禁用     | _Boolean_ | —              | `false`   |
| mark      | 标记     | _Boolean_ | —              | `false`   |
| code      | 代码块   | _Boolean_ | —              | `false`   |
| keyboard  | 键盘样式 | _Boolean_ | —              | `false`   |
| underline | 下划线   | _Boolean_ | —              | `false`   |
| delete    | 删除线   | _Boolean_ | —              | `false`   |
| strong    | 加粗     | _Boolean_ | —              | `false`   |
| ellipsis  | 省略号   | _Boolean_ | —              | `false`   |

## Text Events

| 事件名称 | 说明     | 回调参数      |
| -------- | -------- | ------------- |
| click    | 单击触发 | _event:Event_ |

## Text Slots

| 名称 | 说明     |
| ---- | -------- |
| —    | 文本内容 |
