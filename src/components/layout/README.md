# Layout 布局

页面基础布局。

## 基础用法

:::snippet 基础页面上中下布局。

```vue
<template>
  <v-layout>
    <v-layout-header>Header</v-layout-header>
    <v-layout-content>Content</v-layout-content>
    <v-layout-footer>Footer</v-layout-footer>
  </v-layout>
</template>
```

:::

## 左右侧边栏

:::snippet 基础页面左中右布局。

```vue
<template>
  <v-layout>
    <v-layout-left :width="160">Left</v-layout-left>
    <v-layout-content>Content</v-layout-content>
    <v-layout-right :width="160">Right</v-layout-right>
  </v-layout>
</template>
```

:::

## 嵌套布局

:::snippet 通过嵌套进行复制的布局。

```vue
<template>
  <v-layout>
    <v-layout-left :width="160">Left</v-layout-left>
    <v-layout>
      <v-layout-header>Header</v-layout-header>
      <v-layout-content>Content</v-layout-content>
      <v-layout-footer>Footer</v-layout-footer>
    </v-layout>
  </v-layout>

  <v-layout>
    <v-layout>
      <v-layout-header>Header</v-layout-header>
      <v-layout-content>Content</v-layout-content>
      <v-layout-footer>Footer</v-layout-footer>
    </v-layout>
    <v-layout-right :width="160">Right</v-layout-right>
  </v-layout>

  <v-layout>
    <v-layout-header>Header</v-layout-header>
    <v-layout-content>
      <v-layout>
        <v-layout-left :width="160">Left</v-layout-left>
        <v-layout-content>Content</v-layout-content>
      </v-layout>
    </v-layout-content>
    <v-layout-footer>Footer</v-layout-footer>
  </v-layout>

  <v-layout>
    <v-layout-header>Header</v-layout-header>
    <v-layout-content>
      <v-layout>
        <v-layout-content>Content</v-layout-content>
        <v-layout-right :width="160">Right</v-layout-right>
      </v-layout>
    </v-layout-content>
    <v-layout-footer>Footer</v-layout-footer>
  </v-layout>
</template>
```

:::

## Layout Slots

| 名称 | 说明     |
| ---- | -------- |
| —    | 布局内容 |

## LayoutHeader Slots

| 名称 | 说明     |
| ---- | -------- |
| —    | 顶部内容 |

## LayoutFooter Slots

| 名称 | 说明     |
| ---- | -------- |
| —    | 底部内容 |

## LayoutLeft Slots

| 名称 | 说明     |
| ---- | -------- |
| —    | 左侧内容 |

## LayoutRight Slots

| 名称 | 说明     |
| ---- | -------- |
| —    | 右侧内容 |

## LayoutContent Slots

| 名称 | 说明     |
| ---- | -------- |
| —    | 主要内容 |
