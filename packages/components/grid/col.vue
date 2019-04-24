<script>
export default {
  name: "KvCol",
  componentName: "KvCol",
  props: {
    span: { type: Number, default: 24 },
    tag: { type: String, default: "div" },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.componentName !== "KvRow") {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    }
  },
  render(h) {
    let classList = [];
    let style = {};
    if (this.gutter) {
      style.paddingLeft = this.gutter / 2 + "px";
      style.paddingRight = style.paddingLeft;
    }
    ["span", "offset", "pull", "push"].forEach(prop => {
      if (this[prop] || this[prop] === 0) {
        classList.push(
          prop !== "span"
            ? `kv-col-${prop}-${this[prop]}`
            : `kv-col-${this[prop]}`
        );
      }
    });
    ["xs", "sm", "md", "lg", "xl"].forEach(size => {
      if (typeof this[size] === "number") {
        classList.push(`kv-col-${size}-${this[size]}`);
        return;
      }
      if (typeof this[size] === "object") {
        let props = this[size];
        Object.keys(props).forEach(prop => {
          classList.push(
            prop !== "span"
              ? `kv-col-${size}-${prop}-${props[prop]}`
              : `kv-col-${size}-${props[prop]}`
          );
        });
      }
    });
    return h(
      this.tag,
      {
        class: ["kv-col", classList],
        style
      },
      this.$slots.default
    );
  }
};
</script>
