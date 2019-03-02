<script>
import TableCheckbox from "./checkbox";

export default {
  data() {
    return {
      datagrid: this.$parent.$parent
    };
  },
  props: {
    column: { type: Object },
    row: { type: Object },
    footer: { type: Boolean, default: false }
  },
  render(h) {
    let { key } = this.column;
    let { data } = this.row;

    let { title, type } = this.column;
    switch (type) {
      case "checkbox":
        if (this.footer) {
          return <div />;
        }
        return (
          <TableCheckbox
            value={this.row.checked}
            nativeOn-click={this.handleCheckClick}
          />
        );
      default:
        return <div>{data[key]}</div>;
    }
  },
  methods: {
    handleCheckClick() {
      let row = this.row;
      row.checked = !row.checked;
      let checkNumber = 0;
      let dataSource = this.datagrid.dataSource;
      dataSource.forEach(row => {
        if (!row.checked) return;
        checkNumber += 1;
      });
      if (checkNumber == dataSource.length) {
        this.datagrid.checkedAll = true;
        this.datagrid.indeterminate = false;
      } else {
        this.datagrid.checkedAll = false;
        this.datagrid.indeterminate = checkNumber > 0;
      }
    }
  }
};
</script>
