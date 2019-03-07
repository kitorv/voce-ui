<template>
  <table-checkbox :indeterminate="datagrid.indeterminate"
                  :value="datagrid.checkedAll"
                  @click.native="handleNativeClick">
  </table-checkbox>
</template>

<script>
import TableCheckbox from "./checkbox";

export default {
  components: { TableCheckbox },
  props: {
    datagrid: { type: Object }
  },
  methods: {
    handleNativeClick() {
      let checkedAll = !this.datagrid.checkedAll;
      this.datagrid.checkedAll = checkedAll;
      this.datagrid.indeterminate = false;
      this.datagrid.dataSource.map(row => {
        row.checked = checkedAll;
      });
    }
  }
};
</script>

