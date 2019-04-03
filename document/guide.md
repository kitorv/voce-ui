# 快速上手

## 安装

```bash
npm i kv-table -s
```

## 引入

```javascript
import Vue from "vue";
import KvTable from "kv-table";
import "kv-table/index.css";
import App from "./App.vue";

Vue.use(KvTable);

new Vue({
  el: "#app",
  render: h => h(App)
});
```

## 使用

```html
<template>
  <kv-table :columns="columns" :data="data"></kv-table>
</template>
<script>
  export default {
    data() {
      return {
        columns: [
          { key: "name", title: "姓名" },
          { key: "age", title: "年龄" },
          { key: "address", title: "地址" }
        ],
        data: [
          {
            key: "1",
            name: "John Brown",
            age: 32,
            address: "New York No. 1 Lake Park"
          },
          {
            key: "2",
            name: "Jim Green",
            age: 42,
            address: "London No. 1 Lake Park"
          },
          {
            key: "3",
            name: "Joe Black",
            age: 32,
            address: "Sidney No. 1 Lake Park"
          }
        ]
      };
    }
  };
</script>
```
