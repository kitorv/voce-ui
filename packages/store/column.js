/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// import TableHeaderCheckbox from "../components/header-checkbox.vue";
// import TableBodyCheckbox from "../components/body-checkbox";
// import TableBodyExpansion from "../components/body-expansion";
import TableCheckbox from "../components/checkbox.vue";

export default function(column) {
  let { type } = column;
  switch (type) {
    case "checkbox":
      Object.assign(column, {
        width: 40,
        sort: false,
        columnFormatter: h => (
          <TableCheckbox
            indeterminate={this.indeterminate}
            value={this.checkedAll}
            nativeOn-click={() => {
              let checkedAll = !this.checkedAll;
              this.checkedAll = checkedAll;
              this.indeterminate = false;
              this.dataSource.map(row => {
                row.checked = checkedAll;
              });
            }}
          />
        ),
        formatter: (h, { row }) => (
          <TableCheckbox
            value={row.checked}
            nativeOn-click={() => {
              let row = this.row;
              row.checked = !row.checked;
              let checkedRows = this.dataSource.filter(row => row.checked);
              if (this.dataSource.length == checkedRows.length) {
                this.checkedAll = true;
                this.indeterminate = false;
              } else {
                this.checkedAll = false;
                this.indeterminate = checkedRows.length > 0;
              }
            }}
          />
        )
      });
      break;
    // case "expansion":
    //   column.sort = false;
    //   column.width = 40;
    //   column.formatter = (h, { row }) => <TableBodyExpansion row={row} />;
    //   break;
    // case "index":
    //   column.sort = false;
    //   column.width = 40;
    //   column.columnFormatter = h => <div>#</div>;
    //   column.formatter = (h, { index }) => <div>{index}</div>;
    //   break;
  }
}
