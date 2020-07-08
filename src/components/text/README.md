# Text 文本

文本的基本格式。

## 基础用法

:::snippet 通过`level`定义不同的标题。

```vue
<template>
  <div class="vsc-text">
    <v-text :level="1">H1.VECO</v-text>
    <v-text :level="2">H2.VECO</v-text>
    <v-text :level="3">H3.VECO</v-text>
    <v-text :level="4">H4.VECO</v-text>
    <v-text :level="5">H5.VECO</v-text>
    <v-text :level="6">H6.VECO</v-text>
  </div>
</template>
```

:::

## 基础用法

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
