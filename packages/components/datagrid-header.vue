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
        {{column.title}}
      </th>
    </tr>
  </table>
</template>

<script>
import DColgroup from "./datagrid-colgroup";

export default {
  components: { DColgroup },
  data() {
    return {};
  },
  props: {
    columns: { required: true, type: Array },
    leafColumns: { required: true, type: Array }
  }
};
</script>
