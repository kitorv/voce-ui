<template>
  <tr v-if="!row.hidden"
      :class="[{'kv-datagird--row-hover':row.hover},{'kv-datagird--row-selected':row.selected},tableRowClass]"
      :style="tableRowStyle"
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
    handleClick() {
      if (this.datagrid.select) {
        this.row.selected = true
      }
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
        dataRow.hidden = !row.treeNodeExpand || row.hidden
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
    },
    "row.selected"(selected) {
      if (!selected) return
      let rows = this.datagrid.dataSource;
      rows.map(m => {
        if (m.id == this.row.id) return
        m.selected = false
      })
    },
    'row.treeNodeExpand'(expand) {
      if (!this.datagrid.treeKey) return
      if (expand) {
        this.expandChildNodes(this.row)
      } else {
        this.collapseChildNodes(this.row)
      }
    }
  }
};
</script>
