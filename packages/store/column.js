import checkbox from "../columns/checkbox";
import index from "../columns/index";
import expansion from "../columns/expansion";
import tree from "../columns/tree";

const columnMap = { checkbox, index, expansion, tree };

export default function(column) {
  let { type } = column;
  let extColumn = columnMap[type];
  if (extColumn) {
    Object.assign(column, extColumn);
  }
  column.isLeaf = true;
}
