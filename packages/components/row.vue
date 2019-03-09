<template>
  <tr :class="[{'kv-datagird--row-hover':row.hover},{'kv-datagird--row-selected':row.selected},tableRowClass]"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="handleClick">
    <td v-for="(column, cellIndex) in leafColumns"
        :key="cellIndex"
        is="table-cell"
        :column="column"
        :row="row"
        :row-index="rowIndex">
    </td>
  </tr>
</template>

<script>
import TableCell from "./cell";

export default {
  components: { TableCell },
  props: {
    row: { type: Object },
    rowIndex: { type: Number },
    leafColumns: { type: Array },
    rowClass: { type: Function }
  },
  computed: {
    tableRowClass() {
      //   if (!this.rowClass) return "";
      //   return this.rowClass.call(null, this.row, this.rowIndex);
    }
  },
  methods: {
    handleMouseEnter() {
      this.row.hover = true;
    },
    handleMouseLeave() {
      this.row.hover = false;
    },
    handleClick() {}
  }
};
</script>
