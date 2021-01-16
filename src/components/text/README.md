# Text 文本

文本的基本格式。

## 基础用法

:::snippet 通过`level`定义不同的标题。

```vue
<template>
  <v-text title="h1">H1.VECO</v-text>
  <v-text title="h2">H2.VECO</v-text>
  <v-text title="h3">H3.VECO</v-text>
  <v-text title="h4">H4.VECO</v-text>
  <v-text title="h5">H5.VECO</v-text>
  <v-text title="h6">H6.VECO</v-text>
</template>
```

:::

## 基础类型

:::snippet 通过`type`定义文本的基础样式。

```vue
<template>
  <v-text>Default</v-text>
  <v-text type="regular">Regular</v-text>
  <v-text type="secondary">Secondary</v-text>
  <v-text type="placeholder">Placeholder</v-text>
  <v-text type="primary">Primary</v-text>
  <v-text type="success">Success</v-text>
  <v-text type="warning">Warning</v-text>
  <v-text type="danger">Danger</v-text>
</template>
```

:::

## 内置类型

:::snippet 内置不同样式的文本。

```vue
<template>
  <v-text disabled>Disabled</v-text>
  <v-text mark>Mark</v-text>
  <v-text code>Code</v-text>
  <v-text keyboard>Keyboard</v-text>
  <v-text underline>Underline</v-text>
  <v-text delete>Delete</v-text>
  <v-text strong>Strong</v-text>
</template>
```

:::

## 文本省略

:::snippet 通过`ellipsis`超出自身宽度或者超出父容器宽度自动显示省略号。

```vue
<template>
  <v-text ellipsis>Ellipsis Ellipsis Ellipsis</v-text>
</template>
```

:::

## Text Props

[text-type] = _default \| regular \| secondary \| placeholder \| primary \| success \| danger \| warning_
[title-type] = _h1 \| h2 \| h3 \| h4 \| h5 \| h6_

| 属性      | 说明                     | 类型      | 默认值    |
| --------- | ------------------------ | --------- | --------- |
| type      | 类型：[[text-type]]      | _String_  | `default` |
| title     | 标题类型：[[title-type]] | _String_  | —         |
| mark      | 标记                     | _Boolean_ | `false`   |
| code      | 代码块                   | _Boolean_ | `false`   |
| keyboard  | 键盘样式                 | _Boolean_ | `false`   |
| underline | 下划线                   | _Boolean_ | `false`   |
| delete    | 删除线                   | _Boolean_ | `false`   |
| strong    | 加粗                     | _Boolean_ | `false`   |
| ellipsis  | 省略号                   | _Boolean_ | `false`   |

## Text Slots

| 名称 | 说明     |
| ---- | -------- |
| —    | 文本内容 |
