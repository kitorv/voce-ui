<script>
export default {
  inject: ["datagrid"],
  props: {
    column: { type: Object }
  },
  render(h) {
    let { title, columnFormatter } = this.column;
    let content = title;
    if (columnFormatter) {
      content = columnFormatter.call(this.datagrid, h, { column: this.column });
    }
    return (
      <th
        colspan={this.column.colSpan}
        rowspan={this.column.rowSpan}
        class={this.getColumnClass()}
      >
        <div class="kv-datagird--column">{content}</div>
      </th>
    );
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

