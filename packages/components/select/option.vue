<template>
  <li class="kv-select-option"
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
    }
  },
  methods: {
    handleClick() {
      this.kvSelect.setSelectText(this.text)
      this.kvSelect.visable = false
    }
  },
};
</script>