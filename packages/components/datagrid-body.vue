<template>
  <table class="vk-datagrid--body-table" cellspacing="0" cellpadding="0" border="0">
    <colgroup is="d-colgroup" :leaf-columns="leafColumns"></colgroup>
    <tr v-for="(row, index) in dataSource" :key="index">
      <td v-for="(column, index) in leafColumns" :key="index">
        {{row[column.key]}}
      </td>
    </tr>
  </table>
</template>

<script>
import DColgroup from "./datagrid-colgroup";

export default {
  components: { DColgroup },
  data() {
    return {};
  },
  props: {
    leafColumns: { required: true, type: Array },
    dataSource: { type: Array }
  },
  mounted() {
    this.$emit("after-render");
  }
};
</script>

<style lang="scss" scoped>
.vk-datagrid--body-table {
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

