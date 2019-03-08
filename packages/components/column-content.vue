<script>
export default {
  props: {
    column: { type: Object }
  },
  render(h) {
    let { title, columnFormatter } = this.column;
    let colElement = title;
    if (columnFormatter) {
      colElement = columnFormatter(h, { column: this.column });
    }
    return <div class="kv-datagird--column">{colElement}</div>;
  }
};
</script>
