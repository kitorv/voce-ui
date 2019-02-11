<template>
  <div id="app">
    <h2>基本用法</h2>
    <v-base></v-base>
    <h2>复选框</h2>
    <v-checkbox></v-checkbox>
  </div>
</template>

<script>
import Vue from "vue";
import "../packages/style/datagird.scss";
import VDatagrid from "../packages/components/datagrid";
import VBase from "./views/basic";
import VCheckbox from "./views/checkbox";

Vue.component("v-datagrid", VDatagrid);

export default {
  name: "app",
  components: { VBase, VCheckbox }
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
  padding: 20px 50px;
  box-sizing: border-box;
}
</style>
