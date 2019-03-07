export default function(row) {
  return {
    // 鼠标在行内
    hover: false,
    // 复选框选中状态
    checked: false,
    // 行选中状态
    selected: false,
    // 展开行状态
    expand: false,
    // 行的数据
    data: row,
    // 行类样式
    rowClass: this.rowClass,
    // 行单击事件
    onRowClick: (event, row) => {
      //index
      // 单行选中设置
      if (this.select) {
        this.dataSource.forEach(row => {
          row.selected = false;
        });
        row.selected = true;
      }
    },
    // 单元格单击事件
    onCellClick: (event, column, row) => {
      // index
      let { type } = column;
      // 展开行处理
      if (type === "expansion") {
        event.stopPropagation();
        row.expand = !row.expand;
      }
    }
  };
}
