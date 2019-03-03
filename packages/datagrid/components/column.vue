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
    return <div>{title}</div>;
  }
};
</script>
