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
    data: row
  };
}
