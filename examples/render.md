## 单元格格式化

:::demo 设置`formatter`属性返回格式化渲染内容，支持`jsx`和组件渲染

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
            formatter(h, { data }) {
              return <div class="kv-datagrid-demo--tag">{data.name}</div>;
            }
          },
          { key: "age", title: "年龄" },
          { key: "address", title: "地址" },
          {
            key: "",
            title: "操作",
            formatter(h, { data }) {
              return (
                <div>
                  <div class="kv-datagrid-demo--button">编辑</div>
                  <div class="kv-datagrid-demo--button danger">删除</div>
                </div>
              );
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

## 展开行

:::demo 设置列的`type`属性为`expandsion`该列就会生成展开折叠操作图标，设置`slot`的`expansion`展开行的内容，如果需要自定义展开内容布局的样式设置`expansion-{class}`就会在该行追加`kv-datagrid--body-row-expansion-{class}`

```html
<template>
  <kv-datagrid :columns="columns" :data="data">
    <div slot="expansion" slot-scope="{data}" style="height:60px;padding:20px">
      <div>姓名：{{data.name}}</div>
      <div>年龄：{{data.age}}</div>
      <div>地址：{{data.address}}</div>
    </div>
  </kv-datagrid>
</template>
<script>
  export default {
    data() {
      return {
        columns: [
          { type: "expansion" },
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

## 自定义表头

:::demo 设置`columnFormatter`进行表头的自定义渲染`

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
          {
            key: "address",
            title: "地址",
            columnFormatter: h => (
              <input
                placeholder="自定义格式化文本框"
                class="kv-datagrid-demo--input"
              />
            )
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

## 单元格合并

:::demo 设置`cellSpan`属性，该属性为一个函数，返回`{rowSpan,colSpan}`返回的值对应占位行和列，返回的属性为 0 或者返回其他格式该单元格隐藏

```html
<template>
  <kv-datagrid
    :columns="columns"
    :data="data"
    :cell-span="cellSpan"
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
    },
    methods: {
      cellSpan({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return { rowspan: 2, colspan: 1 };
          } else {
            return { rowspan: 0, colspan: 0 };
          }
        }
        if (columnIndex === 1 && rowIndex % 2 === 0) {
          return { rowspan: 1, colspan: 2 };
        }
        if (columnIndex === 2 && rowIndex % 2 === 0) {
          return { rowspan: 0, colspan: 0 };
        }
      }
    }
  };
</script>
```

:::
