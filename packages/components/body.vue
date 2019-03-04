<template>
  <table class="kv-datagrid--body-table"
         cellspacing="0"
         cellpadding="0"
         border="0">
    <colgroup>
      <col v-for="(column, index) in leafColumns"
           :key="index"
           :style="column.colStyle">
    </colgroup>
    <tr v-for="(row, index) in data"
        :key="index"
        :class="getRowClass(row,index)"
        @mouseenter="row.hover=true"
        @mouseleave="row.hover=false"
        @click="handleRowClick(row,index)">
      <td v-for="(column, index) in leafColumns"
          :key="index"
          :class="typeClass(column)">
        <table-cell :column="column"
                    :row="row"
                    :footer="footer"
                    :index="index"></table-cell>
      </td>
    </tr>
  </table>
</template>

<script>
import TableCell from "./cell";

export default {
  components: { TableCell },
  data() {
    return {
      datagrid: this.$parent
    };
  },
  props: {
    leafColumns: { type: Array },
    data: { type: Array },
    fixedColumns: { type: Array },
    footer: { type: Boolean, default: false },
    rowClass: { type: [Function, String] }
  },
  computed: {
    hideColumnKeys() {
      return Array.from(this.fixedColumns, m => m.key);
    }
  },
  methods: {
    getRowClass(row, index) {
      let classList = [];
      if (row.hover) {
        classList.push("kv-datagird--row-hover");
      }
      if (row.selected) {
        classList.push("kv-datagird--row-selected");
      }
      let { data } = row;
      if (typeof this.rowClass === "string") {
        classList.push(this.rowClass);
      }
      if (typeof this.rowClass === "function") {
        classList.push(this.rowClass.call(null, { row, index }));
      }
      return classList.join(" ");
    },
    typeClass({ type }) {
      if (!type) return;
      return `kv-datagird--type-${type}`;
    },
    handleRowClick(row) {
      this.datagrid.dataSource.forEach(row => {
        row.selected = false;
      });
      row.selected = true;
    }
  },
  mounted() {
    this.$emit("on-after-render");
  }
};
</script>
