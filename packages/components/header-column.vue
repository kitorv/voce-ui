<template>
  <th :colspan="column.colSpan"
      :rowspan="column.rowSpan"
      :class="getColumnClass()">
    <table-column-content :column="column"></table-column-content>
  </th>
</template>

<script>
import TableCheckbox from "../components/checkbox.vue";

export default {
  components: {
    TableCheckbox,
    TableColumnContent: {
      render(h) {
        let { title, columnFormatter } = this.column;
        let colElement = title;
        if (columnFormatter) {
          colElement = columnFormatter(h, { column: this.column });
        }
        return <div class="kv-datagird--column">{colElement}</div>;
      },
      props: {
        column: { type: Object }
      }
    }
  },
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

