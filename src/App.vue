<template>
  <div id="app">
    <!-- <h2>基本用法</h2>
    <v-base></v-base>
    <h2>无边框</h2>
    <v-border></v-border>
    <h2>斑马线</h2>
    <v-striped></v-striped>
    <h2>无数据</h2>
    <v-empty></v-empty>
    <h2>复选框</h2>
    <v-checkbox></v-checkbox>
    <h3>固定表头</h3> -->
    <v-height></v-height>
  </div>
</template>

<script>
import Vue from "vue";
import "../packages/style/datagird.scss";
import VDatagrid from "../packages/components/datagrid";
import VBase from "./views/basic";
import VBorder from "./views/border";
import VStriped from "./views/striped";
import VEmpty from "./views/empty";
import VCheckbox from "./views/checkbox";
import VHeight from "./views/height";

Vue.component("v-datagrid", VDatagrid);

export default {
  name: "app",
  components: { VBase, VBorder, VStriped, VEmpty, VCheckbox, VHeight }
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
  padding: 20px 50px 200px 50px;
  box-sizing: border-box;
  overflow: auto;
}
</style>
