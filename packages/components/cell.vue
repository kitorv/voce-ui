<script>
import Checkbox from "./checkbox";
import { getMegreDetailRows } from "../store/megre.js";

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
    let { key, headerFormatter, formatter, footerFormatter } = this.column;
    //  this._l：vue内部的renderList方法
    let cellContent = this._l(this.separateRows, data => {
      let content = data[key];
      let params = {
        data: data,
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
      if (this.column.separate && content) {
        return <div class="kv-datagrid--separate-content">{content}</div>;
      }
      return content;
    });
    return <td class={this.tableCellClass}>{cellContent}</td>;
  },
  computed: {
    tableCellClass() {
      let { type, align, separate } = this.column;
      let classList = [];
      if (type) {
        classList.push(`kv-datagird--type-${type}`);
      }
      if (align) {
        classList.push(`kv-datagird--align-${align}`);
      }
      if (separate) {
        classList.push(`kv-datagird--separate-cell`);
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
    },
    megreKeys() {
      return this.datagrid.megreKeys;
    },
    separateRows() {
      let { data } = this.row;
      let { key, separate } = this.column;
      if (this.type == "body" && separate) {
        return getMegreDetailRows(data);
      }
      return [data];
    }
  }
};
</script>
