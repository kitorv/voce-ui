# Link 链接

文字超链接。

## 基础用法

:::snippet 通过`type`定义链接的基础样式。

```vue
<template>
  <div class="vsc-link">
    <v-link>Default</v-link>
    <v-link type="primary">Primary</v-link>
    <v-link type="success">Success</v-link>
    <v-link type="warning">Warning</v-link>
    <v-link type="danger">Danger</v-link>
    <v-link type="info">Info</v-link>
  </div>
</template>
```

:::

## 禁用状态

:::snippet 通过`disabled`禁用链接。

```vue
<template>
  <div class="vsc-link">
    <v-link disabled>Default</v-link>
    <v-link type="primary" disabled>Primary</v-link>
    <v-link type="success" disabled>Success</v-link>
    <v-link type="warning" disabled>Warning</v-link>
    <v-link type="danger" disabled>Danger</v-link>
    <v-link type="info" disabled>Info</v-link>
  </div>
</template>
```

:::

## 下划线

:::snippet 通过`underline`控制下划线显示和隐藏。

```vue
<template>
  <div class="vsc-link">
    <v-link>Underline</v-link>
    <v-link :underline="false">NoUnderline</v-link>
  </div>
</template>
```

:::

## 图标

:::snippet 通过`prefix-icon`和`suffix-icon`设置前置图标和后置图标。

```vue
<template>
  <div class="vsc-link">
    <v-link prefix-icon="v-icon-edit-fill">Edit</v-link>
    <v-link suffix-icon="v-icon-delete-fill">Delete</v-link>
  </div>
</template>
```

:::

## 链接跳转

:::snippet 设置`href`链接的原始属性进行跳转，设置`to`属性对应的路由跳转配置。

```vue
<template>
  <div class="vsc-link">
    <v-link href="/">Href</v-link>
    <v-link to="/">RouteLink</v-link>
  </div>
</template>
```

:::

## Link Props

[link-type] = _default \| primary \| success \| warning \| danger \| info_

| 属性        | 说明     | 类型               | 可选值        | 默认值    |
| ----------- | -------- | ------------------ | ------------- | --------- |
| type        | 类型     | _String_           | [[link-type]] | `default` |
| underline   | 下划线   | _Boolean_          | —             | `false`   |
| disabled    | 禁用状态 | _Boolean_          | —             | `false`   |
| prefix-icon | 前置图标 | _String_           | —             | —         |
| suffix-icon | 后置图标 | _String_           | —             | —         |
| href        | 跳转链接 | _String_           | —             | —         |
| to          | 路由     | _RouteLocationRaw_ | —             | —         |

## Link Events

| 事件名称 | 说明     | 回调参数      |
| -------- | -------- | ------------- |
| click    | 单击触发 | _event:Event_ |

## Link Slots

| 名称 | 说明     |
| ---- | -------- |
| —    | 链接内容 |
