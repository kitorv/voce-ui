## Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

### 基础布局

使用单一分栏创建基础的栅格布局。

:::snippet 通过 `kv-row` 和 `kv-col` 组件，并通过 `kv-col` 组件的 `span` 属性自由地组合布局。

```html
<template>
  <div class="kv-demo--layout">
    <kv-row>
      <kv-col :span="24">
        <div>100%</div>
      </kv-col>
    </kv-row>
    <kv-row>
      <kv-col :key="index" v-for="index in 2" :span="12">
        <div>50%</div>
      </kv-col>
    </kv-row>
    <kv-row>
      <kv-col :key="index" v-for="index in 3" :span="8">
        <div>33.3%</div>
      </kv-col>
    </kv-row>
    <kv-row>
      <kv-col :key="index" v-for="index in 4" :span="6">
        <div>25%</div>
      </kv-col>
    </kv-row>
    <kv-row>
      <kv-col :key="index" v-for="index in 6" :span="4">
        <div>16.6%</div>
      </kv-col>
    </kv-row>
    <kv-row>
      <kv-col :key="index" v-for="index in 8" :span="3">
        <div>8.3%</div>
      </kv-col>
    </kv-row>
  </div>
</template>

<style>
  .kv-demo--layout .kv-row {
    border-top: 1px solid #d2d2d2;
  }
  .kv-demo--layout .kv-row:last-child {
    border-bottom: 1px solid #d2d2d2;
  }
  .kv-demo--layout .kv-col {
    color: #969696;
    background: #f5f7fb;
    border-left: 1px solid #d2d2d2;
  }
  .kv-demo--layout .kv-col:last-child {
    border-right: 1px solid #d2d2d2;
  }
  .kv-demo--layout .kv-col > div {
    padding: 6px;
  }
</style>
```

:::

### Flex 的布局

使用 css 的 flex 布局

:::snippet `kv-row` 设置 `type` 属性值：`flex` ,设置 `justify` 和 `align` 指定对其格式。

```html
<template>
  <div class="kv-demo--layout">
    <kv-row type="flex" justify="start">
      <kv-col :key="index" v-for="index in 3" :span="4">
        <div>span-4</div>
      </kv-col>
    </kv-row>
    <kv-row type="flex" justify="center">
      <kv-col :key="index" v-for="index in 3" :span="4">
        <div>span-4</div>
      </kv-col>
    </kv-row>
    <kv-row type="flex" justify="end">
      <kv-col :key="index" v-for="index in 3" :span="4">
        <div>span-4</div>
      </kv-col>
    </kv-row>
    <kv-row type="flex" justify="space-around">
      <kv-col class="kv-demo-layout--right-boder" :key="index" v-for="index in 3" :span="4">
        <div>span-4</div>
      </kv-col>
    </kv-row>
    </kv-row>
    <kv-row type="flex" justify="space-between">
      <kv-col class="kv-demo-layout--right-boder" :key="index" v-for="index in 3" :span="4">
        <div>span-4</div>
      </kv-col>
    </kv-row>
  </div>
</template>

<style>
  .kv-demo--layout .kv-row {
    border-top: 1px solid #d2d2d2;
  }
  .kv-demo--layout .kv-row:last-child {
    border-bottom: 1px solid #d2d2d2;
  }
  .kv-demo--layout .kv-col {
    color: #969696;
    background: #f5f7fb;
    border-left: 1px solid #d2d2d2;
  }
  .kv-demo--layout .kv-col:last-child {
    border-right: 1px solid #d2d2d2;
  }
  .kv-demo--layout .kv-col > div {
    padding: 6px;
  }
  .kv-demo-layout--right-boder{
     border-right: 1px solid #d2d2d2;
  }
</style>
```

:::

### Offset 偏移

使用 css 的 flex 布局

:::snippet `kv-col` 设置 `offset` 属性指定偏移占位。

