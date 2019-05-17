# KvDatePicker 时间框

## 区间选择

:::snippet 通过 type 设置年、月、日、周、时间的对应区间。

```html
<template>
  <div>
    <div class="kv-demo--datepicker">
      <kv-date-picker
        v-model="value"
        type="yearrange"
        placeholder="请选择年份"
      ></kv-date-picker>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: [],
        value2: "",
        value3: "",
        value4: "",
        value5: ""
      };
    }
  };
</script>
<style>
  .kv-demo--datepicker {
    margin-bottom: 20px;
  }

  .kv-demo--datepicker:last-child {
    margin-bottom: 0;
  }

  .kv-demo--datepicker .kv-date-picker {
    width: 220px;
    padding-right: 20px;
  }
</style>
```

:::

---

## 基本功能

:::snippet 基本的日期选择,快捷菜单配置 `shortcuts` 属性值 `[{value,text}]` ，其中`value`可以使字符串、时间、方法。

```html
<template>
  <div>
    <div class="kv-demo--datepicker">
      <!-- <kv-date-picker v-model="value"></kv-date-picker>
      <kv-date-picker
        v-model="value2"
        :shortcuts="shortcuts"
        placeholder="快捷选项"
      ></kv-date-picker> -->
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: "",
        value2: "",
        shortcuts: [
          { value: new Date(), text: "今天" },
          {
            value() {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              return date;
            },
            text: "昨天"
          },
          {
            value() {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              return date;
            },
            text: "一周前"
          }
        ]
      };
    }
  };
</script>
<style>
  .kv-demo--datepicker .kv-date-picker {
    width: 220px;
    padding-right: 20px;
  }
</style>
```

:::

## 日期单位

:::snippet 日期单位可以通过 type 设置年、月、日、周、时间。

```html
<template>
  <div>
    <!-- <div class="kv-demo--datepicker">
      <kv-date-picker
        v-model="value"
        type="year"
        placeholder="请选择年份"
      ></kv-date-picker>
      <kv-date-picker
        v-model="value2"
        type="month"
        placeholder="请选择月份"
      ></kv-date-picker>
      <kv-date-picker
        v-model="value3"
        type="date"
        placeholder="请选择日期"
      ></kv-date-picker>
    </div>
    <div class="kv-demo--datepicker">
      <kv-date-picker
        v-model="value4"
        type="datetime"
        placeholder="请选择日期时间"
      ></kv-date-picker>
      <kv-date-picker
        v-model="value5"
        type="time"
        placeholder="请选择时间"
      ></kv-date-picker> -->
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: "",
        value2: "",
        value3: "",
        value4: "",
        value5: ""
      };
    }
  };
</script>
<style>
  .kv-demo--datepicker {
    margin-bottom: 20px;
  }

  .kv-demo--datepicker:last-child {
    margin-bottom: 0;
  }

  .kv-demo--datepicker .kv-date-picker {
    width: 220px;
    padding-right: 20px;
  }
</style>
```

:::
