<template>
  <table class="kv-datagrid--header-table"
         cellspacing="0"
         cellpadding="0"
         border="0">
    <colgroup>
      <col v-for="(column, index) in leafColumns"
           :key="index"
           :style="column.colStyle">
    </colgroup>
    <tr v-for="(row, index) in columnRows"
        :key="index">
      <th v-for="(column, index) in row"
          :key="index"
          :colspan="column.colSpan"
          :rowspan="column.rowSpan"
          :class="getCellClass(column)">
        <table-column :column="column"></table-column>
      </th>
    </tr>
  </table>
</template>

<script>
import TableColumn from "./column";

export default {
  components: { TableColumn },
  props: {
    columnRows: { type: Array },
    leafColumns: { type: Array }
  },
  methods: {
    getCellClass(column) {
      let { type, headerAlign } = column;
      let classList = [];
      if (type) {
        classList.push(`kv-datagird--type-${type}`);
      }
      if (headerAlign && ["left", "center", "right"].includes(headerAlign)) {
        classList.push(`kv-datagird--align-${headerAlign}`);
      }
      return classList.join(" ");
    }
  }
};
</script>
