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
    <tr v-for="(row, index) in data"
        :key="index">
      <td v-for="(column, index) in leafColumns"
          :key="index"
          :class="typeClass(column)">
        <table-cell :column="column"
                    :row="row"></table-cell>
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
    data: { type: Array },
    rowClass: { type: [Function, String] }
  },
  methods: {
    typeClass({ type }) {
      if (!type) return;
      return `kv-datagird--type-${type}`;
    }
  }
};
</script>
