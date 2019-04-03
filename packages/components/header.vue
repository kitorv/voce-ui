<template>
  <table class="kv-table--header-table"
         cellspacing="0"
         cellpadding="0"
         border="0">
    <colgroup>
      <table-col v-for="(column, index) in leafColumns"
                 :key="index"
                 :column="column"></table-col>
    </colgroup>
    <tr class="kv-table--header-row"
        v-for="(colRow, index) in columnRows"
        :key="index">
      <table-column class="kv-table--header-column"
                    v-for="(column, index) in colRow"
                    :key="index"
                    :column="column">
      </table-column>
    </tr>

    <tr v-for="(row, rowIndex) in data"
        :key="`key_${rowIndex}`">
      <table-cell class="kv-table--body-cell"
                  v-for="(column, cellIndex) in leafColumns"
                  :key="`k_${cellIndex}`"
                  type="header"
                  :column="column"
                  :row="row"
                  :row-index="rowIndex"></table-cell>
    </tr>
  </table>
</template>

<script>
import TableColumn from "./column";
import TableCell from "./cell";
import TableCol from "./col"

export default {
  components: { TableColumn, TableCell, TableCol },
  inject: ['datagrid'],
  computed: {
    data() {
      return this.datagrid.headerDataSource
    },
    leafColumns() {
      return this.datagrid.leafColumns
    },
    columnRows() {
      return this.datagrid.columnRows
    }
  },
};
</script>
