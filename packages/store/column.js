/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import TableHeaderCheckbox from "../components/header-checkbox.vue";
import TableBodyCheckbox from "../components/body-checkbox";
import TableBodyExpansion from "../components/body-expansion";

export default function(column) {
  let { type } = column;
  switch (type) {
    case "checkbox":
      column.width = 40;
      column.sort = false;
      column.columnFormatter = h => <TableHeaderCheckbox datagrid={this} />;
      column.formatter = (h, { row }) => <TableBodyCheckbox datagrid={this} row={row} />;
      break;
    case "expansion":
      column.sort = false;
      column.width = 40;
      column.formatter = (h, { row }) => <TableBodyExpansion row={row} />;
      break;
    case "index":
      column.sort = false;
      column.width = 40;
      column.columnFormatter = h => <div>#</div>;
      column.formatter = (h, { index }) => <div>{index}</div>;
      break;
  }
}
