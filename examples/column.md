# 列配置

## 复选框

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
          { type: "checkbox" },
          { key: "name", title: "姓名" },
          { key: "age", title: "年龄" },
          { key: "address", title: "地址" }
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

## 行号

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
          { type: "index" },
          { key: "name", title: "姓名" },
          { key: "age", title: "年龄" },
          { key: "address", title: "地址" }
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

## 固定列

:::demo

```html
<template>
  <div style="max-width:1980px;">
    <kv-datagrid :columns="columns" :data="data"></kv-datagrid>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        columns: [
          { key: "name", title: "姓名", width: 120, fixed: "left" },
          { key: "age", title: "年龄", width: 80, fixed: "left" },
          { key: "weight", title: "体重", width: 80, fixed: "left" },
          { key: "height", title: "身高", width: 200 },
          { key: "value1", title: "指标1", width: 200 },
          { key: "value2", title: "指标2", width: 200 },
          { key: "value3", title: "指标3", width: 200 },
          { key: "value4", title: "指标4", width: 200 },
          { key: "value5", title: "指标5", width: 200 },
          { key: "status", title: "健康状况", width: 200, fixed: "right" }
        ],
        data: [
          {
            name: "tom",
            age: 18,
            weight: 60,
            height: 180,
            value1: 1,
            value2: 2,
            value3: 3,
            value4: 4,
            value5: 5,
            status: "良好"
          },
          {
            name: "tom",
            age: 18,
            weight: 60,
            height: 180,
            value1: 1,
            value2: 2,
            value3: 3,
            value4: 4,
            value5: 5,
            status: "良好"
          },
          {
            name: "tom",
            age: 18,
            weight: 60,
            height: 180,
            value1: 1,
            value2: 2,
            value3: 3,
            value4: 4,
            value5: 5,
            status: "良好"
          },
          {
            name: "tom",
            age: 18,
            weight: 60,
            height: 180,
            value1: 1,
            value2: 2,
            value3: 3,
            value4: 4,
            value5: 5,
            status: "良好"
          },
          {
            name: "tom",
            age: 18,
            weight: 60,
            height: 180,
            value1: 1,
            value2: 2,
            value3: 3,
            value4: 4,
            value5: 5,
            status: "良好"
          },
          {
            name: "tom",
            age: 18,
            weight: 60,
            height: 180,
            value1: 1,
            value2: 2,
            value3: 3,
            value4: 4,
            value5: 5,
            status: "良好"
          }
        ]
      };
    }
  };
</script>
```

:::

## 对其格式

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
            headerAlign: "center",
            align: "center"
          },
          { key: "age", title: "年龄", headerAlign: "center", align: "center" },
          {
            key: "address",
            title: "地址",
            headerAlign: "center",
            align: "center"
          }
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
