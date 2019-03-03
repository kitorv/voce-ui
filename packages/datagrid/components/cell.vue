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
    footer: { type: Boolean, default: false },
    index: { type: Number, default: -1 }
  },
  render(h) {
    let { key } = this.column;
    let { data } = this.row;

    let { title, type, renderBody, renderFooter } = this.column;
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
};
</script>
