<template>
  <table class="kv-table--body-table"
         cellspacing="0"
         cellpadding="0"
         border="0">
    <colgroup>
      <table-col v-for="(column, index) in leafColumns"
                 :key="index"
                 :column="column"></table-col>
    </colgroup>
    <template v-for="(row, rowIndex) in data">
      <table-row class="kv-table--body-row"
                 :row="row"
                 :key="rowIndex"
                 :row-class="rowClass"
                 :row-style="rowStyle"
                 :row-index="rowIndex">
        <table-cell class="kv-table--body-cell"
                    v-for="(column, cellIndex) in leafColumns"
                    :key="cellIndex"
                    :column="column"
                    :row="row"
                    :row-index="rowIndex"
                    :cell-class="cellClass"
                    :cell-style="cellStyle"
                    :column-index="cellIndex">
        </table-cell>
      </table-row>
      <table-row-expansion v-if="row.rowExpand"
                           :key="`ex-${rowIndex}`"
                           :row="row"></table-row-expansion>
    </template>
  </table>
</template>

<script>
import TableRow from "./row";
import TableCell from "./cell";
import TableCol from "./col"
import TableRowExpansion from "./expansion";

export default {
  components: { TableRow, TableCell, TableCol, TableRowExpansion },
  inject: ['datagrid'],
  computed: {
    data() {
      return this.datagrid.dataSource
    },
    leafColumns() {
      return this.datagrid.leafColumns
    },
    rowClass() {
      return this.datagrid.rowClass
    },
    rowStyle() {
      return this.datagrid.rowStyle
    },
    cellClass() {
      return this.datagrid.cellClass
    },
    cellStyle() {
      return this.datagrid.cellStyle
    }
  },
  mounted() {
    this.$emit("on-after-render");
  }
};
</script>
