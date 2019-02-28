<script>
export default {
  props: {
    column: { type: Object }
  },
  render(h) {
    let { title } = this.column;
    return <div>{title}</div>;
  }
};
</script>
