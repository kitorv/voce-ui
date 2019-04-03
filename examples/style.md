# 样式配置

## 斑马线

:::demo 设置`stripe`的值为`true`创建带有斑马纹的表格

```html
<template>
  <kv-table :columns="columns" :data="data" stripe></kv-table>
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
            key: "3",
            name: "Tom Aini",
            age: 18,
            address: "Tokeyo No. 1 Lake Park"
          }
        ]
      };
    }
  };
</script>
```

:::

## 无边框

:::demo 默认自带边框，设置`border`的值为`false`不显示表格的边框

```html
<template>
  <kv-table :columns="columns" :data="data" :border="false"></kv-table>
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

## 隐藏表头

:::demo 设置`show-header`的值`false`则隐藏表头

```html
<template>
  <kv-table
    :columns="columns"
    :data="data"
    :show-header="false"
  ></kv-table>
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
            key: "3",
            name: "Tom Aini",
            age: 18,
            address: "Tokeyo No. 1 Lake Park"
          }
        ]
      };
    }
  };
</script>
```

:::

## 行类样式

:::demo 设置`row-class`属性，该属性为一个函数返回类样式名称，方法参数`{index,row,data}`

```html
<template>
  <kv-table
    :columns="columns"
    :data="data"
    :row-class="rowClass"
  ></kv-table>
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
          if (index == 1) return "kv-table-demo--row-success";
          if (index == 3) return "kv-table-demo--row-error";
        }
      };
    }
  };
</script>
<style>
  tr.kv-table-demo--row-success {
    > td {
      background-color: #ebf9eb;
      color: #46c93a;
    }
  }

  tr.kv-table-demo--row-error {
    > td {
      background-color: #fcecee;
      color: #ff4757;
    }
  }
</style>
```

:::

## 行样式

:::demo 设置`row-style`属性，该属性为一个函数返回样式对象键值对，方法参数`{index,row,data}`

```html
<template>
  <kv-table
    :columns="columns"
    :data="data"
    :row-style="rowStyle"
  ></kv-table>
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
        rowStyle({ index }) {
          if (index != 3) return;
          return {
            backgroundColor: "#e8f1ff",
            color: "#1f74ff"
          };
        }
      };
    }
  };
</script>
```

:::

## 单元格类样式

:::demo 设置`cell-class`属性，该属性为一个函数返回类样式名称，方法参数`{index,row,data,column}`

```html
<template>
  <kv-table
    :columns="columns"
    :data="data"
    :cell-class="cellClass"
  ></kv-table>
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
            return "kv-table-demo--cell-success";
          }
          if (index == 3 && column.key == "age") {
            return "kv-table-demo--cell-error";
          }
        }
      };
    }
  };
</script>
<style>
  td.kv-table-demo--cell-success {
    background-color: #ebf9eb !important;
    color: #46c93a;
  }
  td.kv-table-demo--cell-error {
    background-color: #fcecee !important;
    color: #ff4757;
  }
</style>
```

:::

## 单元格样式

:::demo 设置`cell-style`属性，该属性为一个函数返回样式对象键值对，方法参数`{index,row,data,column}`

```html
<template>
  <kv-table
    :columns="columns"
    :data="data"
    :cell-style="cellStyle"
  ></kv-table>
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
        cellStyle({ index, column }) {
          if (index % 2 != 0 || column.key != "name") return;
          return {
            backgroundColor: "#e8f1ff",
            color: "#1f74ff"
          };
        }
      };
    }
  };
</script>
```

:::

## 对齐格式

:::demo 设置`headerAlign`表头对其格式，设置`align`单元格对其格式，设置对其的类型参数有`leftt`,`center`,`right`

```html
<template>
  <kv-table :columns="columns" :data="data"></kv-table>
</template>
<script>
  export default {
    data() {
      return {
        columns: [
          {
            key: "name",
            title: "姓名",
            headerAlign: "left",
            align: "left"
          },
          { key: "age", title: "年龄", headerAlign: "center", align: "center" },
          {
            key: "address",
            title: "地址",
            headerAlign: "right",
            align: "right"
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
