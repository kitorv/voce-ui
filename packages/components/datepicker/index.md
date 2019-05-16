# KvDatePicker 时间框

## 基本功能

:::snippet 基本的日期选择,快捷菜单配置 `shortcuts` 属性值 `[{value,text}]` ，其中`value`可以使字符串、时间、方法。

```html
<template>
  <div>
    <div class="kv-demo--datepicker">
      <div class="kv-demo--datepicker-block">
        <div class="kv-demo-datepicker-desc">基本日期</div>
        <kv-date-picker v-model="value"></kv-date-picker>
      </div>
      <div class="kv-demo--datepicker-block">
        <div class="kv-demo-datepicker-desc">快捷选项</div>
        <kv-date-picker
          v-model="value2"
          :shortcuts="shortcuts"
        ></kv-date-picker>
      </div>
    </div>
    <!-- 
    <kv-date-picker v-model="value" type="month"></kv-date-picker>
    <kv-date-picker v-model="value" type="year"></kv-date-picker>
    <kv-date-picker v-model="value" type="datetime"></kv-date-picker>
    <kv-date-picker v-model="value" type="time"></kv-date-picker> -->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: "2019-05-16",
        value2: "2019-05-16",
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
  .kv-demo--datepicker {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
  }

  .kv-demo--datepicker .kv-date-picker {
    width: 220px;
  }

  .kv-demo--datepicker-block {
    padding: 30px 0;
    text-align: center;
    border-right: 1px solid #eff2f6;
    flex: 1;
  }

  .kv-demo--datepicker-block:last-child {
    border-right: none;
  }

  .kv-demo-datepicker-desc {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>
```

:::

:::snippet

```html
<template>
  <div>
    <!-- <kv-date-picker v-model="value"> </kv-date-picker>
    <kv-date-picker v-model="value" type="month"></kv-date-picker>
    <kv-date-picker v-model="value" type="year"></kv-date-picker>
    <kv-date-picker v-model="value" type="datetime"></kv-date-picker>
    <kv-date-picker v-model="value" type="time"></kv-date-picker> -->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: "2019-05-16"
      };
    }
  };
</script>
```

:::
