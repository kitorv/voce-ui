<template>
  <div class="kv-radio-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "KvRadioGroup",
  componentName: "KvRadioGroup",
  provide() {
    return { kvRadioGroup: this }
  },
  props: {
    value: [Number, String],
    disabled: Boolean
  }
};
</script>