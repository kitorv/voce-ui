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
    return {}
  },
  computed: {
    model: {
      get() {
        if ({}.toString.call(this.value) === '[object Boolean]') {
          return this.value;
        }
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  },
  props: {
    value: [Boolean, Number, String]
  }
}
</script>
