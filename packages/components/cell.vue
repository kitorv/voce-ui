<script>
export default {
  inject: ["datagrid"],
  props: {
    type: { type: String, default: "body" },
    column: { type: Object },
    row: { type: Object },
    rowIndex: { type: Number },
    columnIndex: { type: Number },
    cellClass: { type: Function }
  },
  render(h) {
    console.log(this.getCellSpan());

    let { rowspan, colspan } = this.getCellSpan()
    if (!rowspan || !colspan) return ''
    let { key, headerFormatter, formatter, footerFormatter, render, edit } = this.column;
    if (headerFormatter && this.type === "header") {
      formatter = headerFormatter;
    }
    if (footerFormatter && this.type === "footer") {
      formatter = footerFormatter;
    }
    let content = this.row.data[key];
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
    if (this.edit && edit) {
      content = edit && edit.call(this.datagrid, h, params)
    }
    return <td rowspan={rowspan} colspan={colspan} on-click={this.handleCellClick} class={this.tableCellClass}>{content}</td>

  },
  computed: {
    tableCellClass() {
      let { type, align } = this.column;
      let classList = [];
      if (type) {
        classList.push(`kv-datagrid--cell-type-${type}`);
      }
      if (align) {
        classList.push(`kv-datagrid--align-${align}`);
      }
      if (this.cellClass) {
        let params = {
          index: this.rowIndex,
          data: this.row.data,
          row: this.row,
          column: this.column
        }
        classList.push(
          this.cellClass.call(this.datagrid, params)
        );
      }
      return classList.join(" ");
    },
    edit() {
      let { key } = this.column;
      let datagrid = this.datagrid;
      return datagrid.editIndex == this.rowIndex && datagrid.editKey == key;
    }
  },
  methods: {
    handleCellClick() {
      let { edit, key } = this.column;
      if (edit && key) {
        this.datagrid.editIndex = this.rowIndex;
        this.datagrid.editKey = key;
      }
    },
    getCellSpan() {
      let rowspan = 1;
      let colspan = 1;
      const cellSpan = this.datagrid.cellSpan;
      let { row, column, rowIndex, columnIndex } = this
      if (cellSpan) {
        const result = cellSpan({ row, column, rowIndex, columnIndex }) || { rowspan, colspan }
        rowspan = result.rowspan;
        colspan = result.colspan;
      }
      return { rowspan, colspan };
    }
  }
};
</script>
