# Divider 分割线

区隔内容的分割线。

## 基础用法

:::snippet 默认为水平分割线，放置于文字中间。

```vue
<template>
  <div class="vsc-divider">
    <p>A Vue.js 3.0 UI Toolkit for Web</p>
    <v-divider></v-divider>
    <p>A Vue.js 3.0 UI Toolkit for Web</p>
    <v-divider></v-divider>
    <p>A Vue.js 3.0 UI Toolkit for Web</p>
  </div>
</template>
```

:::

## 文字描述

:::snippet 分割线中带有文字，可以用`orientation`指定文字位置。

```vue
<template>
  <div class="vsc-divider">
    <p>A Vue.js 3.0 UI Toolkit for Web</p>
    <v-divider orientation="left">Left Text</v-divider>
    <p>A Vue.js 3.0 UI Toolkit for Web</p>
    <v-divider>Text</v-divider>
    <p>A Vue.js 3.0 UI Toolkit for Web</p>
    <v-divider orientation="right">Right Text</v-divider>
    <p>A Vue.js 3.0 UI Toolkit for Web</p>
  </div>
</template>
```

:::
