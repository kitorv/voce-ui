<script>
export default {
  props: {
    column: { required: true, type: Object }
  },
  render(h) {
    let { title } = this.column;
    return <div>{title}</div>;
  }
};
</script>
