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
          :class="typeClass(column)">
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
    typeClass({ type }) {
      if (!type) return;
      return `kv-datagird--type-${type}`;
    }
  }
};
</script>
