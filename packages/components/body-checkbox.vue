<template>
  <table-checkbox :value="row.checked"
                  @click.native="handleNativeClick"></table-checkbox>
</template>

<script>
import TableCheckbox from "./checkbox";

export default {
  components: { TableCheckbox },
  props: {
    datagrid: { type: Object },
    row: { type: Object }
  },
  methods: {
    handleNativeClick() {
      let row = this.row;
      row.checked = !row.checked;
      let checkedRows = this.datagrid.dataSource.filter(row => row.checked);
      if (this.datagrid.dataSource.length == checkedRows.length) {
        this.datagrid.checkedAll = true;
        this.datagrid.indeterminate = false;
      } else {
        this.datagrid.checkedAll = false;
        this.datagrid.indeterminate = checkedRows.length > 0;
      }
    }
  }
};
</script>

