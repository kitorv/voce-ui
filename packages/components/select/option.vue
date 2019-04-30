<template>
  <li :class="['kv-select-option',{'kv-select-option--selected':selected}]"
      @click="handleClick">
    <slot>{{ text }}</slot>
  </li>
</template>
<script>
export default {
  name: 'KvOption',
  componentName: 'KvOption',
  inject: ['kvSelect'],
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    label: {
      type: [String, Number]
    }
  },
  computed: {
    text() {
      if (this.label != undefined) return this.label
      return this.value
    },
    selected() {
      const selectValue = this.kvSelect.value
      if (this.kvSelect.multiple) {
        return selectValue.includes(this.value)
      }
      return selectValue === this.value
    }
  },
  methods: {
    handleClick() {
      this.kvSelect.handleOptionClick(this)
    }
  }
};
</script>