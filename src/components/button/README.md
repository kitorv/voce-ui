# Button 按钮

常用的操作按钮。

## 基础用法

:::snippet 通过按钮的类型 `type` 定义按钮的基础样式。

```vue
<template>
  <div class="vsc-button">
    <v-button>Default</v-button>
    <v-button type="primary">Primary</v-button>
    <v-button type="success">Success</v-button>
    <v-button type="warning">Warning</v-button>
    <v-button type="danger">Danger</v-button>
  </div>
</template>

<style lang="scss" scoped>
.vsc-button {
  .v-button {
    margin-right: 12px;
  }
}
</style>
```

:::
