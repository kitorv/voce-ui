<script>
import TableCheckbox from "./checkbox";

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
    let { title, type } = this.column;
    switch (type) {
      case "checkbox":
        return (
          <TableCheckbox
            indeterminate={this.datagrid.indeterminate}
            value={this.datagrid.checkedAll}
            nativeOn-click={this.handleCheckClick}
          />
        );
      default:
        return <div>{title}</div>;
    }
  },
  methods: {
    handleCheckClick() {
      this.datagrid.checkedAll = !this.datagrid.checkedAll;
      this.datagrid.indeterminate = false;
      this.datagrid.dataSource.map(row => {
        row.checked = this.datagrid.checkedAll;
      });
    }
  }
};
</script>
