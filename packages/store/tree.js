import initProxyRow from "./row.js";

let idIndex = 0;

export const initTreeRows = (rows, treeNodeList = [], parentId = null, level = 0) => {
  rows.forEach(row => {
    let { children } = row;
    idIndex++;
    let proxyRow = initProxyRow(row);
    proxyRow.id = idIndex;
    proxyRow.level = level + 1;
    proxyRow.parentId = parentId;

    treeNodeList.push(proxyRow);
    if (!Array.isArray(children) || children.length <= 0) return;
    proxyRow.isParent = true;
    initTreeRows(children, treeNodeList, proxyRow.id, proxyRow.level);
  });
  return treeNodeList;
};

export default rows => {
  return initTreeRows(rows);
};
