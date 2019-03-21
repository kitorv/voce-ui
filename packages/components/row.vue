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
      let childNodes = []
      this.dataSource.forEach(dataRow => {
        if (dataRow.parentId != row.id) return
        dataRow.hidden = true
        this.collapseChildNodes(dataRow)
      });
    },
    expandChildNodes() {

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
      console.log(expand);
      if (expand) {
        this.expandChildNodes(this.row)
      } else {
        this.collapseChildNodes(this.row)
      }
      // console.log(expand);
      // console.log(this.dataSource);

      // let treeExpandNodeId = this.datagrid.treeExpandNodeId
      // if (!treeExpandNodeId) {
      //   this.datagrid.treeExpandNodeId = this.row.id
      // }
      // let dataSource = this.datagrid.dataSource
      // dataSource.map(row => {
      //   if (row.parentId != this.row.id) return
      //   row.hidden = !value
      //   // row.hidden=value
      //   // this.datagrid.treeExpandNodeId
      //   // if (row.parentId != this.datagrid.treeExpandNodeId) return
      //   // row.treeNodeExpand = value
      // })
      // // treeExpandNodeId
      // console.log(this.row);
      // console.log(value);
      // console.log(this.datagrid.treeExpandNodeId);
    }
  }
};
</script>
