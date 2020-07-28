# Grid 栅格

通过 24 栅格快速的创建布局。

## 基础用法

:::snippet 通过`Row`和`Col`栅格组件，就可以创建一个基本的栅格系统，所有列`v-col`必须放在`v-row`内。

```vue
<template>
  <div class="vsc-grid">
    <v-row>
      <v-col :span="24">col</v-col>
    </v-row>
    <v-row>
      <v-col :span="12">col-12</v-col>
      <v-col :span="12">col-12</v-col>
    </v-row>
    <v-row>
      <v-col :span="8">col-8</v-col>
      <v-col :span="8">col-8</v-col>
      <v-col :span="8">col-8</v-col>
    </v-row>
    <v-row>
      <v-col :span="6">col-6</v-col>
      <v-col :span="6">col-6</v-col>
      <v-col :span="6">col-6</v-col>
      <v-col :span="6">col-6</v-col>
    </v-row>
  </div>
</template>
```

:::

## 区块间隔

:::snippet 通过`gutter`属性，设置水平间隔，也可以设置数组`[水平间距, 垂直间距]`设置水平和垂直间隔。

```vue
<template>
  <div class="vsc-grid">
    <v-divider orientation="left">
      Horizontal
    </v-divider>
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
    <v-divider orientation="left">
      Vertical
    </v-divider>
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
  </div>
</template>

<style lang="scss" scoped>
.vsc-grid {
  .v-row > .v-col {
    margin: 0;
    padding: 0;

    &:nth-child(2n + 1) {
      background: #ffffff;
      > div {
        padding: 12px 0px;
        background: mix($-color--primary, #ffffff, 75%);
      }
    }

    &:nth-child(2n) {
      background: #ffffff;
      > div {
        padding: 12px 0px;
        background: $-color--primary;
      }
    }
  }
}
</style>
```

:::

## 左右偏移

:::snippet 通过`offset`属性设置偏移的列数。

```vue
<template>
  <div class="vsc-grid">
    <v-row>
      <v-col :span="8">col-8</v-col>
      <v-col :span="8" :offset="8">col-8</v-col>
    </v-row>
    <v-row>
      <v-col :span="6" :offset="6">
        col-6 col-offset-6
      </v-col>
      <v-col :span="6" :offset="6">
        col-6 col-offset-6
      </v-col>
    </v-row>
    <v-row>
      <v-col :span="12" :offset="6">
        col-12 col-offset-6
      </v-col>
    </v-row>
  </div>
</template>
```

:::

## 排序

:::snippet 通过`push`和`pull`可以改变列的顺序。

```vue
<template>
  <div class="vsc-grid">
    <v-row>
      <v-col :span="18" :push="6">col-6 col-pull-18</v-col>
      <v-col :span="6" :pull="18">col-18 col-push-6</v-col>
    </v-row>
  </div>
</template>
```

:::

## 排版

:::snippet 通过`justify`控制`Col`的排版方式，可选值`start`、`center`、`end`、`space-between`、`space-around`。

```vue
<template>
  <div class="vsc-grid">
    <v-divider orientation="left">
      Start
    </v-divider>
    <v-row justify="start">
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
    </v-row>
    <v-divider orientation="left">
      Center
    </v-divider>
    <v-row justify="center">
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
    </v-row>
    <v-divider orientation="left">
      End
    </v-divider>
    <v-row justify="end">
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
    </v-row>
    <v-divider orientation="left">
      Space-Between
    </v-divider>
    <v-row justify="space-between">
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
    </v-row>
    <v-divider orientation="left">
      Space-Around
    </v-divider>
    <v-row justify="space-around">
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.vsc-grid {
  .v-row {
    background: rgba(128, 128, 128, 0.08);
  }
}
</style>
```

:::

## 对齐

:::snippet 通过`align`设置垂直对齐，可选值`top`、`middle`、`bottom`。

```vue
<template>
  <div class="vsc-grid">
    <v-divider orientation="left">
      Top
    </v-divider>
    <v-row justify="space-around" align="top">
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
    </v-row>
    <v-divider orientation="left">
      Top
    </v-divider>
    <v-row justify="space-around" align="middle">
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
    </v-row>
    <v-divider orientation="left">
      Top
    </v-divider>
    <v-row justify="space-around" align="bottom">
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
      <v-col :span="4">col-4</v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.vsc-grid {
  .v-row {
    background: rgba(128, 128, 128, 0.08);
  }

  .v-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .v-row > .v-col:nth-child(2n) {
    height: 40px;
  }

  .v-row > .v-col:nth-child(2n + 1) {
    height: 80px;
  }
}
</style>
```

:::

## Flex 填充

:::snippet 通过属性`flex`设置填充。

```vue
<template>
  <div class="vsc-grid">
    <v-row>
      <v-col :flex="2">2 / 5</v-col>
      <v-col :flex="3">3 / 5</v-col>
    </v-row>
    <v-row>
      <v-col flex="100px">100px</v-col>
      <v-col flex="auto">Fill</v-col>
    </v-row>
    <v-row>
      <v-col flex="1 1 200px">1 1 200px</v-col>
      <v-col flex="0 1 300px">0 1 300px</v-col>
    </v-row>
  </div>
</template>
```

:::

## 响应布局

:::snippet `span`、`pull`、`push`、`offset`、`order`属性可以通过内嵌到`xs`、`sm`、`md`、`lg`、`xl`、`xxl` 属性中来使用，直接设置`xs=24`相当于`span=24`。

```vue
<template>
  <div class="vsc-grid">
    <v-row>
      <v-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10" :xxl="8">
        Col
      </v-col>
      <v-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4" :xxl="8">
        Col
      </v-col>
      <v-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10" :xxl="8">
        Col
      </v-col>
    </v-row>
    <v-row>
      <v-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10" :xxl="6">
        Col
      </v-col>
      <v-col
        :xs="20"
        :sm="16"
        :md="12"
        :lg="8"
        :xl="4"
        :xxl="{ span: 6, offset: 3 }"
      >
        Col
      </v-col>
      <v-col
        :xs="2"
        :sm="4"
        :md="6"
        :lg="8"
        :xl="10"
        :xxl="{ span: 6, offset: 3 }"
      >
        Col
      </v-col>
    </v-row>
  </div>
</template>
```

:::
