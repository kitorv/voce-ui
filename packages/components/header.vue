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
    <tr class="kv-datagrid--header-row"
        v-for="(colRow, index) in columnRows"
        :key="index">
      <table-column class="kv-datagrid--header-column"
                    v-for="(column, index) in colRow"
                    :key="index"
                    :column="column">
      </table-column>
    </tr>

    <tr v-for="(row, rowIndex) in data"
        :key="`key_${rowIndex}`">
      <table-cell class="kv-datagrid--body-cell"
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

export default {
  components: { TableColumn, TableCell },
  props: {
    columnRows: { type: Array },
    leafColumns: { type: Array },
    data: { type: Array }
  }
};
</script>
