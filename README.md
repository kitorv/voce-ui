# KvTable

## 介绍

基于 vue 2.x 的表格组件，易于扩展，简单使用，大部分功能直接设置数据动态响应无需配置过多属性和事件

行数据选中，展开，折叠，隐藏，显示等都可以通过获取`Row`进行直接操作，行属性参照 Api

Api+Example：[http://kitorv.github.io/kv-table](http://kitorv.github.io/kv-table)

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
