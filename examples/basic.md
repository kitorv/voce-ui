# 基本用法

## 简单表格

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

:::

## 表头分组

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
          { key: "name", title: "姓名" },
          {
            title: "其他信息",
            children: [
              { key: "age", title: "年龄" },
              {
                title: "地址",
                children: [
                  { key: "street", title: "街道" },
                  { key: "no", title: "详细地址" }
                ]
              }
            ]
          },
          {
            title: "公司",
            children: [
              { key: "company", title: "名称" },
              { key: "companyAddress", title: "地址" }
            ]
          },
          { key: "gender", title: "性别" }
        ],
        data: [
          {
            key: "1",
            name: "John Brown",
            age: 32,
            street: "New York",
            no: "No. 1 Lake Park",
            company: "ktv",
            companyAddress: "china xiamen",
            gender: "M"
          },
          {
            key: "1",
            name: "John Brown",
            age: 32,
            street: "New York",
            no: "No. 1 Lake Park",
            company: "ktv",
            companyAddress: "china xiamen",
            gender: "M"
          },
          {
            key: "1",
            name: "John Brown",
            age: 32,
            street: "New York",
            no: "No. 1 Lake Park",
            company: "ktv",
            companyAddress: "china xiamen",
            gender: "M"
          },
          {
            key: "1",
            name: "John Brown",
            age: 32,
            street: "New York",
            no: "No. 1 Lake Park",
            company: "ktv",
            companyAddress: "china xiamen",
            gender: "M"
          },
          {
            key: "1",
            name: "John Brown",
            age: 32,
            street: "New York",
            no: "No. 1 Lake Park",
            company: "ktv",
            companyAddress: "china xiamen",
            gender: "M"
          }
        ]
      };
    }
  };
</script>
```

:::

## 无数据

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
          { key: "name", title: "姓名" },
          { key: "age", title: "年龄" },
          { key: "address", title: "地址" }
        ],
        data: []
      };
    }
  };
</script>
```

:::
