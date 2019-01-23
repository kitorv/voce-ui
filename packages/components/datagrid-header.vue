<template>
  <table class="vk-datagrid--header-table" cellspacing="0" cellpadding="0" border="0">
    <colgroup is="d-colgroup" :leaf-columns="leafColumns"></colgroup>
    <thead>
      <tr v-for="(colRows, index) in columns" :key="index">
        <th v-for="(column, index) in colRows" :key="index" :colspan="column.colSpan" :rowspan="column.rowSpan">
          {{column.title}}
        </th>
      </tr>
    </thead>
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
    columns: { required: true, type: Array },
    leafColumns: { required: true, type: Array }
  }
};
</script>

<style lang="scss" scoped>
.vk-datagrid--header-table {
  table-layout: fixed;
  width: 100%;

  th {
    min-width: 0;
    box-sizing: border-box;
    vertical-align: middle;
    position: relative;
    border: 1px solid #000;
    white-space: nowrap;
  }
}
</style>

