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

## 弹出位置

:::snippet

```vue
<template>
  <v-space>
    <v-dropdown placement="bottom-start">
      <template #reference>
        <v-button>Bottom Start</v-button>
      </template>
      <template #content>
        <v-dropdown-menu>
          <v-dropdown-menu-item>1st menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>2nd menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>3rd menu item</v-dropdown-menu-item>
        </v-dropdown-menu>
      </template>
    </v-dropdown>
    <v-dropdown placement="bottom">
      <template #reference>
        <v-button>Bottom</v-button>
      </template>
      <template #content>
        <v-dropdown-menu>
          <v-dropdown-menu-item>1st menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>2nd menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>3rd menu item</v-dropdown-menu-item>
        </v-dropdown-menu>
      </template>
    </v-dropdown>
    <v-dropdown placement="bottom-end">
      <template #reference>
        <v-button>Bottom End</v-button>
      </template>
      <template #content>
        <v-dropdown-menu>
          <v-dropdown-menu-item>1st menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>2nd menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>3rd menu item</v-dropdown-menu-item>
        </v-dropdown-menu>
      </template>
    </v-dropdown>
  </v-space>
  <v-space>
    <v-dropdown placement="top-start">
      <template #reference>
        <v-button>Top Start</v-button>
      </template>
      <template #content>
        <v-dropdown-menu>
          <v-dropdown-menu-item>1st menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>2nd menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>3rd menu item</v-dropdown-menu-item>
        </v-dropdown-menu>
      </template>
    </v-dropdown>
    <v-dropdown placement="top">
      <template #reference>
        <v-button>Top</v-button>
      </template>
      <template #content>
        <v-dropdown-menu>
          <v-dropdown-menu-item>1st menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>2nd menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>3rd menu item</v-dropdown-menu-item>
        </v-dropdown-menu>
      </template>
    </v-dropdown>
    <v-dropdown placement="top-end">
      <template #reference>
        <v-button>Top End</v-button>
      </template>
      <template #content>
        <v-dropdown-menu>
          <v-dropdown-menu-item>1st menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>2nd menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>3rd menu item</v-dropdown-menu-item>
        </v-dropdown-menu>
      </template>
    </v-dropdown>
  </v-space>
</template>
```

:::

## 箭头

:::snippet

```vue
<template>
  <v-space>
    <v-dropdown placement="bottom-start" arrow>
      <template #reference>
        <v-button>Bottom Start</v-button>
      </template>
      <template #content>
        <v-dropdown-menu>
          <v-dropdown-menu-item>1st menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>2nd menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>3rd menu item</v-dropdown-menu-item>
        </v-dropdown-menu>
      </template>
    </v-dropdown>
    <v-dropdown placement="bottom" arrow>
      <template #reference>
        <v-button>Bottom</v-button>
      </template>
      <template #content>
        <v-dropdown-menu>
          <v-dropdown-menu-item>1st menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>2nd menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>3rd menu item</v-dropdown-menu-item>
        </v-dropdown-menu>
      </template>
    </v-dropdown>
    <v-dropdown placement="bottom-end" arrow>
      <template #reference>
        <v-button>Bottom End</v-button>
      </template>
      <template #content>
        <v-dropdown-menu>
          <v-dropdown-menu-item>1st menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>2nd menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>3rd menu item</v-dropdown-menu-item>
        </v-dropdown-menu>
      </template>
    </v-dropdown>
  </v-space>
  <v-space>
    <v-dropdown placement="top-start" arrow>
      <template #reference>
        <v-button>Top Start</v-button>
      </template>
      <template #content>
        <v-dropdown-menu>
          <v-dropdown-menu-item>1st menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>2nd menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>3rd menu item</v-dropdown-menu-item>
        </v-dropdown-menu>
      </template>
    </v-dropdown>
    <v-dropdown placement="top" arrow>
      <template #reference>
        <v-button>Top</v-button>
      </template>
      <template #content>
        <v-dropdown-menu>
          <v-dropdown-menu-item>1st menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>2nd menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>3rd menu item</v-dropdown-menu-item>
        </v-dropdown-menu>
      </template>
    </v-dropdown>
    <v-dropdown placement="top-end" arrow>
      <template #reference>
        <v-button>Top End</v-button>
      </template>
      <template #content>
        <v-dropdown-menu>
          <v-dropdown-menu-item>1st menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>2nd menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>3rd menu item</v-dropdown-menu-item>
        </v-dropdown-menu>
      </template>
    </v-dropdown>
  </v-space>
</template>
```

:::

## 菜单项禁用

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
        <v-dropdown-menu-item disabled>3rd menu item</v-dropdown-menu-item>
      </v-dropdown-menu>
    </template>
  </v-dropdown>
</template>
```

:::

## 触发方式

:::snippet

```vue
<template>
  <v-space>
    <v-dropdown trigger="click">
      <template #reference>
        <v-button>Click</v-button>
      </template>
      <template #content>
        <v-dropdown-menu>
          <v-dropdown-menu-item>1st menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>2nd menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>3rd menu item</v-dropdown-menu-item>
        </v-dropdown-menu>
      </template>
    </v-dropdown>
    <v-dropdown trigger="hover">
      <template #reference>
        <v-button>Hover</v-button>
      </template>
      <template #content>
        <v-dropdown-menu>
          <v-dropdown-menu-item>1st menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>2nd menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>3rd menu item</v-dropdown-menu-item>
        </v-dropdown-menu>
      </template>
    </v-dropdown>
    <v-dropdown trigger="contextMenu">
      <template #reference>
        <v-button>ContextMenu</v-button>
      </template>
      <template #content>
        <v-dropdown-menu>
          <v-dropdown-menu-item>1st menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>2nd menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>3rd menu item</v-dropdown-menu-item>
        </v-dropdown-menu>
      </template>
    </v-dropdown>
  </v-space>
</template>
```

:::
