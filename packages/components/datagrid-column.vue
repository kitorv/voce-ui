<script>
import DCheckbox from "./datagrid-checkbox";

export default {
  components: { DCheckbox },
  inject: ["datagrid"],
  props: {
    data: { required: true, type: Object }
  },
  render(h) {
    let { title, type } = this.data;
    if (!type) return <div>{title}</div>;

    switch (type) {
      case "checkbox":
        return this.checkboxRender(h, this.data);
      default:
        //   TODO动态化配置
        return <div>{title}</div>;
    }
  },
  methods: {
    handleCheckClick() {
      this.datagrid.checked = !this.datagrid.checked;
      this.datagrid.indeterminate = false;
      this.datagrid.dataRows.forEach(row => {
        row.checked = this.datagrid.checked;
      });
    },
    checkboxRender(h, column) {
      return (
        <d-checkbox
          indeterminate={this.datagrid.indeterminate}
          value={this.datagrid.checked}
          nativeOn-click={this.handleCheckClick}
        />
      );
    }
  }
};
</script>
