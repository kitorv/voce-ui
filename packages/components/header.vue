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
          :class="getColumnClass(column)"
          @click="handleColumnClick($event,column)">
        <table-column :column="column"></table-column>
      </th>
    </tr>
    <tr v-for="(row, rowIndex) in data"
        :key="`key_${rowIndex}`">
      <td v-for="(column, cellIndex) in leafColumns"
          :key="cellIndex"
          :class="getCellClass(column,row,rowIndex)">
        <table-cell type='header'
                    :column="column"
                    :row="row"
                    :row-index="rowIndex"></table-cell>
      </td>
    </tr>
  </table>
</template>

<script>
import TableColumn from "./column";
import TableCell from "./cell";

export default {
  components: { TableColumn, TableCell },
  props: {
    columnRows: { type: Array },
    leafColumns: { type: Array },
    data: { type: Array }
  },
  methods: {
    getColumnClass(column) {
      let { type, headerAlign } = column;
      let classList = [];
      if (type) {
        classList.push(`kv-datagird--type-${type}`);
      }
      if (headerAlign && ["left", "center", "right"].includes(headerAlign)) {
        classList.push(`kv-datagird--align-${headerAlign}`);
      }
      return classList.join(" ");
    },
    getCellClass(column, row, rowIndex) {
      let { type, align } = column;
      let { cellClass } = row;
      let classList = [];
      if (type) {
        classList.push(`kv-datagird--type-${type}`);
      }
      if (align && ["left", "center", "right"].includes(align)) {
        classList.push(`kv-datagird--align-${align}`);
      }
      return classList.join(" ");
    },
    handleColumnClick($event, column) {
      
    }
  }
};
</script>
