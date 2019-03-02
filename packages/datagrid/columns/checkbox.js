import Checbox from "../components/checkbox";

export default {
  type: "checkbox",
  renderHeader(h, { dictionary }) {
    return (
      <Checbox
        indeterminate={dictionary.indeterminate}
        value={dictionary.checkAll}
        on-click={() => {
          this.$set(dictionary, "checkAll", !dictionary.checkAll);
          this.$set(dictionary, "indeterminate", false);
        }}
      />
    );
  }

  // handleCheckClick() {
  //   console.log(1);

  // this.datagrid.checkedAll = !this.datagrid.checkedAll;
  // this.datagrid.indeterminate = false;
  // this.datagrid.dataSource.map(row => {
  //   row.checked = this.datagrid.checkedAll;
  // });
  // }
  // renderBody(h, { index, value, column, row }) {},
  // renderFooter(h, { index, value, column, row }) {}
};
