## Affix 固钉

将页面元素钉在可视范围。

## 基础用法

:::snippet 通过`offset-top`设置固定到顶部的位置。

```vue
<template>
  <v-affix :offset-top="200">
    <v-button type="primary">Affix Top</v-button>
  </v-affix>
</template>
```

:::

## 固定位置

:::snippet 通过`offset-bottom`设置固定到底部的位置。

```vue
<template>
  <v-affix :offset-bottom="0">
    <v-button type="primary">Affix Bottom</v-button>
  </v-affix>
</template>
```

:::

## 固定位置

:::snippet 通过`target`设置滚动触发元素。

```vue
<template>
  <v-affix :offset-top="500" :target="target">
    <v-button type="primary">Affix Target</v-button>
  </v-affix>
</template>

<script lang="ts">
import { defineComponent, markRaw, ref } from "vue";

export default defineComponent({
  setup() {
    const target = ref(markRaw(window));
    return { target };
  },
});
</script>
```

:::

## Affix Props

| 属性       | 说明                             | 类型                    | 默认值   |
| ---------- | -------------------------------- | ----------------------- | -------- |
| offset-top | 距离窗口底部达到指定偏移量后触发 | _Number_                | —        |
| size       | 距离窗口顶部达到指定偏移量后触发 | _Number_                | —        |
| target     | 设置需要监听其滚动事件的元素     | _HtmlElement \| Window_ | `window` |
