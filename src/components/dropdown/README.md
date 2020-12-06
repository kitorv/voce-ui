# Dropdown 下拉菜单

向下弹出的列表。

## 基础用法

:::snippet

```vue
<template>
  <v-dropdown>
    <template #reference>
      <v-link type="primary" suffix-icon="down">Hover Me</v-link>
    </template>
    <template #content>
      <v-dropdown-menu>
        <v-dropdown-menu-item>1st menu item</v-dropdown-menu-item>
        <v-dropdown-menu-item>2nd menu item</v-dropdown-menu-item>
        <v-dropdown-menu-item>3rd menu item</v-dropdown-menu-item>
      </v-dropdown-menu>
    </template>
  </v-dropdown>
</template>
```

:::
