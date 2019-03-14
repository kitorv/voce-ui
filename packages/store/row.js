export default function(row) {
  return {
    // 唯一Id标识
    id: null,
    // 父节点Id
    parentId: null,
    // 鼠标在行内
    hover: false,
    // 复选框选中状态
    checked: false,
    // 行选中状态
    selected: false,
    // 展开行状态
    expand: false,
    // 隐藏行
    hiddden:false,
    // 行的数据
    data: row
  };
}
