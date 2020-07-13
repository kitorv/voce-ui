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

## 简洁描述

:::snippet 使用`plain`可以设置为更轻量的分割文字样式。。

```vue
<template>
  <div class="vsc-divider">
    <p>A Vue.js 3.0 UI Toolkit for Web</p>
    <v-divider orientation="left" plain>Left Text</v-divider>
    <p>A Vue.js 3.0 UI Toolkit for Web</p>
    <v-divider plain>Text</v-divider>
    <p>A Vue.js 3.0 UI Toolkit for Web</p>
    <v-divider orientation="right" plain>Right Text</v-divider>
    <p>A Vue.js 3.0 UI Toolkit for Web</p>
  </div>
</template>
```

:::
