/* eslint-disable no-unused-vars */
import TableCheckbox from "../components/checkbox";

export default {
  width: 40,
  columnFormatter: function(h) {
    <TableCheckbox
      indeterminate={this.indeterminate}
      value={this.checkedAll}
      nativeOn-click={() => {
        this.checkedAll = !this.checkedAll;
      }}
    />;
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
