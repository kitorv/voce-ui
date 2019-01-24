<template>
  <div id="app">
    <v-data-grid :columns="columns" :data-source="dataSource"></v-data-grid>
  </div>
</template>

<script>
import VDataGrid from "../packages/components/datagrid";

export default {
  name: "app",
  components: { VDataGrid },
  data() {
    return {
      columns: [
        { key: "id", title: "id标识", width: 100 },
        {
          title: "用户信息",
          children: [
            { key: "name", title: "姓名", width: 280 },
            { key: "age", title: "年龄", width: 100 },
            { key: "work", title: "工作", width: 100 }
          ]
        },
        {
          title: "其他信息",
          children: [
            { key: "street", title: "街道", width: 100 },
            {
              title: "详细地址",
              children: [
                { key: "building", title: "位置", width: 100 },
                { key: "doorNo", title: "门牌号", width: 100 }
              ]
            }
          ]
        }
      ],
      dataSource: [
        {
          id: 1,
          name: "张三",
          age: 20,
          work: "程序员",
          street: "软件园二期",
          building: "14#",
          doorNo: "1024"
        },
        {
          id: 2,
          name: "李四",
          age: 28,
          work: "销售",
          street: "湖里街道",
          building: "20#",
          doorNo: "3001"
        },
        {
          id: 3,
          name: "王五",
          age: 35,
          work: "采购",
          street: "集美街道",
          building: "65#",
          doorNo: "1001"
        },
        {
          id: 1,
          name: "张三",
          age: 20,
          work: "程序员",
          street: "软件园二期",
          building: "14#",
          doorNo: "1024"
        },
        {
          id: 2,
          name: "李四",
          age: 28,
          work: "销售",
          street: "湖里街道",
          building: "20#",
          doorNo: "3001"
        },
        {
          id: 3,
          name: "王五",
          age: 35,
          work: "采购",
          street: "集美街道",
          building: "65#",
          doorNo: "1001"
        },
        {
          id: 1,
          name: "张三",
          age: 20,
          work: "程序员",
          street: "软件园二期",
          building: "14#",
          doorNo: "1024"
        },
        {
          id: 2,
          name: "李四",
          age: 28,
          work: "销售",
          street: "湖里街道",
          building: "20#",
          doorNo: "3001"
        },
        {
          id: 3,
          name: "王五",
          age: 35,
          work: "采购",
          street: "集美街道",
          building: "65#",
          doorNo: "1001"
        },
        {
          id: 1,
          name: "张三",
          age: 20,
          work: "程序员",
          street: "软件园二期",
          building: "14#",
          doorNo: "1024"
        },
        {
          id: 2,
          name: "李四",
          age: 28,
          work: "销售",
          street: "湖里街道",
          building: "20#",
          doorNo: "3001"
        },
        {
          id: 3,
          name: "王五",
          age: 35,
          work: "采购",
          street: "集美街道",
          building: "65#",
          doorNo: "1001"
        },
        {
          id: 1,
          name: "张三",
          age: 20,
          work: "程序员",
          street: "软件园二期",
          building: "14#",
          doorNo: "1024"
        },
        {
          id: 2,
          name: "李四",
          age: 28,
          work: "销售",
          street: "湖里街道",
          building: "20#",
          doorNo: "3001"
        },
        {
          id: 3,
          name: "王五",
          age: 35,
          work: "采购",
          street: "集美街道",
          building: "65#",
          doorNo: "1001"
        },
        {
          id: 1,
          name: "张三",
          age: 20,
          work: "程序员",
          street: "软件园二期",
          building: "14#",
          doorNo: "1024"
        },
        {
          id: 2,
          name: "李四",
          age: 28,
          work: "销售",
          street: "湖里街道",
          building: "20#",
          doorNo: "3001"
        },
        {
          id: 3,
          name: "王五",
          age: 35,
          work: "采购",
          street: "集美街道",
          building: "65#",
          doorNo: "1001"
        },
        {
          id: 1,
          name: "张三",
          age: 20,
          work: "程序员",
          street: "软件园二期",
          building: "14#",
          doorNo: "1024"
        },
        {
          id: 2,
          name: "李四",
          age: 28,
          work: "销售",
          street: "湖里街道",
          building: "20#",
          doorNo: "3001"
        },
        {
          id: 3,
          name: "王五",
          age: 35,
          work: "采购",
          street: "集美街道",
          building: "65#",
          doorNo: "1001"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
}
#app {
  font-family: "Microsoft YaHei", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  padding: 50px;
  box-sizing: border-box;
}
</style>