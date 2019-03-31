<script>
export default {
  inject: ["datagrid"],
  props: {
    type: { type: String, default: "body" },
    column: { type: Object },
    row: { type: Object },
    rowIndex: { type: Number },
    columnIndex: { type: Number },
    cellClass: { type: Function },
    cellStyle: { type: Function }
  },
  render(h) {
    let { rowspan, colspan } = this.getCellSpan()
    if (!rowspan || !colspan) return ''
    let { key, headerFormatter, formatter, footerFormatter, render } = this.column;
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
    return <td
      rowspan={rowspan}
      colspan={colspan}
      style={this.tableCellStyle}
      on-click={this.handleCellClick}
      on-dblclick={this.handleDoubleClick}
      on-mouseenter={this.handleCellMouseEnter}
      on-mouseleave={this.handleCellMouseLeave}
      class={this.tableCellClass}>{content}</td>

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
    tableCellStyle() {
      if (!this.cellStyle) return
      let params = {
        index: this.rowIndex,
        data: this.row.data,
        row: this.row,
        column: this.column
      }
      return this.cellStyle.call(this.datagrid, params)
    }
  },
  methods: {
    handleCellClick() {
      this.datagrid.$emit('cell-click', this.row, this.column, event);
    },
    handleDoubleClick() {
      this.datagrid.$emit('cell-dbclick', this.row, this.column, event);
    },
    handleCellMouseEnter() {
      this.datagrid.$emit('cell-mouse-enter', this.row, this.column, event);
    },
    handleCellMouseLeave(event) {
      this.datagrid.$emit('cell-mouse-leave', this.row, this.column, event);
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
