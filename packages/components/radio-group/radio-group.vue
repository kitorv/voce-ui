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
    return { kvRadioGroup: this };
  },
  props: {
    value: {
      type: [Number, String],
      required: true
    },
    disabled: Boolean
  }
};
</script>