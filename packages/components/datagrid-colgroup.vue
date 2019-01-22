<template>
  <colgroup>
    <col v-for="(column, index) in columns" :key="index" is="v-datagrid-col" :column="column">
  </colgroup>
</template>

<script>
import VDatagridCol from "./datagrid-col";

export default {
  components: { VDatagridCol },
  props: {
    columns: Array
  }
};
</script>