```html
<template>
  <div class="kv-demo--layout">
    <kv-row>
      <kv-col class="kv-demo-layout--right-boder" :span="6">
        <div>offset-6</div>
      </kv-col>
      <kv-col :span="6" :offset="6">
        <div>offset-6</div>
      </kv-col>
    </kv-row>
    <kv-row>
      <kv-col class="kv-demo-layout--right-boder" :span="6" :offset="6">
        <div>offset-6</div>
      </kv-col>
      <kv-col :span="6" :offset="6">
        <div>offset-6</div>
      </kv-col>
    </kv-row>
    <kv-row>
      <kv-col :span="12" :offset="6">
        <div>offset-6</div>
      </kv-col>
    </kv-row>
  </div>
</template>

<style>
  .kv-demo--layout .kv-row {
    border-top: 1px solid #d2d2d2;
  }
  .kv-demo--layout .kv-row:last-child {
    border-bottom: 1px solid #d2d2d2;
  }
  .kv-demo--layout .kv-col {
    color: #969696;
    background: #f5f7fb;
    border-left: 1px solid #d2d2d2;
  }
  .kv-demo--layout .kv-col:last-child {
    border-right: 1px solid #d2d2d2;
  }
  .kv-demo--layout .kv-col > div {
    padding: 6px;
  }
  .kv-demo-layout--right-boder {
    border-right: 1px solid #d2d2d2;
  }
</style>
```

:::

### 响应布局

参照了 `Bootstrap` 响应式设计，预设尺寸：`xs`、`sm`、`md`、`lg` 和 `xl`。

:::snippet 根据设备的大小设置对应显示大小

```html
<template>
  <div class="kv-demo--layout">
    <kv-row>
      <kv-col :xs="8" :sm="6" :md="4" :lg="3" :xl="5" :span="8">
        <div>content</div>
      </kv-col>
      <kv-col :xs="8" :sm="12" :md="4" :lg="3" :xl="5" :span="8">
        <div>content</div>
      </kv-col>
      <kv-col :xs="8" :sm="6" :md="16" :lg="18" :xl="14" :span="8">
        <div>content</div>
      </kv-col>
    </kv-row>
  </div>
</template>

<style>
  .kv-demo--layout .kv-row {
    border-top: 1px solid #d2d2d2;
  }
  .kv-demo--layout .kv-row:last-child {
    border-bottom: 1px solid #d2d2d2;
  }
  .kv-demo--layout .kv-col {
    color: #969696;
    background: #f5f7fb;
    border-left: 1px solid #d2d2d2;
  }
  .kv-demo--layout .kv-col:last-child {
    border-right: 1px solid #d2d2d2;
  }
  .kv-demo--layout .kv-col > div {
    padding: 6px;
  }
</style>
```

:::

### KvRow Attributes

| 参数    | 说明                                  | 类型   | 可选值                                      | 默认值 |
| ------- | ------------------------------------- | ------ | ------------------------------------------- | ------ |
| gutter  | 栅格间隔                              | number | —                                           | 0      |
| type    | 布局模式，可选 flex，现代浏览器下有效 | string | —                                           | —      |
| justify | flex 布局下的水平排列方式             | string | start/end/center/space-around/space-between | start  |
| align   | flex 布局下的垂直排列方式             | string | top/middle/bottom                           | top    |
| tag     | 自定义元素标签                        | string | \*                                          | div    |

### KvCol Attributes

| 参数   | 说明                                   | 类型                                        | 可选值 | 默认值 |
| ------ | -------------------------------------- | ------------------------------------------- | ------ | ------ |
| span   | 栅格占据的列数                         | number                                      | —      | 24     |
| offset | 栅格左侧的间隔格数                     | number                                      | —      | 0      |
| push   | 栅格向右移动格数                       | number                                      | —      | 0      |
| pull   | 栅格向左移动格数                       | number                                      | —      | 0      |
| xs     | `<768px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| sm     | `≥768px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| md     | `≥992px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| lg     | `≥1200px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| xl     | `≥1920px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| tag    | 自定义元素标签                         | string                                      | \*     | div    |
