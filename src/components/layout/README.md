# Layout 布局

页面基础布局。

## 基础用法

:::snippet 通过插槽`header`和`footer`设置顶部和底部布局。

```vue
<template>
  <div class="vsc-layout">
    <v-layout>
      <template #header>
        <div slot="header">Header</div>
      </template>
      <div>Main</div>
      <template #footer>
        <div>Footer</div>
      </template>
    </v-layout>
  </div>
</template>
```

:::

## 左侧边栏

:::snippet 通过插槽`left`设置左侧边栏。

```vue
<template>
  <div class="vsc-layout">
    <v-layout>
      <template #left>
        <div>Left</div>
      </template>
      <div>Main</div>
    </v-layout>
  </div>
</template>
```

:::

## 右侧边栏

:::snippet 通过插槽`right`设置右侧边栏。

```vue
<template>
  <div class="vsc-layout">
    <v-layout>
      <div>Main</div>
      <template #right>
        <div>Right</div>
      </template>
    </v-layout>
  </div>
</template>
```

:::

## 嵌套左侧边栏

:::snippet `Layout`组件相互嵌套构成嵌套左侧边栏布局。

```vue
<template>
  <div class="vsc-layout">
    <v-layout>
      <template #footer>
        <div>Footer</div>
      </template>
      <template #header>
        <div slot="header">Header</div>
      </template>
      <div>Main</div>
      <template #footer>
        <div>Footer</div>
      </template>
    </v-layout>
  </div>
</template>
```

:::

## 嵌套右侧边栏

:::snippet `Layout`组件相互嵌套构成嵌套左侧栏布局。

```vue
<template>
  <div class="vsc-layout">
    <v-layout>
      <template #header>
        <div slot="header">Header</div>
      </template>
      <div>Main</div>
      <template #footer>
        <div>Footer</div>
      </template>
      <template #right>
        <div>Right</div>
      </template>
    </v-layout>
  </div>
</template>
```

:::

## 内嵌左侧边栏

:::snippet `Layout`组件相互嵌套构成内嵌左侧栏布局。

```vue
<template>
  <div class="vsc-layout">
    <v-layout>
      <template #header>
        <div slot="header">Header</div>
      </template>
      <v-layout>
        <template #left>
          <div>Left</div>
        </template>
        <div>Main</div>
      </v-layout>
      <template #footer>
        <div>Footer</div>
      </template>
    </v-layout>
  </div>
</template>
```

:::

## 内嵌右侧边栏

:::snippet `Layout`组件相互嵌套构成内嵌右侧栏布局。

```vue
<template>
  <div class="vsc-layout">
    <v-layout>
      <template #header>
        <div slot="header">Header</div>
      </template>
      <v-layout>
        <div>Main</div>
        <template #right>
          <div>Right</div>
        </template>
      </v-layout>
      <template #footer>
        <div>Footer</div>
      </template>
    </v-layout>
  </div>
</template>
```

:::

## Layout Slots

| 名称   | 说明     |
| ------ | -------- |
| —      | 布局内容 |
| header | 顶部内容 |
| footer | 底部内容 |
| left   | 左侧内容 |
| right  | 右侧内容 |
