<script>
export default {
  inject: ["datagrid"],
  props: {
    type: { type: String, default: "body" },
    column: { type: Object },
    row: { type: Object },
    rowIndex: { type: Number },
    cellClass: { type: [String, Function] }
  },
  render(h) {
    let { key, headerFormatter, formatter, footerFormatter, render } = this.column;
    if (headerFormatter && this.type === "header") {
      formatter = headerFormatter
    }
    if (footerFormatter && this.type === "footer") {
      formatter = footerFormatter
    }
    let content = this.row.data[key]
    let params = {
      data: this.row.data,
      row: this.row,
      column: this.column,
      value: content,
      index: this.rowIndex
    };
    if (formatter) {
      content = formatter.call(this.datagrid, h, params);
    }
    if (render) {
      content = render.call(this.datagrid, h, content, params);
    }
    return <td class={this.tableCellClass}>{content}</td>;
  },
  computed: {
    tableCellClass() {
      let { type, align } = this.column;
      let classList = [];
      if (type) {
        classList.push(`kv-datagird--type-${type}`);
      }
      if (align) {
        classList.push(`kv-datagird--align-${align}`);
      }
      if (this.cellClass) {
        if (typeof this.cellClass == "string") {
          classList.push(this.cellClass);
        } else {
          let { data } = this.row;
          classList.push(
            this.cellClass.call(this.datagrid, data, this.column, this.rowIndex)
          );
        }
      }
      return classList.join(" ");
    }
  }
};
</script>
