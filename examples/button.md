## 按钮

便于使用的按钮组件

### 基础用法

按钮的基本使用

:::snippet 通过 type 设置按钮类型，color 设置按钮的显示状态颜色

```html
<template>
  <div>
    <kv-button>Primary</kv-button>
    <kv-button color="success">Success</kv-button>
    <kv-button color="danger">Danger</kv-button>
    <kv-button color="warning">Warning</kv-button>
    <kv-button color="dark">Dark</kv-button>
  </div>
</template>
```

:::

### 按钮禁用

按钮状态禁用不会触发事件

:::snippet 设置 disabled 属性来禁用按钮。

```html
<template>
  <div>
    <kv-button disabled>Primary</kv-button>
    <kv-button type="border" disabled>Primary</kv-button>
    <kv-button type="flat" disabled>Primary</kv-button>
  </div>
</template>
```

:::

### 按钮类别

不用样式的按钮

:::snippet 通过 type 设置按钮类型，设置 type 会给按钮加上`.kv-button--type-{type}`格式的样式可以进行扩展

```html
<template>
  <div>
    <div class="kv-demo--button-bottom">
      <kv-button>Primary</kv-button>
      <kv-button color="success">Success</kv-button>
      <kv-button color="danger">Danger</kv-button>
      <kv-button color="warning">Warning</kv-button>
      <kv-button color="dark">Dark</kv-button>
    </div>
    <div class="kv-demo--button-bottom">
      <kv-button type="border">Primary</kv-button>
      <kv-button type="border" color="success">Success</kv-button>
      <kv-button type="border" color="danger">Danger</kv-button>
      <kv-button type="border" color="warning">Warning</kv-button>
      <kv-button type="border" color="dark">Dark</kv-button>
    </div>
    <div class="kv-demo--button-bottom">
      <kv-button type="flat">Primary</kv-button>
      <kv-button type="flat" color="success">Success</kv-button>
      <kv-button type="flat" color="danger">Danger</kv-button>
      <kv-button type="flat" color="warning">Warning</kv-button>
      <kv-button type="flat" color="dark">Dark</kv-button>
    </div>
  </div>
</template>

<style>
  .kv-demo--button-bottom {
    margin-bottom: 15px;
  }
</style>
```

:::

### 按钮图标

不用样式的按钮

:::snippet icon 设置图标样式，iconType 设置图标的在左侧还是右侧

```html
<template>
  <div>
    <div class="kv-demo--button-bottom">
      <kv-button icon="k-v-icon-github">contetnt</kv-button>
      <kv-button icon="k-v-icon-github" icon-type="right">contetnt</kv-button>
      <kv-button type="border" icon="k-v-icon-github" icon-type="right"
        >contetnt</kv-button
      >
      <kv-button type="border" icon="k-v-icon-github">contetnt</kv-button>
      <kv-button type="flat" icon="k-v-icon-github" icon-type="right"
        >contetnt</kv-button
      >
      <kv-button type="flat" icon="k-v-icon-github">contetnt</kv-button>
    </div>
    <div>
      <kv-button icon="k-v-icon-github"></kv-button>
      <kv-button icon="k-v-icon-github" icon-type="right"></kv-button>
      <kv-button
        type="border"
        icon="k-v-icon-github"
        icon-type="right"
      ></kv-button>
      <kv-button type="border" icon="k-v-icon-github"></kv-button>
      <kv-button
        type="flat"
        icon="k-v-icon-github"
        icon-type="right"
      ></kv-button>
      <kv-button type="flat" icon="k-v-icon-github"></kv-button>
    </div>
  </div>
</template>

<style>
  .kv-demo--button-bottom {
    margin-bottom: 15px;
  }
</style>
```

:::

### 按钮圆角

按钮的圆角样式

:::snippet 设置 circle 自动设置圆角样式

```html
<template>
  <div>
    <div class="kv-demo--button-bottom">
      <kv-button icon="k-v-icon-github" circle>contetnt</kv-button>
      <kv-button type="border" icon="k-v-icon-github" circle
        >contetnt</kv-button
      >
      <kv-button type="flat" icon="k-v-icon-github" circle>contetnt</kv-button>
    </div>
    <div>
      <kv-button icon="k-v-icon-github" circle></kv-button>
      <kv-button type="border" icon="k-v-icon-github" circle></kv-button>
      <kv-button type="flat" icon="k-v-icon-github" circle></kv-button>
    </div>
  </div>
</template>

<style>
  .kv-demo--button-bottom {
    margin-bottom: 15px;
  }
</style>
```

:::

### 按钮大小

设置按钮的不用尺寸

:::snippet 通过 size 设置按钮大小

```html
<template>
  <div>
    <kv-button size="large">Large</kv-button>
    <kv-button>Default</kv-button>
    <kv-button size="small">Small</kv-button>
  </div>
</template>
```

:::

### Attributes

| 参数     | 说明         | 类型    | 可选值                               | 默认值  |
| -------- | ------------ | ------- | ------------------------------------ | ------- |
| size     | 尺寸         | string  | large / default / small              | default |
| color    | 尺寸         | string  | primary / success / danger/ warining | —       |
| type     | 类型         | string  | fill/border/flat                     | —       |
| circle   | 是否圆角按钮 | boolean | —                                    | false   |
| disabled | 是否禁用状态 | boolean | —                                    | false   |
| icon     | 图标类名     | string  | —                                    | —       |
| iconType | 按钮对其格式 | string  | left / right                         | left    |
