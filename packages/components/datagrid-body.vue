<template>
  <table class="vk-datagrid--header-table" cellspacing="0" cellpadding="0" border="0">
    <v-datagrid-colgroup :columns="leafColumns"></v-datagrid-colgroup>
    <tr v-for="(row, index) in dataSource" :key="index">
      <td v-for="(column, index) in leafColumns" :key="index">{{row[column.key]}}</td>
    </tr>
  </table>
</template>

<script>
import VDatagridColgroup from "./datagrid-colgroup";

export default {
  components: { VDatagridColgroup },
  data() {
    return {};
  },
  props: {
    leafColumns: Array,
    dataSource: Array
  },
  mounted() {
    console.log(this.dataSource);
  }
};
</script>

<style lang="scss" scoped>
.vk-datagrid--header-table {
  border-collapse: separate;
  width: 100%;
  table-layout: fixed;

  td {
    min-width: 0;
    box-sizing: border-box;
    vertical-align: middle;
    position: relative;
    text-align: left;
    border: 1px solid #000;
    word-wrap: break-word;
    word-break: break-all;
  }
}
</style>

