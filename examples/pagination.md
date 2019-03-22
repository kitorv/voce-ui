# 分页查询

## 基本分页

:::demo

```html
<template>
  <kv-datagrid
    :columns="columns"
    :data="data"
    :pagination="true"
    :load-data="loadData"
  ></kv-datagrid>
</template>
<script>
  export default {
    data() {
      return {
        columns: [
          { key: "no", title: "序号" },
          { key: "name", title: "姓名" },
          { key: "age", title: "年龄" },
          { key: "address", title: "地址" }
        ],
        data: []
      };
    },
    methods: {
      loadData({ pageIndex, pageSize }) {
        let rows = [];
        for (let i = 0; i < pageSize; i++) {
          let no = (pageIndex - 1) * pageSize + i + 1;
          rows.push({
            no,
            name: `name-${no}`,
            age: no,
            address: "address"
          });
        }
        return { total: 1000, rows };
      }
    }
  };
</script>
```

:::
