<script>
import DCheckbox from "./datagrid-checkbox";

export default {
  components: { DCheckbox },
  inject: ["datagrid"],
  props: {
    column: { required: true, type: Object },
    data: { required: true, type: Object }
  },
  render(h) {
    let { key, type } = this.column;
    let data = this.data.data || this.data;
    if (!type) return <div>{data[key]}</div>;
    switch (type) {
      case "checkbox":
        return this.checkboxRender(h, this.data);
      default:
        //   TODO动态化配置
        return <div>{data[key]}</div>;
    }
  },
  methods: {
    handleCheckClick() {
      let row = this.data;
      row.checked = !row.checked;
      let checkNumber = 0;
      let dataRows = this.datagrid.dataRows;
      dataRows.forEach(row => {
        if (!row.checked) return;
        checkNumber += 1;
      });
      if (checkNumber == dataRows.length) {
        this.datagrid.checked = true;
        this.datagrid.indeterminate = false;
      } else {
        this.datagrid.checked = false;
        this.datagrid.indeterminate = checkNumber > 0;
      }
    },
    checkboxRender(h, column) {
      return (
        <d-checkbox
          value={this.data.checked}
          nativeOn-click={this.handleCheckClick}
        />
      );
    }
  }
};
</script>
