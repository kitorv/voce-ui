<script>
import Checkbox from "./checkbox";

export default {
  data() {
    return {
      datagrid: this.$parent.$parent
    };
  },
  props: {
    column: { type: Object },
    row: { type: Object },
    footer: { type: Boolean, default: false },
    index: { type: Number, default: -1 }
  },
  render(h) {
    let { key, title, type, renderBody, renderFooter } = this.column;
    switch (type) {
      case "checkbox":
        return this.checkbox();
      default:
        let { data } = this.row;
        let renderParams = {
          row: this.row,
          column: this.column,
          value: data[key],
          index: this.index,
          dictionary: this.datagrid.dictionary
        };
        if (renderBody && !this.footer) {
          return renderBody.call(this.datagrid, h, renderParams);
        }
        if (renderFooter && this.footer) {
          return renderBody.call(this.datagrid, h, renderParams);
        }
        return <div>{data[key]}</div>;
    }
  },
  methods: {
    checkbox() {
      if (this.footer) {
        return <div />;
      }
      return (
        <Checkbox
          value={this.row.checked}
          nativeOn-click={() => {
            let row = this.row;
            row.checked = !row.checked;
            let rowList = this.datagrid.dataSource;
            let checkedRows = rowList.filter(row => row.checked);
            if (rowList.length == checkedRows.length) {
              this.datagrid.checkedAll = true;
              this.datagrid.indeterminate = false;
            } else {
              this.datagrid.checkedAll = false;
              this.datagrid.indeterminate = checkedRows.length > 0;
            }
          }}
        />
      );
    }
  }
};
</script>
