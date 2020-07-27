# Grid 栅格

通过 24 栅格快速的创建布局。

## 基础用法

:::snippet 通过`Row`和`Col`栅格组件，就可以创建一个基本的栅格系统，所有列`v-col`必须放在`v-row`内。

```vue
<template>
  <div class="vsc-grid">
    <v-row>
      <v-col :span="24">v-col</v-col>
    </v-row>
    <v-row>
      <v-col :span="12">v-col-12</v-col>
      <v-col :span="12">v-col-12</v-col>
    </v-row>
    <v-row>
      <v-col :span="8">v-col-8</v-col>
      <v-col :span="8">v-col-8</v-col>
      <v-col :span="8">v-col-8</v-col>
    </v-row>
    <v-row>
      <v-col :span="6">v-col-6</v-col>
      <v-col :span="6">v-col-6</v-col>
      <v-col :span="6">v-col-6</v-col>
      <v-col :span="6">v-col-6</v-col>
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
