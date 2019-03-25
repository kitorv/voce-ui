# 基本用法

## 简单表格

:::demo 基础的表格数据展示

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

:::demo `column`设置`children`属性嵌套`column`配置来进行表头分组

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

:::demo 无数据会自动生成占位符显示

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

## 数据加载中

:::demo 设置属性`loading`显示加载中的状态

```html
<template>
  <kv-datagrid :columns="columns" :data="data" :loading="true"></kv-datagrid>
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
