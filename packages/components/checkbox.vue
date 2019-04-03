<template>
  <label :class="['kv-table-checkbox',{
      'kv-table-checkbox-checked':value,
      'kv-table-checkbox-indeterminate':!value&&indeterminate,
      'kv-table-checkbox-disabled':disabled
      }]">
    <span class="kv-table-checkbox--inner">
      <input class="kv-table-checkbox--inner-input"
             type="checkbox"
             v-model="model"
             :disabled="disabled">
    </span>
  </label>

</template>

<script>
export default {
  props: {
    value: { type: Boolean, default: false },
    indeterminate: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>

