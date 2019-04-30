# Select 下拉框

## 基础用法

:::snippet `v-model` 的值为当前被选中的 `kv-option` 的 `value` 属性值。

```html
<template>
  <div>
    <kv-select v-model="value" placeholder="请选择">
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

:::snippet 通过 `disabled` 属性禁用下拉框。

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
