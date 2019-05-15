# KvDatePicker 时间框

## 基本功能

:::snippet

```html
<template>
  <div>
    <!-- <kv-date-picker v-model="value"> </kv-date-picker>
    <kv-date-picker v-model="value" type="month"></kv-date-picker>
    <kv-date-picker v-model="value" type="year"></kv-date-picker>
    <kv-date-picker v-model="value" type="datetime"></kv-date-picker> -->
    <kv-date-picker v-model="value" type="time"></kv-date-picker>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: "00:00:00"
      };
    }
  };
</script>
```

:::
