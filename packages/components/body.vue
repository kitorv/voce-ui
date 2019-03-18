<template>
  <table class="kv-datagrid--body-table"
         cellspacing="0"
         cellpadding="0"
         border="0">
    <colgroup>
      <col v-for="(column, index) in leafColumns"
           :key="index"
           :style="column.colStyle">
    </colgroup>
    <template v-for="(row, rowIndex) in data">
      <table-row :row="row"
                 :key="rowIndex"
                 :row-class="rowClass"
                 :row-index="rowIndex">
        <table-cell v-for="(column, cellIndex) in leafColumns"
                    :key="cellIndex"
                    :column="column"
                    :row="row"
                    :row-index="rowIndex"
                    :cell-class="cellClass">
        </table-cell>
      </table-row>
      <table-row-expansion v-if="row.expand"
                           :key="`ex-${rowIndex}`"
                           :row="row"></table-row-expansion>
    </template>

  </table>
</template>

<script>
import TableRow from "./row";
import TableCell from "./cell";
import TableRowExpansion from "./expansion";

export default {
  components: { TableRow, TableCell, TableRowExpansion },
  data() {
    return {
      datagrid: this.$parent
    };
  },
  props: {
    leafColumns: { type: Array },
    data: { type: Array },
    rowClass: { type: Function },
    cellClass: { type: [String, Function] }
  },
  mounted() {
    this.$emit("on-after-render");
  }
};
</script>
