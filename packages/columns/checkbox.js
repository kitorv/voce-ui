/* eslint-disable no-unused-vars */
import TableCheckbox from "../components/checkbox";

export default {
  width: 40,
  columnFormatter: function(h) {
    return (
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
    );
  },
  formatter: function(h, { row }) {
    return (
      <TableCheckbox
        value={row.checked}
        nativeOn-click={() => {
          row.checked = !row.checked;
        }}
      />
    );
  }
};
