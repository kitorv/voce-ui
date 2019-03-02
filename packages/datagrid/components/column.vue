<script>
export default {
  props: {
    column: { type: Object }
  },
  render(h) {
    let { title, renderHeader } = this.column;
    if (renderHeader) {
      return renderHeader(h, this.column);
    }
    return <div>{title}</div>;
  }
};
</script>
