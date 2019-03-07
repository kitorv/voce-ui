<template>
  <th :colspan="column.colSpan"
      :rowspan="column.rowSpan"
      :class="getColumnClass()">
    <column-content :column="column"></column-content>
  </th>
</template>

<script>
export default {
  components: {
    ColumnContent: {
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

