<script>
import Checkbox from "./checkbox";

export default {
  props: {
    type: { type: String, default: "body" },
    column: { type: Object },
    row: { type: Object },
    rowIndex: { type: Number }
  },
  render(h) {
    let { data } = this.row;
    let { key, headerFormatter, formatter, footerFormatter } = this.column;
    // let params = {
    //   row: this.row,
    //   column: this.column,
    //   value: data[key],
    //   index: this.rowIndex
    // };
    // if (headerFormatter && this.type === "header") {
    //   return footerFormatter(h, params);
    // }
    // if (formatter && this.type === "body") {
    //   return formatter(h, params);
    // }
    // if (footerFormatter && this.type === "footer") {
    //   return footerFormatter(h, params);
    // }
    return <td class={this.tableCellClass}>{data[key]}</td>;
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
