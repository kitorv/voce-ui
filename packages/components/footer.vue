<template>
  <table class="kv-datagrid--footer-table"
         cellspacing="0"
         cellpadding="0"
         border="0">
    <colgroup>
      <table-col v-for="(column, index) in leafColumns"
                 :key="index"
                 :column="column"></table-col>
    </colgroup>
    <tr class="kv-datagrid--footer-row"
        v-for="(row, rowIndex) in data"
        :key="rowIndex">
      <table-cell class="kv-datagrid--body-cell"
                  v-for="(column, cellIndex) in leafColumns"
                  :key="cellIndex"
                  type='footer'
                  :column="column"
                  :row="row"
                  :row-index="rowIndex">
      </table-cell>
    </tr>
  </table>
</template>

<script>
import TableCell from "./cell";
import TableCol from "./col"

export default {
  components: { TableCell, TableCol },
  inject: ['datagrid'],
  computed: {
    data() {
      return this.datagrid.footerDataSource
    },
    leafColumns() {
      return this.datagrid.leafColumns
    },
  },
};
</script>
