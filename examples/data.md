# 数据处理

## 分页查询

:::demo

```html
<template>
  <kv-datagrid
    :columns="columns"
    :data="data"
    :pagination="pagination"
    :load-data="loadData"
  ></kv-datagrid>
</template>
<script>
  export default {
    data() {
      return {
        columns: [
          { key: "no", title: "序号" },
          { key: "name", title: "姓名", sort: true },
          { key: "age", title: "年龄", sort: true },
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

## 行编辑

:::demo 列设置`editor`编辑方式，设置行的`edit`属性来开启或者关闭行编辑，行编辑开始单元格会加上`kv-datagrid--cell-edit`类样式，可以调整编辑内容的组件样式

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
            editor(h, { data }) {
              return <input v-model={data.name} />;
            }
          },
          {
            key: "age",
            title: "年龄",
            editor(h, { data }) {
              return <input v-model={data.age} />;
            }
          },
          {
            key: "address",
            title: "地址",
            editor(h, { data }) {
              return <input v-model={data.address} />;
            }
          },
          {
            key: "",
            title: "编辑",
            formatter(h, { row }) {
              return (
                <div>
                  <a
                    class="kv-datagrid-demo--link"
                    on-click={() => {
                      row.eidtable = true;
                    }}
                  >
                    编辑
                  </a>
                  <a
                    class="kv-datagrid-demo--link"
                    on-click={() => {
                      row.eidtable = false;
                    }}
                  >
                    保存
                  </a>
                </div>
              );
            }
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

## 单元格编辑

:::demo 列设置`editor`编辑方式，设置表格的`eidtable`的属性为`true`开启单元格编辑

```html
<template>
  <kv-datagrid :columns="columns" :data="data" :editable="true"></kv-datagrid>
</template>
<script>
  export default {
    data() {
      return {
        columns: [
          {
            key: "name",
            title: "姓名",
            editor(h, { data }) {
              return <input v-model={data.name} />;
            }
          },
          {
            key: "age",
            title: "年龄",
            editor(h, { data }) {
              return <input v-model={data.age} />;
            }
          },
          {
            key: "address",
            title: "地址",
            editor(h, { data }) {
              return <input v-model={data.address} />;
            }
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

## 行选中

:::demo 设置`select`属性为`true`单击自动选中该行,

```html
<template>
  <kv-datagrid :columns="columns" :data="data" :select="true"></kv-datagrid>
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
  <kv-datagrid :columns="columns" :data="data"></kv-datagrid>
</template>
<script>
  export default {
    data() {
      return {
        columns: [
          { key: "name", title: "姓名", sort: true },
          { key: "age", title: "年龄", sort: true },
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
  <kv-datagrid :columns="columns" :data="data" :header="header"></kv-datagrid>
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
  <kv-datagrid :columns="columns" :data="data" :footer="footer"></kv-datagrid>
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
