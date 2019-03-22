# 列配置

## 树形表格

:::demo 列的`type`的类型为`tree`该列会生成树结构，树结构数据包含`children`的格式

```html
<template>
  <kv-datagrid :columns="columns" :data="data"></kv-datagrid>
</template>
<script>
  export default {
    data() {
      return {
        columns: [
          { key: "name", title: "姓名", type: "tree" },
          { key: "age", title: "年龄" },
          { key: "address", title: "地址" }
        ],
        data: [
          {
            key: 1,
            name: "John Brown sr.",
            age: 60,
            address: "New York No. 1 Lake Park",
            children: [
              {
                key: 11,
                name: "John Brown",
                age: 42,
                address: "New York No. 2 Lake Park"
              },
              {
                key: 12,
                name: "John Brown jr.",
                age: 30,
                address: "New York No. 3 Lake Park",
                children: [
                  {
                    key: 121,
                    name: "Jimmy Brown",
                    age: 16,
                    address: "New York No. 3 Lake Park"
                  }
                ]
              },
              {
                key: 13,
                name: "Jim Green sr.",
                age: 72,
                address: "London No. 1 Lake Park",
                children: [
                  {
                    key: 131,
                    name: "Jim Green",
                    age: 42,
                    address: "London No. 2 Lake Park",
                    children: [
                      {
                        key: 1311,
                        name: "Jim Green jr.",
                        age: 25,
                        address: "London No. 3 Lake Park"
                      },
                      {
                        key: 1312,
                        name: "Jimmy Green sr.",
                        age: 18,
                        address: "London No. 4 Lake Park"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: 2,
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

## 复选框

:::demo 列的`type`的类型为`checkbox`会自动生成复选框

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

:::demo 列的`type`的类型为`index`会自动生成序号

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
