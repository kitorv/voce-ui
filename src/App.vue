<template>
  <div id="app">
    <v-data-grid :columns="columns"></v-data-grid>
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
        { key: "id", title: "id标识" },
        {
          title: "用户信息",
          children: [
            {
              title: "基本信息",
              children: [
                { key: "name", title: "姓名" },
                { key: "age", title: "年龄" },
                { key: "work", title: "工作" }
              ]
            }
          ]
        },
        {
          title: "其他信息",
          children: [
            { key: "street", title: "街道" },
            {
              title: "详细地址",
              children: [
                { key: "building", title: "位置" },
                { key: "doorNo", title: "门牌号" }
              ]
            }
          ]
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
}
</style>