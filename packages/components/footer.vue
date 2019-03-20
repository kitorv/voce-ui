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

export default {
  components: { TableCell },
  props: {
    leafColumns: { type: Array },
    data: { type: Array }
  }
};
</script>
