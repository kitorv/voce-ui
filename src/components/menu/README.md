# Menu 导航菜单

为页面和功能提供导航的菜单列表。

## 基础用法

:::snippet 水平的顶部导航菜单。

```vue
<template>
  <v-menu v-model:active-index="activeIndex">
    <v-menu-item icon="appstore-fill" index="1">Navigation One</v-menu-item>
    <v-menu-item icon="appstore-fill" inndex="2" disabled>
      Navigation Two
    </v-menu-item>
    <v-submenu icon="appstore-fill" title="Navigation Three - Submenu">
      <v-menu-item-group title="Group One">
        <v-menu-item index="3-1">Menu Item 1</v-menu-item>
        <v-menu-item index="3-2">Menu Item 2</v-menu-item>
      </v-menu-item-group>
      <v-menu-item-group title="Group Two">
        <v-menu-item index="3-3">Menu Item 3</v-menu-item>
        <v-menu-item index="3-4">Menu Item 4</v-menu-item>
      </v-menu-item-group>
    </v-submenu>
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

:::snippet 垂直菜单，子菜单内嵌在菜单区域。

```vue
<template>
  <div class="vsc-menu">
    <v-menu v-model:active-index="activeIndex" mode="vertical">
      <v-submenu icon="appstore-fill" title="Navigation One">
        <v-menu-item-group title="Group One">
          <v-menu-item index="1">Menu Item 1</v-menu-item>
          <v-menu-item index="2">Menu Item 2</v-menu-item>
        </v-menu-item-group>
        <v-menu-item-group title="Group Two">
          <v-menu-item index="3">Menu Item 3</v-menu-item>
          <v-menu-item index="4">Menu Item 4</v-menu-item>
        </v-menu-item-group>
      </v-submenu>
      <v-submenu icon="appstore-fill" title="Navigation Two">
        <v-menu-item index="5">Menu Item 5</v-menu-item>
        <v-menu-item index="6">Menu Item 6</v-menu-item>
        <v-menu-item index="7">Menu Item 7</v-menu-item>
        <v-menu-item index="8">Menu Item 8</v-menu-item>
        <v-submenu title="Submenu">
          <v-menu-item index="9">Menu Item 9</v-menu-item>
          <v-menu-item index="10">Menu Item 10</v-menu-item>
          <v-menu-item index="11">Menu Item 11</v-menu-item>
          <v-menu-item index="12">Menu Item 12</v-menu-item>
        </v-submenu>
      </v-submenu>
      <v-submenu icon="appstore-fill" title="Navigation Three">
        <v-menu-item index="13">Menu Item 13</v-menu-item>
        <v-menu-item index="14">Menu Item 14</v-menu-item>
        <v-menu-item index="15">Menu Item 15</v-menu-item>
        <v-menu-item index="16">Menu Item 16</v-menu-item>
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

## 折叠菜单

:::snippet 内嵌菜单可以通过`collapse`属性被缩起/展开。

```vue
<template>
  <v-button type="primary" icon="outdent" @click="onCollapseClick" />
  <div class="vsc-menu">
    <v-menu
      v-model:active-index="activeIndex"
      mode="vertical"
      :collapse="collapse"
    >
      <v-submenu icon="appstore-fill" title="Navigation One">
        <v-menu-item-group title="Group One">
          <v-menu-item index="1">Menu Item 1</v-menu-item>
          <v-menu-item index="2">Menu Item 2</v-menu-item>
        </v-menu-item-group>
        <v-menu-item-group title="Group Two">
          <v-menu-item index="3">Menu Item 3</v-menu-item>
          <v-menu-item index="4">Menu Item 4</v-menu-item>
        </v-menu-item-group>
      </v-submenu>
      <v-submenu icon="appstore-fill" title="Navigation Two">
        <v-menu-item index="5">Menu Item 5</v-menu-item>
        <v-menu-item index="6">Menu Item 6</v-menu-item>
        <v-menu-item index="7">Menu Item 7</v-menu-item>
        <v-menu-item index="8">Menu Item 8</v-menu-item>
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
    const activeIndex = ref("8");

    const collapse = ref(false);

    const onCollapseClick = () => {
      collapse.value = !collapse.value;
    };

    return { activeIndex, collapse, onCollapseClick };
  },
});
</script>

<style lang="scss" scoped>
.vsc-menu {
  width: 250px;
  padding-top: 16px;
}
</style>
```

:::

## 手风琴菜单

:::snippet 点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。

```vue
<template>
  <div class="vsc-menu">
    <v-menu v-model:active-index="activeIndex" mode="vertical" accordion>
      <v-submenu icon="appstore-fill" title="Navigation One">
        <v-menu-item index="1">Menu Item 1</v-menu-item>
        <v-menu-item index="2">Menu Item 2</v-menu-item>
        <v-menu-item index="3">Menu Item 3</v-menu-item>
        <v-menu-item index="4">Menu Item 4</v-menu-item>
      </v-submenu>
      <v-submenu icon="appstore-fill" title="Navigation Two">
        <v-menu-item index="5">Menu Item 5</v-menu-item>
        <v-menu-item index="6">Menu Item 6</v-menu-item>
        <v-menu-item index="7">Menu Item 7</v-menu-item>
        <v-menu-item index="8">Menu Item 8</v-menu-item>
        <v-submenu title="Submenu">
          <v-menu-item index="9">Menu Item 9</v-menu-item>
          <v-menu-item index="10">Menu Item 10</v-menu-item>
          <v-menu-item index="11">Menu Item 11</v-menu-item>
          <v-menu-item index="12">Menu Item 12</v-menu-item>
        </v-submenu>
      </v-submenu>
      <v-submenu icon="appstore-fill" title="Navigation Three">
        <v-menu-item index="13">Menu Item 13</v-menu-item>
        <v-menu-item index="14">Menu Item 14</v-menu-item>
        <v-menu-item index="15">Menu Item 15</v-menu-item>
        <v-menu-item index="16">Menu Item 16</v-menu-item>
      </v-submenu>
    </v-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const activeIndex = ref("1");

    const collapse = ref(false);

    const onCollapseClick = () => {
      collapse.value = !collapse.value;
    };

    return { activeIndex, collapse, onCollapseClick };
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
