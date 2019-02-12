<template>
  <v-datagrid border
              :columns="columns"
              :height="350"
              :footer="footer"
              :data-source="dataSource"></v-datagrid>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { type: "checkbox", fixed: "left", width: 36 },
        { key: "id", title: "id标识", fixed: "left", width: 100 },
        {
          title: "用户信息",
          children: [
            { key: "name", title: "姓名", width: 280 },
            { key: "age", title: "年龄", width: 100 },
            { key: "work", title: "工作", width: 100 }
          ]
        },
        {
          title: "地址",
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
        },
        {
          title: "指标",
          children: [
            { key: "target1", title: "指标1", width: 100 },
            { key: "target2", title: "指标2", width: 100 },
            { key: "target3", title: "指标3", width: 100 },
            { key: "target4", title: "指标4", width: 100 }
          ]
        },
        { key: "number0", title: "数值", fixed: "right", width: 100 },
        { key: "number1", title: "数值1", fixed: "right", width: 100 },
        { key: "number2", title: "数值2", fixed: "right", width: 100 },
        { key: "number3", title: "数值3", fixed: "right", width: 100 }
      ],
      footer: [{ id: "100", name: "--", age: 1000 }],
      dataSource: [
        {
          id: 1,
          name: "张三",
          age: 20,
          work: "程序员",
          street: "软件园二期",
          building: "14#",
          doorNo: "1024",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 2,
          name: "李四",
          age: 28,
          work: "销售",
          street: "湖里街道",
          building: "20#",
          doorNo: "3001",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 3,
          name: "王五",
          age: 35,
          work: "采购",
          street: "集美街道",
          building: "65#",
          doorNo: "1001",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 1,
          name: "张三",
          age: 20,
          work: "程序员",
          street: "软件园二期",
          building: "14#",
          doorNo: "1024",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 2,
          name: "李四",
          age: 28,
          work: "销售",
          street: "湖里街道",
          building: "20#",
          doorNo: "3001",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 3,
          name: "王五",
          age: 35,
          work: "采购",
          street: "集美街道",
          building: "65#",
          doorNo: "1001",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 1,
          name: "张三",
          age: 20,
          work: "程序员",
          street: "软件园二期",
          building: "14#",
          doorNo: "1024",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 2,
          name: "李四",
          age: 28,
          work: "销售",
          street: "湖里街道",
          building: "20#",
          doorNo: "3001",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 3,
          name: "王五",
          age: 35,
          work: "采购",
          street: "集美街道",
          building: "65#",
          doorNo: "1001",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 1,
          name: "张三",
          age: 20,
          work: "程序员",
          street: "软件园二期",
          building: "14#",
          doorNo: "1024",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 2,
          name: "李四",
          age: 28,
          work: "销售",
          street: "湖里街道",
          building: "20#",
          doorNo: "3001",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 3,
          name: "王五",
          age: 35,
          work: "采购",
          street: "集美街道",
          building: "65#",
          doorNo: "1001",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 1,
          name: "张三",
          age: 20,
          work: "程序员",
          street: "软件园二期",
          building: "14#",
          doorNo: "1024",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 2,
          name: "李四",
          age: 28,
          work: "销售",
          street: "湖里街道",
          building: "20#",
          doorNo: "3001",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 3,
          name: "王五",
          age: 35,
          work: "采购",
          street: "集美街道",
          building: "65#",
          doorNo: "1001",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 1,
          name: "张三",
          age: 20,
          work: "程序员",
          street: "软件园二期",
          building: "14#",
          doorNo: "1024",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 2,
          name: "李四",
          age: 28,
          work: "销售",
          street: "湖里街道",
          building: "20#",
          doorNo: "3001",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 3,
          name: "王五",
          age: 35,
          work: "采购",
          street: "集美街道",
          building: "65#",
          doorNo: "1001",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 1,
          name: "张三",
          age: 20,
          work: "程序员",
          street: "软件园二期",
          building: "14#",
          doorNo: "1024",
          number1: 100,
          number2: 200,
          number3: 300
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
          doorNo: "1001",
          number1: 100,
          number2: 200,
          number3: 300
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
