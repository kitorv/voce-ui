<template>
  <th :colspan="column.colSpan"
      :rowspan="column.rowSpan"
      :class="getColumnClass()">
    <table-column-content :column="column"></table-column-content>
  </th>
</template>

<script>
import TableCheckbox from "./checkbox.vue";
import TableColumnContent from "./column-content";

export default {
  components: { TableCheckbox, TableColumnContent },
  inject: ["table"],
  props: {
    column: { type: Object }
  },
  methods: {
    getColumnClass() {
      let { type, headerAlign } = this.column;
      let classList = [];
      if (type) {
        classList.push(`kv-datagird--type-${type}`);
      }
      if (headerAlign) {
        classList.push(`kv-datagird--align-${headerAlign}`);
      }
      return classList.join(" ");
    }
  }
};
</script>

