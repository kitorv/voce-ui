<template>
  <tr :class="[{'kv-datagird--row-hover':row.hover},{'kv-datagird--row-selected':row.selected},tableRowClass]"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="handleClick">
    <slot></slot>
  </tr>
</template>

<script>
export default {
  inject: ["datagrid"],
  props: {
    row: { type: Object },
    rowIndex: { type: Number }
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
  },
  watch: {
    "row.checked"(value) {
      let table = this.datagrid;
      let checkedRows = table.dataSource.filter(row => row.checked);
      if (table.dataSource.length == checkedRows.length) {
        table.checkedAll = true;
        table.indeterminate = false;
      } else {
        table.checkedAll = false;
        table.indeterminate = checkedRows.length > 0;
      }
    }
  }
};
</script>
