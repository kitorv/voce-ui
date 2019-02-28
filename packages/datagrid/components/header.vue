<template>
  <table class="kv-datagrid--header-table"
         cellspacing="0"
         cellpadding="0"
         border="0">
    <colgroup>
      <col v-for="(column, index) in leafColumns"
           :key="index"
           :style="getColStyle(column)">
    </colgroup>
    <tr v-for="(row, index) in columnRows"
        :key="index">
      <th v-for="(column, index) in row"
          :key="index"
          :colspan="column.colSpan"
          :rowspan="column.rowSpan">
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
    columnRows: { required: true, type: Array },
    leafColumns: { required: true, type: Array }
  },
  methods: {
    getColStyle({ width }) {
      let widthStyle = `${width}px`;
      return { width: widthStyle, minWidth: widthStyle };
    }
  },
  created() {
    console.log(this.columnRows);
  }
};
</script>
