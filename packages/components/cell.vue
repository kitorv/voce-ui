<script>
import Checkbox from "./checkbox";

export default {
  inject: ["datagrid"],
  props: {
    type: { type: String, default: "body" },
    column: { type: Object },
    row: { type: Object },
    rowIndex: { type: Number }
  },
  render(h) {
    let { data } = this.row;
    let { key, headerFormatter, formatter, footerFormatter } = this.column;
    let content = data[key];
    let params = {
      row: this.row,
      column: this.column,
      value: content,
      index: this.rowIndex
    };
    if (headerFormatter && this.type === "header") {
      content = headerFormatter.call(this.datagrid, h, params);
    }
    if (formatter && this.type === "body") {
      content = formatter.call(this.datagrid, h, params);
    }
    if (footerFormatter && this.type === "footer") {
      content = footerFormatter.call(this.datagrid, h, params);
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
      return classList.join(" ");
    }
  }
};
</script>
