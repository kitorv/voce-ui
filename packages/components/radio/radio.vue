<template>
  <label :class="['kv-radio',{'kv-radio--checked':model},{'kv-radio--disabled':isDisabled}]">
    <span class="kv-radio--check">
      <span class="kv-radio--check-inner"></span>
      <input type="radio"
             :v-model="model"
             :value="value" />
    </span>
    <span class="kv-radio--text"
          v-if="$slots.default">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "KvRadio",
  componentName: "KvRadio",
  inject: ['kvRadioGroup'],
  props: {
    value: {
      type: [Number, String],
      required: true
    },
    disabled: Boolean
  },
  computed: {
    model: {
      get() {
        return this.kvRadioGroup.value === this.value;
      },
      set(value) {
        this.kvRadioGroup.value = value
        this.kvRadioGroup.$emit("input", checkValue);
      }
    },
    isDisabled() {
      if (this.kvRadioGroup) {
        return this.kvRadioGroup.disabled || this.disabled
      }
      return this.disabled
    }
  }
}
</script>
