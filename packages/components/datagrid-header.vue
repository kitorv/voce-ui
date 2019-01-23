<template>
  <table class="vk-datagrid--header-table" cellspacing="0" cellpadding="0" border="0">
    <v-datagrid-colgroup :columns="leafColumns"></v-datagrid-colgroup>
    <thead>
      <tr v-for="(colRows, index) in columns" :key="index">
        <th v-for="(column, index) in colRows" :key="index" :colspan="column.colSpan" :rowspan="column.rowSpan">
          <div class="vk-datagrid--header-table-cell">{{column.title}}</div>
        </th>
      </tr>
    </thead>
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
    columns: Array,
    leafColumns: Array
  },
  computed: {
    // 获取父级表格
    datgrid() {
      return this.$parent;
    }
  }
};
</script>

<style lang="scss" scoped>
.vk-datagrid--header-table {
  table-layout: fixed;
  border-collapse: separate;
  width: 100%;

  th {
    min-width: 0;
    box-sizing: border-box;
    vertical-align: middle;
    position: relative;
    text-align: left;
    border: 1px solid #000;
    white-space: nowrap;
    // overflow: hidden;
    // user-select: none;
  }
}

.vk-datagrid--header-table-cell {
  position: relative;
  word-wrap: normal;
  vertical-align: middle;
  width: 100%;
  display: inline-block;
  box-sizing: border-box;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 20px;
}
</style>

