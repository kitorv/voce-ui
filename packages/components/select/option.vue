<template>
  <li v-if="visible"
      :class="['kv-select-option',
              {'kv-select-option--selected':selected},
              {'kv-select-option--disabled':disabled}]"
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
    }
  },
  created() {
    this.kvSelect.options.push(this);
  }
};
</script>