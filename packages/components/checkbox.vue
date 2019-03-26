<template>
  <label :class="['kv-datagrid-checkbox',{
      'kv-datagrid-checkbox-checked':value,
      'kv-datagrid-checkbox-indeterminate':!value&&indeterminate,
      'kv-datagrid-checkbox-disabled':disabled
      }]">
    <span class="kv-datagrid-checkbox--inner">
      <input class="kv-datagrid-checkbox--inner-input"
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

