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
    <tr v-for="(row, index) in data"
        :key="index">
      <td v-for="(column, index) in leafColumns"
          :key="index">
        <table-cell :column="column"
                    :data="row"></table-cell>
      </td>
    </tr>
  </table>
</template>

<script>
import TableCell from "./cell";

export default {
  components: { TableCell },
  data() {
    return {};
  },
  props: {
    leafColumns: { type: Array },
    data: { type: Array }
  },
  mounted() {
    this.$emit("on-after-render");
  }
};
</script>

