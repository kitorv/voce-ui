# Grid 栅格

通过 24 栅格快速的创建布局。

## 基础用法

:::snippet 通过`Row`和`Col`栅格组件，就可以创建一个基本的栅格系统，所有列`v-col`必须放在`v-row`内。

```vue
<template>
  <v-row>
    <v-col :span="24">
      <div>col</div>
    </v-col>
  </v-row>
  <v-row>
    <v-col :span="12">
      <div>col-12</div>
    </v-col>
    <v-col :span="12">
      <div>col-12</div>
    </v-col>
  </v-row>
  <v-row>
    <v-col :span="8">
      <div>col-8</div>
    </v-col>
    <v-col :span="8">
      <div>col-8</div>
    </v-col>
    <v-col :span="8">
      <div>col-8</div>
    </v-col>
  </v-row>
  <v-row>
    <v-col :span="6">
      <div>col-6</div>
    </v-col>
    <v-col :span="6">
      <div>col-6</div>
    </v-col>
    <v-col :span="6">
      <div>col-6</div>
    </v-col>
    <v-col :span="6">
      <div>col-6</div>
    </v-col>
  </v-row>
</template>
```

:::

## 区块间隔

:::snippet 通过`gutter`属性，设置水平间隔，也可以设置数组`[水平间距, 垂直间距]`设置水平和垂直间隔。

```vue
<template>
  <v-divider orientation="left"> Horizontal </v-divider>
  <v-row :gutter="16">
    <v-col :span="6">
      <div>col-6</div>
    </v-col>
    <v-col :span="6">
      <div>col-6</div>
    </v-col>
    <v-col :span="6">
      <div>col-6</div>
    </v-col>
    <v-col :span="6">
      <div>col-6</div>
    </v-col>
  </v-row>
  <v-divider orientation="left"> Vertical </v-divider>
  <v-row :gutter="[16, 16]">
    <v-col :span="6">
      <div>col-6</div>
    </v-col>
    <v-col :span="6">
      <div>col-6</div>
    </v-col>
    <v-col :span="6">
      <div>col-6</div>
    </v-col>
    <v-col :span="6">
      <div>col-6</div>
    </v-col>
    <v-col :span="6">
      <div>col-6</div>
    </v-col>
    <v-col :span="6">
      <div>col-6</div>
    </v-col>
    <v-col :span="6">
      <div>col-6</div>
    </v-col>
    <v-col :span="6">
      <div>col-6</div>
    </v-col>
  </v-row>
</template>
```

:::

## 左右偏移

:::snippet 通过`offset`属性设置偏移的列数。

```vue
<template>
  <v-row>
    <v-col :span="8">
      <div>col-8</div>
    </v-col>
    <v-col :span="8" :offset="8">
      <div>col-8</div>
    </v-col>
  </v-row>
  <v-row>
    <v-col :span="6" :offset="6">
      <div>col-6 col-offset-6</div>
    </v-col>
    <v-col :span="6" :offset="6">
      <div>col-6 col-offset-6</div>
    </v-col>
  </v-row>
  <v-row>
    <v-col :span="12" :offset="6">
      <div>col-12 col-offset-6</div>
    </v-col>
  </v-row>
</template>
```

:::

## 排序

:::snippet 通过`push`和`pull`可以改变列的顺序。

```vue
<template>
  <v-row>
    <v-col :span="18" :push="6">
      <div>col-6 col-pull-18</div>
    </v-col>
    <v-col :span="6" :pull="18">
      <div>col-18 col-push-6</div>
    </v-col>
  </v-row>
</template>
```

:::

## 排版

:::snippet 通过`justify`控制`Col`的排版方式，可选值`start`、`center`、`end`、`space-between`、`space-around`。

```vue
<template>
  <v-divider orientation="left"> Start </v-divider>
  <v-row justify="start">
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
  </v-row>
  <v-divider orientation="left"> Center </v-divider>
  <v-row justify="center">
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
  </v-row>
  <v-divider orientation="left"> End </v-divider>
  <v-row justify="end">
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
  </v-row>
  <v-divider orientation="left"> Space-Between </v-divider>
  <v-row justify="space-between">
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
  </v-row>
  <v-divider orientation="left"> Space-Around </v-divider>
  <v-row justify="space-around">
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.v-row {
  background: rgba(128, 128, 128, 0.08);
}
</style>
```

:::

## 对齐

:::snippet 通过`align`设置垂直对齐，可选值`top`、`middle`、`bottom`。

