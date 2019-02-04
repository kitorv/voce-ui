<template>
  <table class="vk-datagrid--header-table"
         cellspacing="0"
         cellpadding="0"
         border="0">
    <colgroup is="d-colgroup"
              :leaf-columns="leafColumns"></colgroup>
    <tr v-for="(colRows, index) in columns"
        :key="index">
      <th v-for="(column, index) in colRows"
          :key="index"
          :colspan="column.colSpan"
          :rowspan="column.rowSpan">
        <template v-if="column.type=='checkbox'">
          <d-checkbox :indeterminate="$parent.indeterminate"
                      :value="$parent.checked"
                      @click.native="handleCheckClick"></d-checkbox>
        </template>
        <template v-else>
          {{column.title}}
        </template>
      </th>
    </tr>
  </table>
</template>

<script>
import DColgroup from "./datagrid-colgroup";
import DCheckbox from "./datagrid-checkbox";

export default {
  components: { DColgroup, DCheckbox },
  data() {
    return {};
  },
  props: {
    columns: { required: true, type: Array },
    leafColumns: { required: true, type: Array }
  },
  methods: {
    handleCheckClick(value) {
      let datagrid = this.$parent;
      datagrid.checked = !datagrid.checked;
      datagrid.indeterminate = false;
      datagrid.dataRows.forEach(row => {
        row.checked = datagrid.checked;
      });
    }
  }
};
</script>
