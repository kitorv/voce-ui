<template>
  <li v-if="visible"
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
  inject: ["kvSelect"],
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
      const selectValue = this.kvSelect.value;
      if (Array.isArray(selectValue)) {
        return selectValue.includes(this.value);
      }
      return selectValue === this.value;
    }
  },
  methods: {
    handleClick() {
      if (this.disabled) return;
      this.kvSelect.handleOptionClick(this);
    },
    select(select) {
      let selectValue = this.kvSelect.value;
      const optionValue = this.value;
      if (Array.isArray(selectValue)) {
        if (selectValue.includes(optionValue)) return;
        selectValue.push(optionValue);
        this.kvSelect.$emit("input", selectValue);
        return;
      }
      this.kvSelect.$emit("input", optionValue);
    },
    unselect() {
      let selectValue = this.kvSelect.value;
      if (Array.isArray(selectValue)) {
        const index = selectValue.findIndex(m => m === this.value);
        if (index < 0) return;
        selectValue.splice(index, 1);
        this.kvSelect.$emit("input", selectValue);
        return;
      }
    }
  },
  created() {
    this.kvSelect.options.push(this);
  }
};
</script>