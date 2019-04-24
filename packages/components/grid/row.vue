<script>
export default {
  name: 'KvRow',
  componentName: 'KvRow',
  provide() {
    return { kvRow: this }
  },
  props: {
    tag: { type: String, default: 'div' },
    gutter: Number,
    type: String,
    justify: { type: String, default: 'start' },
    align: { type: String, default: 'top' }
  },
  computed: {
    style() {
      const css = {};
      if (this.gutter) {
        css.marginLeft = `-${this.gutter / 2}px`;
        css.marginRight = css.marginLeft;
      }
      return css;
    }
  },
  render(h) {
    return h(this.tag, {
      class: [
        'kv-row',
        this.justify !== 'start' ? `kv-row--justify-${this.justify}` : '',
        this.align !== 'top' ? `kv-row--align-${this.align}` : '',
        { 'kv-row--flex': this.type === 'flex' }
      ],
      style: this.style
    }, this.$slots.default);
  }
};
</script>

