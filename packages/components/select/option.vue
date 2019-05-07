<template>
  <li v-show="visible"
      :class="['kv-option',
              {'kv-option--selected':selected},
              {'kv-option--disabled':disabled}]"
      @click="handleClick">
    <slot>{{ text }}</slot>
  </li>
</template>
<script>
export default {
  name: "KvOption",
  componentName: "KvOption",
  inject: {
    kvSelect: { default: '' },
    kvOptionGroup: { default: '' }
  },
  data() {
    return {
      visible: true
    };
  },
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    label: {
      type: [String, Number]
    },
    disabled: Boolean
  },
  computed: {
    text() {
      if (this.label != undefined) return this.label;
      return this.value;
    },
    selected() {
      return this.kvSelect.selectValue.includes(this.value)
    }
  },
  methods: {
    handleClick() {
      if (this.disabled) return;
      this.kvSelect.handleOptionClick(this);
    },
    filterQuery(queryText, func) {
      if (typeof func === "function") {
        this.visible = func(this)
      } else {
        const parsedValue = queryText.replace(
          /(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g,
          "\\$1"
        );
        this.visible = new RegExp(parsedValue, "i").test(this.text);
      }
      return this.visible
    }
  },
  watch: {
    visible(value) {
      if (!this.kvOptionGroup) return
      const children = this.kvOptionGroup.$children
      let visibleNumber = 0
      children.forEach(child => {
        if (!child.visible) return
        visibleNumber++
      });
      this.kvOptionGroup.visible = visibleNumber === children.length
    }
  },
  created() {
    const { value, text } = this
    this.kvSelect.dataList[value] = { value, text }
  }
};
</script>