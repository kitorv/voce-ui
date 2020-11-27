# Divider 分割线

区隔内容的分割线。

## 基础用法

:::snippet 默认为水平分割线，放置于文字中间。

```vue
<template>
  <p>A Vue.js 3.0 UI Toolkit for Web</p>
  <v-divider></v-divider>
  <p>A Vue.js 3.0 UI Toolkit for Web</p>
  <v-divider></v-divider>
  <p>A Vue.js 3.0 UI Toolkit for Web</p>
</template>
```

:::

## 文字描述

:::snippet 分割线中带有文字，可以用`orientation`指定文字位置。

```vue
<template>
  <p>A Vue.js 3.0 UI Toolkit for Web</p>
  <v-divider orientation="left">Left Text</v-divider>
  <p>A Vue.js 3.0 UI Toolkit for Web</p>
  <v-divider>Text</v-divider>
  <p>A Vue.js 3.0 UI Toolkit for Web</p>
  <v-divider orientation="right">Right Text</v-divider>
  <p>A Vue.js 3.0 UI Toolkit for Web</p>
</template>
```

:::

## 简洁描述

:::snippet 通过`plain`设置为更轻量的分割文字样式。。

```vue
<template>
  <p>A Vue.js 3.0 UI Toolkit for Web</p>
  <v-divider orientation="left" plain>Left Text</v-divider>
  <p>A Vue.js 3.0 UI Toolkit for Web</p>
  <v-divider plain>Text</v-divider>
  <p>A Vue.js 3.0 UI Toolkit for Web</p>
  <v-divider orientation="right" plain>Right Text</v-divider>
  <p>A Vue.js 3.0 UI Toolkit for Web</p>
</template>
```

:::

## 垂直分割

:::snippet 通过`type`设置为`vertical`在行内垂直分割内容。

```vue
<template>
  <v-link type="primary">Primary</v-link>
  <v-divider type="vertical"></v-divider>
  <v-link type="primary">Primary</v-link>
  <v-divider type="vertical"></v-divider>
  <v-link type="primary">Primary</v-link>
  <v-divider type="vertical"></v-divider>
  <v-link type="primary">Primary</v-link>
</template>
```

:::

## Divider Props

[divider-type] = _horizontal \| vertical_
[orientation-type] = _left \| center\| right_

| 属性        | 说明     | 类型      | 可选值               | 默认值       |
| ----------- | -------- | --------- | -------------------- | ------------ |
| type        | 类型     | _String_  | [[divider-type]]     | `horizontal` |
| orientation | 描述位置 | _String_  | [[orientation-type]] | `center`     |
| plain       | 简洁描述 | _Boolean_ | —                    | `false`      |

## Divider Slots

| 名称 | 说明     |
| ---- | -------- |
| —    | 分割描述 |
