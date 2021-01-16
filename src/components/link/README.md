# Link 链接

文字超链接。

## 基础用法

:::snippet 通过`type`定义链接的基础样式。

```vue
<template>
  <v-link>Default</v-link>
  <v-link type="regular">Regular</v-link>
  <v-link type="secondary">Secondary</v-link>
  <v-link type="placeholder">Placeholder</v-link>
  <v-link type="primary">Primary</v-link>
  <v-link type="success">Success</v-link>
  <v-link type="warning">Warning</v-link>
  <v-link type="danger">Danger</v-link>
</template>
```

:::

## 禁用状态

:::snippet 通过`disabled`禁用链接。

```vue
<template>
  <v-link disabled>Default</v-link>
  <v-link type="regular" disabled>Regular</v-link>
  <v-link type="secondary" disabled>Secondary</v-link>
  <v-link type="placeholder" disabled>Placeholder</v-link>
  <v-link type="primary" disabled>Primary</v-link>
  <v-link type="success" disabled>Success</v-link>
  <v-link type="warning" disabled>Warning</v-link>
  <v-link type="danger" disabled>Danger</v-link>
</template>
```

:::

## 下划线

:::snippet 通过`underline`控制下划线显示和隐藏。

```vue
<template>
  <v-link>Underline</v-link>
  <v-link :underline="false">NoUnderline</v-link>
</template>
```

:::

## 图标

:::snippet 通过`prefix-icon`和`suffix-icon`设置前置图标和后置图标。

```vue
<template>
  <v-link prefix-icon="edit-fill">Edit</v-link>
  <v-link suffix-icon="delete-fill">Delete</v-link>
</template>
```

:::

## 链接跳转

:::snippet 设置`href`链接的原始属性进行跳转，设置`to`属性对应的路由跳转配置。

```vue
<template>
  <v-link href="/">Href</v-link>
  <v-link to="/">RouteLink</v-link>
</template>
```

:::

## Link Props

[link-type] = _default \| regular \| secondary \| placeholder \| primary \| success \| danger \| warning_

| 属性        | 说明                | 类型               | 默认值    |
| ----------- | ------------------- | ------------------ | --------- |
| type        | 类型：[[link-type]] | _String_           | `default` |
| underline   | 下划线              | _Boolean_          | `false`   |
| disabled    | 禁用状态            | _Boolean_          | `false`   |
| prefix-icon | 前置图标            | _String_           | —         |
| suffix-icon | 后置图标            | _String_           | —         |
| href        | 跳转链接            | _String_           | —         |
| to          | 目标路由            | _RouteLocationRaw_ | —         |

## Link Events

| 事件名称 | 说明     | 回调参数      |
| -------- | -------- | ------------- |
| click    | 点击触发 | _event:Event_ |

## Link Slots

| 名称 | 说明     |
| ---- | -------- |
| —    | 链接内容 |
