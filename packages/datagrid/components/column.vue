<script>
import Checkbox from "./checkbox";

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
    switch (type) {
      case "checkbox":
        return this.checkbox();
      default:
        if (renderHeader) {
          let dictionary = this.datagrid.dictionary;
          let column = this.column;
          return renderHeader.call(this.datagrid, h, { column, dictionary });
        }
        return <div>{title}</div>;
    }
  },
  methods: {
    checkbox() {
      return (
        <Checkbox
          indeterminate={this.datagrid.indeterminate}
          value={this.datagrid.checkedAll}
          nativeOn-click={() => {
            let checkedAll = !this.datagrid.checkedAll;
            this.datagrid.checkedAll = checkedAll;
            this.datagrid.indeterminate = false;
            this.datagrid.dataSource.map(row => {
              row.checked = checkedAll;
            });
          }}
        />
      );
    }
  }
};
</script>
