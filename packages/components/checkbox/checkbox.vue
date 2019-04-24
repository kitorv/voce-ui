<template>
  <label :class="['kv-checkbox']">
    <span class="kv-checkbox--check">
      <span class="kv-checkbox--check-inner"></span>
      <input type="checkbox"
             v-model="model"
             :value="label" />
    </span>
  </label>
</template>
<script>
export default {
  name: "KvCheckbox",
  componentName: "KvCheckbox",
  data() {
    return {
      checkboxGroup: null
    }
  },
  computed: {
    kvCheckboxGroup() {
      if (this.checkboxGroup) return this.checkboxGroup
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== 'KvCheckboxGroup') {
          parent = parent.$parent;
        } else {
          this.checkboxGroup = parent;
          return this.checkboxGroup
        }
      }
    },
    model: {
      get() {
        if (this.kvCheckboxGroup) {
          return this.kvCheckboxGroup.value.includes(this.value)
        }
        return value
      },
      set(value) {
        if (!this.kvCheckboxGroup) {
          this.$emit('input', value);
          return
        }
        const index = this.kvCheckboxGroup.findIndex(v => v == this.value)
        if (index > -1) {
          this.kvCheckboxGroup.value.splice(index, 1)
        } else {
          this.kvCheckboxGroup.value.push(this.value)
        }
        this.kvCheckboxGroup.$emit('input', this.kvCheckboxGroup.value)
      }
    },
  },
  props: {
    value: [Boolean, Number, String]
  }
}
</script>
