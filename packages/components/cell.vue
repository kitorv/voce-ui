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
    let { key, formatter, footerFormatter } = this.column;
    if (formatter && this.type === "body") {
      return formatter(h, {
        row: this.row,
        column: this.column,
        value: data[key],
        index: this.rowIndex
      });
    }
    if (footerFormatter && this.type === "footer") {
      return footerFormatter(h, {
        row: this.row,
        column: this.column,
        value: data[key],
        index: this.rowIndex
      });
    }
    return <div>{data[key]}</div>;
  }
};
</script>
