# Icon 图标

提供统一的图标。

## 基础使用

:::snippet 在标签上设置类名，类名格式：`v-icon-{name}`。

```vue
<template>
  <div class="vsc-icon">
    <i class="v-icon-code-expand"></i>
    <i class="v-icon-code-collapse"></i>
  </div>
</template>

<style lang="scss" scoped>
.vsc-icon {
  font-size: 32px;
  color: $-color-text--regular;
}

.vsc-icon > i {
  margin-right: 16px;
}
</style>
```

:::

## 图标列表

具体的图标展示

<VcIconView/>
