<script>
export default {
  props: {
    column: { type: Object },
    data: { type: Object }
  },
  render(h) {
    let { key } = this.column;
    let { data } = this.data;
    return <div>{data[key]}</div>;
  }
};
</script>
