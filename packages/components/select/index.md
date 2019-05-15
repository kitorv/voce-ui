# Select 下拉框

## 基础用法

:::snippet `v-model` 的值为当前被选中的 `kv-option` 的 `value` 属性值。

```html
<template>
  <div class="kv-demo--select">
    <kv-select v-model="value">
      <kv-option value="0" label="IT"></kv-option>
      <kv-option value="1" label="Blade Runner"></kv-option>
      <kv-option value="2" label="Thor Ragnarok"></kv-option>
    </kv-select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: "",
        value2: { value: "0", label: "IT" }
      };
    }
  };
</script>
<style>
  .kv-demo--select .kv-select {
    width: 250px;
  }
</style>
```

:::

## 禁用下拉框

:::snippet 通过 `disabled` 属性禁用下拉框。

```html
<template>
  <div class="kv-demo--select">
    <kv-select v-model="value" disabled>
      <kv-option value="0" label="IT"></kv-option>
      <kv-option value="1" label="Blade Runner"></kv-option>
      <kv-option value="2" label="Thor Ragnarok"></kv-option>
    </kv-select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: ""
      };
    }
  };
</script>
<style>
  .kv-demo--select .kv-select {
    width: 250px;
  }
</style>
```

:::

## 禁用选项

:::snippet 通过 `kv-option` 的 `disabled` 属性禁用选项。

```html
<template>
  <div class="kv-demo--select">
    <kv-select v-model="value">
      <kv-option value="0" label="IT"></kv-option>
      <kv-option value="1" label="Blade Runner" disabled></kv-option>
      <kv-option value="2" label="Thor Ragnarok"></kv-option>
    </kv-select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: ""
      };
    }
  };
</script>
<style>
  .kv-demo--select .kv-select {
    width: 250px;
  }
</style>
```

:::

## 多选模式

:::snippet 设置 mode 为 mutiple 或者 tags 选中多个选项。

```html
<template>
  <div class="kv-demo--select">
    <kv-select v-model="values" mode="multiple">
      <kv-option value="0" label="IT"></kv-option>
      <kv-option value="1" label="Blade Runner"></kv-option>
      <kv-option value="2" label="Thor Ragnarok"></kv-option>
    </kv-select>
    <kv-select v-model="tags" mode="tags">
      <kv-option value="0" label="IT"></kv-option>
      <kv-option value="1" label="Blade Runner"></kv-option>
      <kv-option value="2" label="Thor Ragnarok"></kv-option>
    </kv-select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        values: [],
        tags: []
      };
    }
  };
</script>
<style>
  .kv-demo--select .kv-select {
    width: 250px;
    margin-right: 20px;
  }
</style>
```

:::

## 自定义模板

:::snippet 设置 `kv-option` 的默认 `slot`。

```html
<template>
  <div class="kv-demo--select">
    <kv-select v-model="value">
      <kv-option
        v-for="{value,label} in options"
        :key="value"
        :value="value"
        :label="label"
      >
        <span style="float: left" v-text="label"></span>
        <span style="float: right; color: #8492a6;" v-text="value"></span>
      </kv-option>
    </kv-select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: [
          { value: 0, label: "primary" },
          { value: 1, label: "success" },
          { value: 2, label: "danger" },
          { value: 3, label: "waring" }
        ],
        value: ""
      };
    }
  };
</script>
<style>
  .kv-demo--select .kv-select {
    width: 250px;
  }
</style>
```

:::

## 选项分组

:::snippet 通过 `kv-option-group` 嵌套 `kv-option` 进行选择的分组。

```html
<template>
  <div class="kv-demo--select">
    <kv-select v-model="value">
      <kv-option-group title="Figures">
        <kv-option value="0" label="Rombolid"></kv-option>
        <kv-option value="1" label="Trapeze"></kv-option>
        <kv-option value="2" label="Polygon"></kv-option>
      </kv-option-group>
      <kv-option-group title="Color">
        <kv-option value="3" label="Red"></kv-option>
        <kv-option value="4" label="Blue"></kv-option>
        <kv-option value="5" label="Yellow"></kv-option>
      </kv-option-group>
    </kv-select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: ""
      };
    }
  };
</script>
<style>
  .kv-demo--select .kv-select {
    width: 250px;
  }
</style>
```

:::

## 对象绑定

:::snippet 通过 `value-key` 与 `label-key` 可以进行对象数据双向绑定，数据格式 `{ value, label }` 或者 `[{ value, label },...]` 。

