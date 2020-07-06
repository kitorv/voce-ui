# Link 链接

文字超链接

## 基础用法

:::snippet 通过按钮的类型 `type` 定义链接的基础样式。

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

:::snippet 通过属性`disabled`禁用链接。

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
