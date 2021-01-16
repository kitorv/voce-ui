# Icon 图标

提供统一的图标。

## 基础使用

:::snippet 通过`type`设置对应的图标。

```vue
<template>
  <v-icon type="code-expand" />
  <v-icon type="code-collapse" />
</template>
```

:::

## 图标颜色

:::snippet 通过`effect`设置预定义的颜色，默认使用父级元素的颜色。

```vue
<template>
  <v-icon type="star-fill" effect="default" />
  <v-icon type="star-fill" effect="regular" />
  <v-icon type="star-fill" effect="secondary" />
  <v-icon type="star-fill" effect="placeholder" />
  <v-icon type="star-fill" effect="primary" />
  <v-icon type="star-fill" effect="success" />
  <v-icon type="star-fill" effect="warning" />
  <v-icon type="star-fill" effect="danger" />
  <v-icon type="star-fill" effect="dark" />
</template>
```

:::

## 图标大小

:::snippet 通过`size`设置图标的大小。

```vue
<template>
  <v-icon type="heart-fill" :size="16" />
  <v-icon type="heart-fill" :size="24" />
  <v-icon type="heart-fill" :size="32" />
  <v-icon type="heart-fill" :size="40" />
</template>
```

:::

## 图标列表

具体的图标展示

<vc-icon-view/>

## Icon Props

[icon-effect] = _default \| regular \| secondary \| placeholder \| primary \| success \| danger \| warning_

| 属性   | 说明                  | 类型     | 默认值 |
| ------ | --------------------- | -------- | ------ |
| type   | 类型                  | _String_ | —      |
| size   | 尺寸                  | _Number_ | —      |
| effect | 颜色：[[icon-effect]] | _String_ | —      |
