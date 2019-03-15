/* eslint-disable prettier/prettier */

// 代理行数据用于各种行状态操作的管理
export const initProxyRow = row => {
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
    hiddden: false,
    // 树结构的父节点
    isLeaf: true,
    // 行的数据
    data: row
  };
};

// 初始化代理行数据集合
export const initProxyRows = rows => {
  return Array.from(rows, row => initProxyRow(row));
};

// 初始化树结构代理行数据
export const initTreeProxyRows = (rows, treeNodeList = [], parentId = null, level = 0, index = 0) => {
  rows.forEach(row => {
    let { children } = row;
    index++;
    let proxyRow = initProxyRow(row);
    proxyRow.id = index;
    proxyRow.level = level;
    proxyRow.parentId = parentId;

    treeNodeList.push(proxyRow);
    if (!Array.isArray(children) || children.length <= 0) return;
    proxyRow.isLeaf = false;
    initTreeProxyRows(children, treeNodeList, proxyRow.id, proxyRow.level + 1, index);
  });
  return treeNodeList;
};

// 合并单元格代理行数据
export const initMegreProxyRows = (keys, rows) => {
  let dataMap = {};
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    let combineValues = [];
    keys.forEach(key => {
      combineValues.push(row[key]);
    });
    const key = combineValues.join("_$_");
    if (!dataMap[key]) {
      dataMap[key] = { row, children: [] };
    }
    dataMap[key].children.push(row);
  }
  let dataList = [];
  for (const key in dataMap) {
    const { row, children } = dataMap[key];
    let newRow = Object.assign({ MERGE_DETAILROWS: children }, row);
    dataList.push(initProxyRow(newRow));
  }
  return dataList;
};
