# Select 下拉框

:::snippet

```html
<template>
  <div>
    <kv-select
      v-model="value"
      placeholder="请选择"
      :remote-filter="routeFilter"
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
      routeFilter(text) {
        let filterList = this.dataList.filter(m => {
          return m.value.toLowerCase().indexOf(text.toLowerCase()) > -1;
        });
        this.optionList = Array.from(filterList, m => {
          return { value: m.id, label: m.value };
        });
      }
    }
  };
</script>
```

:::

:::snippet

```html
<template>
  <div>
    <kv-select v-model="value" placeholder="请选择" :filter="true">
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
        value: "0"
      };
    }
  };
</script>
```

:::

## 基础用法

:::snippet `v-model` 的值为当前被选中的 `kv-option` 的 `value` 属性值。

```html
<template>
  <div>
    <kv-select v-model="value" placeholder="请选择">
      <!-- <kv-option value="0" label="IT"></kv-option>
      <kv-option value="1" label="Blade Runner"></kv-option>
      <kv-option value="2" label="Thor Ragnarok"></kv-option> -->
    </kv-select>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: "0"
      };
    }
  };
</script>
```

:::

## 禁用下拉框

:::snippet 通过 `disabled` 属性禁用下拉框。

```html
<template>
  <div>
    <kv-select v-model="value" placeholder="请选择" disabled>
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
```

:::

## 禁用选项

:::snippet 通过 `kv-option` 的 `disabled` 属性禁用选项。

```html
<template>
  <div>
    <kv-select v-model="value" placeholder="请选择">
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
```

:::

## 多选模式

:::snippet 设置 mode 为 mutiple 或者 tags 选中多个选项。

```html
<template>
  <div>
    <kv-select v-model="values" placeholder="请选择" mode="multiple">
      <kv-option value="0" label="IT"></kv-option>
      <kv-option value="1" label="Blade Runner"></kv-option>
      <kv-option value="2" label="Thor Ragnarok"></kv-option>
    </kv-select>
    <br />
    <kv-select v-model="tags" placeholder="请选择" mode="tags">
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
```

:::

## 自定义模板

:::snippet 设置 mode 为 mutiple 或者 tags 选中多个选项。

```html
<template>
  <div>
    <kv-select v-model="value" placeholder="请选择">
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
```

:::

## 选项分组

:::snippet 通过 `kv-option` 的 `disabled` 属性禁用选项。

```html
<template>
  <div>
    <kv-select v-model="value" placeholder="请选择" :filter="true">
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
```

:::

## 搜索过滤

:::snippet

```html
<template>
  <div>
    <kv-select v-model="value" placeholder="请选择">
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
        value: ""
      };
    }
  };
</script>
```

:::
