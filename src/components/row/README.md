# Grid 栅格

通过 24 栅格快速的创建布局。

## 基础用法

:::snippet 通过`v-row`和`v-col`栅格组件，就可以创建一个基本的栅格系统，所有列`v-col`必须放在`v-row`内。

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
