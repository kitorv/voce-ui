# Menu 导航菜单

为页面和功能提供导航的菜单列表。

## 基础用法

:::snippet 水平的顶部导航菜单。

```vue
<template>
  <v-menu v-model:active-index="activeIndex">
    <v-menu-item icon="appstore-fill" index="1">Navigation One</v-menu-item>
    <v-menu-item icon="appstore-fill" inndex="2"> Navigation Two </v-menu-item>
    <v-submenu icon="appstore-fill" title="Navigation Three - Submenu">
      <v-menu-item index="3-1">Menu Item 1</v-menu-item>
      <v-menu-item index="3-2">Menu Item 2</v-menu-item>
      <v-menu-item index="3-3">Menu Item 3</v-menu-item>
      <v-menu-item index="3-4">Menu Item 4</v-menu-item>
    </v-submenu>
    <v-menu-item icon="appstore-fill" index="4" disabled>Menu Four</v-menu-item>
  </v-menu>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const activeIndex = ref("1");
    return { activeIndex };
  },
});
</script>
```

:::

## 内嵌菜单

:::snippet 水平的顶部导航菜单。

```vue
<template>
  <div class="vsc-menu">
    <v-menu v-model:active-index="activeIndex" mode="vertical">
      <v-submenu icon="appstore-fill" title="Navigation One">
        <v-menu-item index="1">Menu Item 1</v-menu-item>
        <v-menu-item index="2">Menu Item 2</v-menu-item>
        <v-menu-item index="3">Menu Item 3</v-menu-item>
        <v-menu-item index="4">Menu Item 4</v-menu-item>
      </v-submenu>
      <v-submenu icon="appstore-fill" title="Navigation Two">
        <v-menu-item-group title="Group One">
          <v-menu-item index="5">Menu Item 5</v-menu-item>
          <v-menu-item index="6">Menu Item 6</v-menu-item>
        </v-menu-item-group>
        <v-menu-item-group title="Group Two">
          <v-menu-item index="7">Menu Item 7</v-menu-item>
          <v-menu-item index="8">Menu Item 8</v-menu-item>
        </v-menu-item-group>
      </v-submenu>
      <v-submenu icon="appstore-fill" title="Navigation Three">
        <v-menu-item index="9">Menu Item 9</v-menu-item>
        <v-menu-item index="10">Menu Item 10</v-menu-item>
        <v-menu-item index="11">Menu Item 11</v-menu-item>
        <v-menu-item index="12">Menu Item 12</v-menu-item>
      </v-submenu>
    </v-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const activeIndex = ref("1");
    return { activeIndex };
  },
});
</script>

<style lang="scss" scoped>
.vsc-menu {
  width: 250px;
}
</style>
```

:::
