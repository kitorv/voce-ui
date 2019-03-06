<script>
export default {
  props: {
    column: { type: Object }
  },
  render(h) {
    let { title, columnFormatter } = this.column;
    if (columnFormatter) {
      return columnFormatter(h, { column: this.column });
    }
    return <div>{title}</div>;
  }
};
</script>
