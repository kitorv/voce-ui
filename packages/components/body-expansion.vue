<template>
  <div :class="['kv-datagrid--expansion',{'kv-datagrid--expansion-active':row.expand}]"
       @click="handleClick(row)">
    <i class="kv-icon-right-arrow"></i>
  </div>
</template>

<script>
export default {
  props: {
    row: { type: Object }
  },
  methods: {
    handleClick(row) {
      row.expand = !row.expand;
    }
  }
};
</script>
