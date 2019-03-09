<template>
  <div :class="['kv-datagrid--expansion',{'kv-datagrid--expansion-active':row.expand}]">
    <i class="kv-icon-right-arrow"></i>
  </div>
</template>

<script>
export default {
  props: {
    row: { type: Object }
  }
};
</script>
