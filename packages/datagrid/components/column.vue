<script>
export default {
  data() {
    return {
      datagrid: this.$parent.$parent
    };
  },
  props: {
    column: { type: Object }
  },
  render(h) {
    let { title, type, renderHeader } = this.column;
    if (renderHeader) {
      let dictionary = this.datagrid.dictionary;
      let column = this.column;
      return renderHeader.call(this.datagrid, h, { column, dictionary });
    }
    // switch (type) {
    //   case "checkbox":
    //     return (
    //       <TableCheckbox
    //         indeterminate={this.datagrid.indeterminate}
    //         value={this.datagrid.checkedAll}
    //         nativeOn-click={this.handleCheckClick}
    //       />
    //     );
    //   default:
    //     return <div>{title}</div>;
    // }
    return <div>{title}</div>;
  }
  // methods: {
  //   handleCheckClick() {
  //     this.datagrid.checkedAll = !this.datagrid.checkedAll;
  //     this.datagrid.indeterminate = false;
  //     this.datagrid.dataSource.map(row => {
  //       row.checked = this.datagrid.checkedAll;
  //     });
  //   }
  // }
};
</script>
