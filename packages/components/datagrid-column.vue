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
    if (!type) return <span>{title}</span>;

    switch (type) {
      case "checkbox":
        return this.renderChechbox(h, this.data);
      default:
        //   TODO动态化配置
        return <span>{title}</span>;
    }
  },
  methods: {
    renderChechbox(h, column) {
      let datagrid = this.datagrid;
      return (
        <d-checkbox
          indeterminate={datagrid.indeterminate}
          value={datagrid.checked}
          nativeOn-click={datagrid.checkAll}
        />
      );
    }
  }
};
</script>
