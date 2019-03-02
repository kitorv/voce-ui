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
        :key="index"
        :class="{'kv-datagird--row-hover':row.hover}"
        @mouseenter="row.hover=true"
        @mouseleave="row.hover=false">
      <td v-for="(column, index) in leafColumns"
          :key="index"
          :class="typeClass(column)">
        <table-cell :column="column"
                    :row="row"
                    :footer="footer"></table-cell>
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
    data: { type: Array },
    fixedColumns: { type: Array },
    footer: { type: Boolean, default: false }
  },
  computed: {
    hideColumnKeys() {
      return Array.from(this.fixedColumns, m => m.key);
    }
  },
  methods: {
    typeClass({ type }) {
      if (!type) return;
      return `kv-datagird--type-${type}`;
    }
  },
  mounted() {
    this.$emit("on-after-render");
  }
};
</script>