```vue
<template>
  <v-divider orientation="left"> Top </v-divider>
  <v-row justify="space-around" align="top">
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
  </v-row>
  <v-divider orientation="left"> Top </v-divider>
  <v-row justify="space-around" align="middle">
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
  </v-row>
  <v-divider orientation="left"> Top </v-divider>
  <v-row justify="space-around" align="bottom">
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
    <v-col :span="4">
      <div>col-4</div>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.v-row {
  background: rgba(128, 128, 128, 0.08);
}

.v-col {
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-row > .v-col:nth-child(2n) > div {
  height: 40px;
}

.v-row > .v-col:nth-child(2n + 1) > div {
  height: 80px;
}
</style>
```

:::

## Flex 填充

:::snippet 通过属性`flex`设置填充。

```vue
<template>
  <v-row>
    <v-col :flex="2">
      <div>2 / 5</div>
    </v-col>
    <v-col :flex="3">
      <div>3 / 5</div>
    </v-col>
  </v-row>
  <v-row>
    <v-col flex="100px">
      <div>100px</div>
    </v-col>
    <v-col flex="auto">
      <div>Fill</div>
    </v-col>
  </v-row>
  <v-row>
    <v-col flex="1 1 200px">
      <div>1 1 200px</div>
    </v-col>
    <v-col flex="0 1 300px">
      <div>0 1 300px</div>
    </v-col>
  </v-row>
</template>
```

:::

## 响应布局

:::snippet `span`、`pull`、`push`、`offset`、`order`属性可以通过内嵌到`xs`、`sm`、`md`、`lg`、`xl`、`xxl` 属性中来使用，直接设置`xs=24`相当于`span=24`。

```vue
<template>
  <v-row>
    <v-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10" :xxl="8">
      <div>Col</div>
    </v-col>
    <v-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4" :xxl="8">
      <div>Col</div>
    </v-col>
    <v-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10" :xxl="8">
      <div>Col</div>
    </v-col>
  </v-row>
  <v-row>
    <v-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10" :xxl="6">
      <div>Col</div>
    </v-col>
    <v-col
      :xs="20"
      :sm="16"
      :md="12"
      :lg="8"
      :xl="4"
      :xxl="{ span: 6, offset: 3 }"
    >
      <div>Col</div>
    </v-col>
    <v-col
      :xs="2"
      :sm="4"
      :md="6"
      :lg="8"
      :xl="10"
      :xxl="{ span: 6, offset: 3 }"
    >
      <div>Col</div>
    </v-col>
  </v-row>
</template>
```

:::

## Row Props

[row-justify] = _start \| end \| center \| space-around \| space-between_
[row-align] = `top` `middle` `bottom`

| 属性    | 说明                                             | 类型              | 默认值  |
| ------- | ------------------------------------------------ | ----------------- | ------- |
| gutter  | 区块间隔，单个值为水平间隔，数组为水平和垂直间隔 | _Number \| Array_ | —       |
| justify | 水平排列方式：[[row-justify]]                    | _String_          | `start` |
| align   | 垂直对齐方式： [[row-align]]                     | _String_          | `top`   |

## Row Slots

| 名称 | 说明                |
| ---- | ------------------- |
| —    | 行内容用于方式`Col` |

## Col Props

| 属性   | 说明                                                           | 类型               | 默认值 |
| ------ | -------------------------------------------------------------- | ------------------ | ------ |
| span   | 栅格占位格数，为 0 时隐藏列，可选值 _1-24_                     | _Number_           | `24`   |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格，可选值 _1-24_          | _Number_           | `0`    |
| pull   | 栅格向左移动格数，可选值 _1-24_                                | _Number_           | `0`    |
| push   | 栅格向右移动格数，可选值 _1-24_                                | _Number_           | `0`    |
| flex   | Flex 布局属性                                                  | _Number \| String_ | —      |
| xs     | 屏幕 `< 576px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | _Number \| Object_ | `24`   |
| sm     | 屏幕 `≥ 576px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | _Number \| Object_ | `24`   |
| md     | 屏幕 `≥ 768px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | _Number \| Object_ | `24`   |
| lg     | 屏幕 `≥ 992px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | _Number \| Object_ | `24`   |
| xl     | 屏幕 `≥ 1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | _Number \| Object_ | `24`   |
| xxl    | 屏幕 `≥ 1600px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | _Number \| Object_ | `24`   |

## Col Slots

| 名称 | 说明     |
| ---- | -------- |
| —    | 栅格内容 |
