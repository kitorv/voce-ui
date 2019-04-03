# 数据处理

## 分页查询

:::demo

```html
<template>
  <kv-table
    :columns="columns"
    :data="data"
    :pagination="pagination"
    :load-data="loadData"
  ></kv-table>
</template>
<script>
  export default {
    data() {
      return {
        columns: [
          { key: "no", title: "序号" },
          { key: "name", title: "姓名", sortable: true },
          { key: "age", title: "年龄", sortable: true },
          { key: "address", title: "地址" }
        ],
        data: [],
        pagination: {
          pageIndex: 1
        }
      };
    },
    methods: {
      loadData({ pageIndex, pageSize, orderType, orderKey }, success) {
        setTimeout(() => {
          let rows = [];
          for (let i = 0; i < pageSize; i++) {
            let no = (pageIndex - 1) * pageSize + i + 1;
            rows.push({
              no,
              name: `name-${no}`,
              age: no,
              address: `${orderType}-${orderKey}`
            });
          }
          success({ total: 1000, rows });
        }, 2000);
      }
    }
  };
</script>
```

:::

## 行选中

:::demo 设置`select`属性为`true`单击自动选中该行,

```html
<template>
  <kv-table :columns="columns" :data="data" :select="true"></kv-table>
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

## 排序

:::demo 设置列的`sort`属性为`true`当前列可进行排序

```html
<template>
  <kv-table :columns="columns" :data="data"></kv-table>
</template>
<script>
  export default {
    data() {
      return {
        columns: [
          { key: "name", title: "姓名", sortable: true },
          { key: "age", title: "年龄", sortable: true },
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

## 表头数据

:::demo 设置`header`进行表头数据渲染，可以设置列的`headerFormatter`进行自定义渲染

```html
<template>
  <kv-table :columns="columns" :data="data" :header="header"></kv-table>
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
        header: [
          {
            key: "0",
            name: "合计",
            age: 106,
            address: "--"
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

## 表尾数据

:::demo 设置`footer`进行表尾数据渲染，可以设置列的`footerFormatter`进行自定义渲染

```html
<template>
  <kv-table :columns="columns" :data="data" :footer="footer"></kv-table>
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
        footer: [
          {
            key: "0",
            name: "合计",
            age: 106,
            address: "--"
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
