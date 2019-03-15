<script>
import Checkbox from "./checkbox";

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
      if (this.column.tree) {
        return (
          <div
            class={[
              "kv-datagrid--tree-cell",
              { "kv-datagrid--tree-space": this.row.isLeaf },
              { "kv-datagrid--tree-expand": this.row.nodeExpand }
            ]}
            style={{ "padding-left": `${this.row.level * 15}px` }}
          >
            <i
              class="kv-icon-fill-down-arrow"
              on-click={this.setTreeNodeStatus}
            />
            {content}
          </div>
        );
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
    separateRows() {
      let { data } = this.row;
      let { key, separate } = this.column;
      if (this.type == "body" && separate) {
        return data["MERGE_DETAILROWS"];
      }
      return [data];
    }
  },
  methods: {
    setTreeNodeStatus(event) {
      event.stopPropagation();
      let status = !this.row.nodeExpand;
      this.row.nodeExpand = status;
      let { id } = this.row;
      this.datagrid.dataSource.map(row => {
        if (row.parentId != id) return;
        row.hidden = !status;
      });
    }
  }
};
</script>
