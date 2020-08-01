# Space 间距

组件之间的间距。

## 基础用法

:::snippet 通过`size`设置间距的大小。

```vue
<template>
  <div class="vsc-space">
    <v-space>
      <div class="vsc-space--holder"></div>
      <div class="vsc-space--holder"></div>
      <div class="vsc-space--holder"></div>
      <div class="vsc-space--holder"></div>
      <div class="vsc-space--holder"></div>
      <div class="vsc-space--holder"></div>
    </v-space>
  </div>
</template>

<style lang="scss" scoped>
.vsc-space--holder {
  background: #cccccc;
  width: 80px;
  height: 80px;
}
</style>
```

:::

## 垂直排列

:::snippet 通过`direction`设置排列方式，可选值`horizontal`、`vertical`。

```vue
<template>
  <div class="vsc-space">
    <v-space :size="16" direction="vertical">
      <div class="vsc-space--holder"></div>
      <div class="vsc-space--holder"></div>
      <div class="vsc-space--holder"></div>
      <div class="vsc-space--holder"></div>
      <div class="vsc-space--holder"></div>
      <div class="vsc-space--holder"></div>
    </v-space>
  </div>
</template>

<style lang="scss" scoped>
.vsc-space--holder {
  background: #cccccc;
  height: 40px;
}
</style>
```

:::

## 内部间距

:::snippet 通过`surround`设置内部间距，也可以单独设置`top`、`bottom`、`right`、`left`设置指定位置边距会优先级高于`surround`。

```vue
<template>
  <div class="vsc-space">
    <v-space :surround="16" direction="vertical">
      <div class="vsc-space--holder"></div>
    </v-space>
  </div>
</template>

<style lang="scss" scoped>
.vsc-space {
  border: 1px solid $-color--border-base;
  padding: 0;
}

.vsc-space--holder {
  background: #cccccc;
  height: 200px;
}
</style>
```

:::

## 间距尺寸

:::snippet 可以通过`size`、`surround`的可选值`large`、`medium`、`small`设置间距大小也可以通过自定义数值大小来设置间距。

```vue
<template>
  <div class="vsc-space">
    <v-space size="small">
      <div class="vsc-space--holder"></div>
      <div class="vsc-space--holder"></div>
      <div class="vsc-space--holder"></div>
      <div class="vsc-space--holder"></div>
      <div class="vsc-space--holder"></div>
      <div class="vsc-space--holder"></div>
    </v-space>
    <v-space size="medium">
      <div class="vsc-space--holder"></div>
      <div class="vsc-space--holder"></div>
      <div class="vsc-space--holder"></div>
      <div class="vsc-space--holder"></div>
      <div class="vsc-space--holder"></div>
      <div class="vsc-space--holder"></div>
    </v-space>
    <v-space size="large">
      <div class="vsc-space--holder"></div>
      <div class="vsc-space--holder"></div>
      <div class="vsc-space--holder"></div>
      <div class="vsc-space--holder"></div>
      <div class="vsc-space--holder"></div>
      <div class="vsc-space--holder"></div>
    </v-space>
  </div>
</template>

<style lang="scss" scoped>
.vsc-space--holder {
  background: #cccccc;
  width: 80px;
  height: 80px;
}
</style>
```

:::

[space-direction] = _vertical \| horizontal_
[space-size] = _large \| medium \| small_
[space-surround] = _large \| medium \| small_

## Space Props

| 属性      | 说明     | 类型                        | 可选值              | 默认值       |
| --------- | -------- | --------------------------- | ------------------- | ------------ |
| direction | 间距方向 | _String_                    | [[space-direction]] | `horizontal` |
| size      | 间距尺寸 | _String \| Number_          | [[space-size]]      | `small`      |
| surround  | 环绕间距 | _String \| Number \| Array_ | [[space-surround]]  | —            |
| top       | 顶部间距 | _Number_                    | —                   | —            |
| right     | 右侧间距 | _Number_                    | —                   | —            |
| bottom    | 底部间距 | _Number_                    | —                   | —            |
| left      | 左侧间距 | _Number_                    | —                   | —            |

## Space Slots

| 名称 | 说明     |
| ---- | -------- |
| —    | 间距内容 |
