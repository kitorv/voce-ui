# 样式配置

## 行类样式

:::demo

```html
<template>
  <kv-datagrid
    :columns="columns"
    :data="data"
    :row-class="rowClass"
  ></kv-datagrid>
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
          },
          {
            key: "4",
            name: "Tom Mack",
            age: 32,
            address: "Beijing No. 1 Lake Park"
          },
          {
            key: "5",
            name: "Chery Nithce",
            age: 32,
            address: "Maliya No. 1 Lake Park"
          },
          {
            key: "6",
            name: "Merry Tcke",
            age: 32,
            address: "Yelnue No. 1 Lake Park"
          }
        ],
        rowClass({ index }) {
          if (index == 1) return "kv-datagrid-demo--row-success";
          if (index == 3) return "kv-datagrid-demo--row-error";
        }
      };
    }
  };
</script>
<style>
  tr.kv-datagrid-demo--row-success {
    > td {
      background-color: #ebf9eb;
      color: #46c93a;
    }
  }

  tr.kv-datagrid-demo--row-error {
    > td {
      background-color: #fcecee;
      color: #ff4757;
    }
  }
</style>
```

:::

## 单元格类样式

:::demo

```html
<template>
  <kv-datagrid
    :columns="columns"
    :data="data"
    :cell-class="cellClass"
  ></kv-datagrid>
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
          },
          {
            key: "4",
            name: "Tom Mack",
            age: 32,
            address: "Beijing No. 1 Lake Park"
          },
          {
            key: "5",
            name: "Chery Nithce",
            age: 32,
            address: "Maliya No. 1 Lake Park"
          },
          {
            key: "6",
            name: "Merry Tcke",
            age: 32,
            address: "Yelnue No. 1 Lake Park"
          }
        ],
        cellClass({ index, column }) {
          if (index == 1 && column.key == "name") {
            return "kv-datagrid-demo--cell-success";
          }
          if (index == 3 && column.key == "age") {
            return "kv-datagrid-demo--cell-error";
          }
        }
      };
    }
  };
</script>
<style>
  td.kv-datagrid-demo--cell-success {
    background-color: #ebf9eb !important;
    color: #46c93a;
  }
  td.kv-datagrid-demo--cell-error {
    background-color: #fcecee !important;
    color: #ff4757;
  }
</style>
```

:::
