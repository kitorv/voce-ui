## 单元格格式化

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

:::demo

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
