# Dropdown 下拉菜单

向下弹出的列表。

## 基础用法

:::snippet 通过插槽`reference`和`content`设置触发元素和下拉菜单面板。

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

:::snippet 通过`placement`设置弹出位置，支持 6 个弹出位置。

```vue
<template>
  <div>
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
  </div>
  <div>
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
  </div>
</template>
```

:::

## 箭头

:::snippet 通过`arrow`设置展示下拉面板展示箭头。

```vue
<template>
  <div>
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
  </div>
  <div>
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
  </div>
</template>
```

:::

## 菜单项禁用

:::snippet 通过菜单项`disabled`禁用，单击不会触发菜单事件。

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

:::snippet 通过`trigger`可以设置触发方式。

```vue
<template>
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
</template>
```

:::

## 触发事件

:::snippet 通过菜单项绑定`value`点击触发，菜单的`click`事件，参数为菜单项对应的的`value`。

```vue
<template>
  <v-dropdown>
    <template #reference>
      <v-link type="primary" suffix-icon="down">Hover Me</v-link>
    </template>
    <template #content>
      <v-dropdown-menu @click="onMenuClick">
        <v-dropdown-menu-item value="1st">1st menu item</v-dropdown-menu-item>
        <v-dropdown-menu-item value="2nd">2nd menu item</v-dropdown-menu-item>
        <v-dropdown-menu-item value="3rd">3rd menu item</v-dropdown-menu-item>
      </v-dropdown-menu>
    </template>
  </v-dropdown>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const onMenuClick = (value: string) => {
      console.log(value);
    };
    return { onMenuClick };
  },
});
</script>
```

:::

[dropdown-placement] = _top \| top-start \| top-end \| bottom \| bottom-start \| bottom-end_
[dropdown-trigger] = _click \| hover_

## Dropdown Props

| 属性      | 说明                             | 类型      | 默认值         |
| --------- | -------------------------------- | --------- | -------------- |
| trigger   | 触发方式：[[dropdown-trigger]]   | _String_  | `hover`        |
| placement | 弹出位置：[[dropdown-placement]] | _String_  | `bottom-start` |
| arrow     | 显示箭头                         | _Boolean_ | `false`        |

## Dropdown Slots

| 名称      | 说明     |
| --------- | -------- |
| reference | 触发元素 |
| content   | 下拉面板 |

## DropdownMenu Slots

| 名称 | 说明   |
| ---- | ------ |
| —    | 菜单项 |

## DropdownMenu Events

| 事件名称 | 说明           | 回调参数              |
| -------- | -------------- | --------------------- |
| click    | 点击菜单项触发 | _event:MenuItemValue_ |

## DropdownMenuItem Props

| 属性     | 说明                 | 类型                         | 默认值  |
| -------- | -------------------- | ---------------------------- | ------- |
| value    | 点击触发菜单事件参数 | _String \| Number \| Object_ | —       |
| disabled | 禁用不会触发菜单事件 | _Boolean_                    | `false` |

## DropdownMenuItem Slots

| 名称 | 说明       |
| ---- | ---------- |
| —    | 菜单项内容 |
