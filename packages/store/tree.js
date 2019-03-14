import initProxyRow from "./row.js";

let idIndex = 0;

export const initTreeRows = (rows, treeNodeList = [], parentId = null) => {
  rows.forEach(row => {
    let { children } = row;
    idIndex++;
    let proxyRow = initProxyRow(row);
    proxyRow.id = idIndex;
    proxyRow.parentId = parentId;
    treeNodeList.push(proxyRow);
    if (!Array.isArray(children) || children.length <= 0) return;
    initTreeRows(children, treeNodeList, proxyRow.id);
  });
  return treeNodeList;
};

export default rows => {
  return initTreeRows(rows);
};
