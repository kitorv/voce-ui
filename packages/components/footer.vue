<template>
  <table class="kv-datagrid--footer-table"
         cellspacing="0"
         cellpadding="0"
         border="0">
    <colgroup>
      <col v-for="(column, index) in leafColumns"
           :key="index"
           :style="column.colStyle">
    </colgroup>
    <tr v-for="(row, rowIndex) in data"
        :key="rowIndex">
      <td v-for="(column, cellIndex) in leafColumns"
          :key="cellIndex"
          :class="getCellClass(column,row,rowIndex)">
        <table-cell type='footer'
                    :column="column"
                    :row="row"
                    :row-index="rowIndex"></table-cell>
      </td>
    </tr>
  </table>
</template>

<script>
import TableCell from "./cell";

export default {
  components: { TableCell },
  props: {
    leafColumns: { type: Array },
    data: { type: Array }
  },
  methods: {
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
    }
  }
};
</script>
