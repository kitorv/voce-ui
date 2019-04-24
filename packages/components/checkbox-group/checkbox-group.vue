<template>
  <div class="kv-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "KvCheckboxGroup",
  componentName: "KvCheckboxGroup",
  props: {
    value: {
      type: Array,
      default: []
    },
    disabled: Boolean
  }
};
</script>