```html
<template>
  <div class="kv-demo--select">
    <kv-select v-model="value" value-key="value" label-key="label">
      <kv-option value="0" label="IT"></kv-option>
      <kv-option value="1" label="Blade Runner"></kv-option>
      <kv-option value="2" label="Thor Ragnarok"></kv-option>
    </kv-select>
    <kv-select v-model="value2" value-key="value" label-key="label" mode="tags">
      <kv-option value="0" label="Rombolid"></kv-option>
      <kv-option value="1" label="Trapeze"></kv-option>
      <kv-option value="2" label="Polygon"></kv-option>
    </kv-select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: { value: "0", label: "IT" },
        value2: [{ value: "0", label: "Rombolid" }]
      };
    }
  };
</script>
<style>
  .kv-demo--select .kv-select {
    width: 250px;
    margin-right: 20px;
  }
</style>
```

:::

## 搜索过滤

:::snippet 设置 `filter` 为 `true` 默认根据文本内容自动过滤，`filter` 设置为函数自动过滤规则。

```html
<template>
  <div class="kv-demo--select">
    <kv-select v-model="value" filter>
      <kv-option value="0" label="Rombolid"></kv-option>
      <kv-option value="1" label="Trapeze"></kv-option>
      <kv-option value="2" label="Polygon"></kv-option>
    </kv-select>
    <kv-select v-model="value2" :filter="selfFilter">
      <kv-option value="0" label="Rombolid"></kv-option>
      <kv-option value="1" label="Trapeze"></kv-option>
      <kv-option value="2" label="Polygon"></kv-option>
    </kv-select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: "",
        value2: "",
        selfFilter(text, kvOption) {
          return kvOption.value == 1;
        }
      };
    }
  };
</script>
<style>
  .kv-demo--select .kv-select {
    width: 250px;
    margin-right: 20px;
  }
</style>
```

:::

## 远程过滤

:::snippet 设置 `remote-filter` 返回一个 `Promise` 设置 `kv-option` 选项，初始化设置选中项可以使用 `value-key` 与 `labelkey`来绑定复杂的对象。

```html
<template>
  <div class="kv-demo--select">
    <kv-select v-model="value" :remote-filter="remoteFilter">
      <kv-option
        v-for="option in optionList"
        :value="option.value"
        :label="option.label"
      ></kv-option>
    </kv-select>
    <kv-select
      v-model="value2"
      :remote-filter="remoteFilter"
      value-key="value"
      label-key="label"
    >
      <kv-option
        v-for="option in optionList"
        :value="option.value"
        :label="option.label"
      ></kv-option>
    </kv-select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: "",
        value2: { value: 1, label: "value1" },
        dataList: [
          { id: 1, value: "value1" },
          { id: 2, value: "value2" },
          { id: 3, value: "value3" },
          { id: 4, value: "value4" },
          { id: 5, value: "value5" },
          { id: 6, value: "value6" },
          { id: 7, value: "value7" },
          { id: 8, value: "value8" },
          { id: 9, value: "value9" }
        ],
        optionList: []
      };
    },
    methods: {
      remoteFilter(text) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            let filterList = this.dataList.filter(m => {
              return m.value.toLowerCase().indexOf(text.toLowerCase()) > -1;
            });
            this.optionList = Array.from(filterList, m => {
              return { value: m.id, label: m.value };
            });
            resolve();
          }, 500);
        });
      }
    }
  };
</script>
<style>
  .kv-demo--select .kv-select {
    width: 250px;
    margin-right: 20px;
  }
</style>
```

:::

## KvSelect Attributes

| 参数          | 说明                                           | 类型             | 可选值        | 默认值 |
| ------------- | ---------------------------------------------- | ---------------- | ------------- | ------ |
| value         | 选中数据的值，v-model 绑定                     | —                | —             | —      |
| disabled      | 是否禁用                                       | boolean          | —             | false  |
| placeholder   | 无数据占位符显示                               | string           | —             | 请选择 |
| mode          | 配置多选模式，字符串或者标签展示               | string           | multiple/tags | —      |
| filter        | 设置为 true 默认搜索，设置 function 自定义过滤 | boolean/function | —             | false  |
| remote-filter | 远程数据过滤返回 Promise                       | function         | —             | —      |
| value-key     | 对象或者对象数组数据初始化绑定赋值 value 字段  | string           | —             | —      |
| label-key     | 对象或者对象数组数据初始化绑定赋值 label 字段  | string           | —             | —      |

## KvSelect Slots

| 名称 | 说明       |
| ---- | ---------- |
| —    | 下拉框选项 |
| icon | 下拉图标   |

## KvOption Attributes

| 参数     | 说明                                      | 类型          | 可选值 | 默认值 |
| -------- | ----------------------------------------- | ------------- | ------ | ------ |
| value    | 选项的值                                  | string/number | —      | —      |
| label    | 选项的标签，若不设置则默认与 `value` 相同 | string/number | —      | —      |
| disabled | 是否禁用                                  | boolean       | —      | false  |

## KvOption Slots

| 名称 | 说明     |
| ---- | -------- |
| —    | 选项内容 |

## KvOptionGroup Slots

| 名称 | 说明               |
| ---- | ------------------ |
| —    | 分组下的下拉框选项 |
