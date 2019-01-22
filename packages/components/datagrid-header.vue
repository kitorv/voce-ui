<template>
  <table class="vk-datagrid--header-table" cellspacing="0" cellpadding="0" border="0">
    <thead>
      <tr v-for="(colRows, index) in columns" :key="index">
        <th v-for="(column, index) in colRows" :key="index" :colspan="column.colSpan" :rowspan="column.rowSpan">
          <div class="vk-datagrid--header-table-cell">{{column.title}}</div>
        </th>
      </tr>
    </thead>
  </table>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    columns: {
      required: true,
      type: Array
    }
  },
  computed: {
    // 获取父级表格
    datgrid() {
      return this.$parent;
    }
  },
  methods: {},
  mounted() {
    console.log(this.columns);
  }
};
</script>

<style lang="scss" scoped>
.vk-datagrid--header-table {
  table-layout: fixed;
  border-collapse: separate;

  th {
    padding: 12px 0;
    min-width: 0;
    box-sizing: border-box;
    vertical-align: middle;
    position: relative;
    text-align: left;
    border: 1px solid #ebeef5;
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
  }
}

.vk-datagrid--header-table-cell {
  position: relative;
  word-wrap: normal;
  vertical-align: middle;
  width: 100%;
  display: inline-block;
  box-sizing: border-box;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-all;
  line-height: 20px;
}
</style>

