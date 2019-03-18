## 格式化

:::demo

```html
<template>
  <kv-datagrid :columns="columns" :data="data"></kv-datagrid>
</template>
<script>
  export default {
    data() {
      return {
        columns: [
          {
            key: "name",
            title: "姓名",
            columnFormatter(h, { column }) {
              return `[${column.title}]`;
            }
          },
          {
            key: "age",
            title: "年龄",
            columnFormatter(h, { column }) {
              return `[${column.title}]`;
            },
            formatter(h, { row }) {
              return row.age > 18 ? "成年" : "未成年";
            }
          },
          {
            key: "address",
            title: "地址",
            columnFormatter(h, { column }) {
              return `[${column.title}]`;
            }
          }
        ],
        data: [
          {
            key: "1",
            name: "John Brown",
            age: 16,
            address: "New York No. 1 Lake Park"
          },
          {
            key: "2",
            name: "Jim Green",
            age: 18,
            address: "London No. 1 Lake Park"
          },
          {
            key: "3",
            name: "Joe Black",
            age: 30,
            address: "Sidney No. 1 Lake Park"
          }
        ]
      };
    }
  };
</script>
```

:::
