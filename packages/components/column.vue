<script>
export default {
  props: {
    column: { type: Object }
  },
  render(h) {
    let { title, headerFormatter } = this.column;
    if (headerFormatter) {
      return headerFormatter(h, { column: this.column });
    }
    return <div>{title}</div>;
  }
};
</script>
