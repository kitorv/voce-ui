<template>
  <tr v-if="!row.hidden"
      :class="[
        {'kv-table--row-hover':row.hover},
        {'kv-table--row-selected':row.selected},
        tableRowClass
      ]"
      :style="tableRowStyle"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="handleClick"
      @dblclick="handleDoubleClick">
    <slot></slot>
  </tr>
</template>

<script>
export default {
  inject: ["datagrid"],
  props: {
    row: { type: Object },
    rowIndex: { type: Number },
    rowClass: { type: Function },
    rowStyle: { type: Function }
  },
  computed: {
    tableRowClass() {
      if (!this.rowClass) return;
      let params = {
        index: this.rowIndex,
        data: this.row.data,
        row: this.row
      }
      return this.rowClass.call(this.datagrid, params);
    },
    tableRowStyle() {
      if (!this.rowStyle) return
      let params = {
        index: this.rowIndex,
        data: this.row.data,
        row: this.row
      }
      return this.rowStyle.call(this.datagrid, params);
    },
    dataSource() {
      return this.datagrid.dataSource
    }
  },
  methods: {
    handleMouseEnter() {
      this.row.hover = true;
    },
    handleMouseLeave() {
      this.row.hover = false;
    },
    handleClick(event) {
      if (this.datagrid.select) {
        this.row.selected = true
      }
      this.datagrid.$emit("row-click", this.row, event)
    },
    handleDoubleClick(event) {
      if (this.datagrid.select) {
        this.row.selected = true
      }
      this.datagrid.$emit("row-dbclick", this.row, event)
    },
    collapseChildNodes(row) {
      this.dataSource.forEach(dataRow => {
        if (dataRow.parentId != row.id) return
        dataRow.hidden = true
        this.collapseChildNodes(dataRow)
      });
    },
    expandChildNodes(row) {
      this.dataSource.forEach(dataRow => {
        if (dataRow.parentId != row.id) return
        dataRow.hidden = !row.nodeExpand || row.hidden
        this.expandChildNodes(dataRow)
      });
    }
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
      this.datagrid.$emit("check", this.row)
    },
    "row.selected"(selected) {
      if (!selected) return
      let rows = this.datagrid.dataSource;
      rows.map(m => {
        if (m.id == this.row.id) return
        m.selected = false
      })
      this.datagrid.$emit("select", this.row)
    },
    'row.nodeExpand'(expand) {
      if (!this.datagrid.treeKey) return
      if (expand) {
        this.expandChildNodes(this.row)
      } else {
        this.collapseChildNodes(this.row)
      }
    },
    'row.rowExpand'() {
      this.datagrid.$emit("row-expand", this.row, this.datagrid.dataSource)
    }
  }
};
</script>
