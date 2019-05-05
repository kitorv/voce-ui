<template>
  <label :class="['kv-checkbox',{'kv-checkbox--checked':model},{'kv-checkbox--disabled':isDisabled}]">
    <span class="kv-checkbox--check">
      <span class="kv-checkbox--check-inner"></span>
      <input type="checkbox"
             v-model="model"
             :value="value"
             :disabled="isDisabled"
             @change="handleValueChange" />
    </span>
    <span class="kv-checkbox--text"
          v-if="$slots.default">
      <slot></slot>
    </span>
  </label>
</template>
<script>
export default {
  name: "KvCheckbox",
  componentName: "KvCheckbox",
  inject: {
    kvCheckboxGroup: { default: "" }
  },
  props: {
    value: [Boolean, Number, String],
    disabled: Boolean
  },
  computed: {
    model: {
      get() {
        if ({}.toString.call(this.value) === "[object Boolean]") {
          return this.value;
        }
        if (!this.kvCheckboxGroup) return this.value;
        return this.kvCheckboxGroup.value.includes(this.value);
      },
      set(value) {
        if (!this.kvCheckboxGroup) {
          this.$emit("input", value);
          return;
        }
        let checkValue = this.kvCheckboxGroup.value;
        const index = checkValue.findIndex(v => v == this.value);
        if (index > -1) {
          checkValue.splice(index, 1);
        } else {
          checkValue.push(this.value);
        }
        this.kvCheckboxGroup.$emit("input", checkValue);
      }
    },
    isDisabled() {
      if (this.kvCheckboxGroup) {
        return this.kvCheckboxGroup.disabled || this.disabled
      }
      return this.disabled
    }
  },
  methods: {
    handleValueChange(event) {
      const value = event.target.checked;
      this.$emit('change', value, event);
    }
  }
};
</script>
