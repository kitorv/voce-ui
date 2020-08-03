## Affix 固钉

将页面元素钉在可视范围。

## 基础用法

:::snippet 通过`offset-top`和`offset-bottom`设置固定的位置。

```vue
<template>
  <div class="vsc-affix">
    <v-affix :offset-top="0">
      <v-button type="primary">Affix Top</v-button>
    </v-affix>
    <div style="height:800px" />
    <v-affix :offset-bottom="0">
      <v-button type="primary">Affix Top</v-button>
    </v-affix>
  </div>
</template>
```

:::
