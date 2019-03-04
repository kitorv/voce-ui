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
    <template v-for="(row, rowIndex) in data">
      <tr :key="rowIndex"
          :class="getRowClass(row,rowIndex)"
          @mouseenter="row.hover=true"
          @mouseleave="row.hover=false"
          @click="row.rowClick(row,rowIndex)">
        <td v-for="(column, cellIndex) in leafColumns"
            :key="cellIndex"
            :class="getCellClass(column,row,rowIndex)">
          <table-cell :column="column"
                      :row="row"
                      :row-index="rowIndex"></table-cell>
        </td>
      </tr>
      <tr class="kv-datagrid--expansion-row"
          :key="`expansion-${rowIndex}`"
          v-if="row.expand&&$slots.expansion">
        <td :colspan="leafColumns.length">
          <slot name="expansion"></slot>
        </td>
      </tr>
    </template>

  </table>
</template>

<script>
import TableCell from "./cell";

export default {
  components: { TableCell },
  data() {
    return {
      datagrid: this.$parent
    };
  },
  props: {
    leafColumns: { type: Array },
    data: { type: Array },
    footer: { type: Boolean, default: false },
    rowClass: { type: [Function, String] }
  },
  methods: {
    getRowClass(row, rowIndex) {
      let classList = [];
      let { rowClass, hover, selected } = row;
      if (hover) {
        classList.push("kv-datagird--row-hover");
      }
      if (selected) {
        classList.push("kv-datagird--row-selected");
      }
      if (rowClass) {
        classList.push(rowClass.call(null, row, rowIndex));
      }
      return classList.join(" ");
    },
    getCellClass(column, row, rowIndex) {
      let { type } = column;
      let { cellClass } = row;
      let classList = [];
      if (type) {
        classList.push(`kv-datagird--type-${type}`);
      }
      if (cellClass) {
        classList.push(cellClass.call(null, row, rowIndex));
      }
      return classList.join(" ");
    }
  },
  mounted() {
    this.$emit("on-after-render");
  }
};
</script>
