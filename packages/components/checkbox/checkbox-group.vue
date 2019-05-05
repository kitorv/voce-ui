<template>
  <div class="kv-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "KvCheckboxGroup",
  componentName: "KvCheckboxGroup",
  provide() {
    return { kvCheckboxGroup: this }
  },
  props: {
    value: {
      type: Array,
      default: []
    },
    disabled: Boolean
  }
};
</script>