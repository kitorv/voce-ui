<template>
  <div :class="['kv-input',
        {'kv-input--disabled':disabled},
        {'kv-input--prepend':$slots.prepend},
        {'kv-input--suffix':$slots.suffix},
        {'kv-input--prefix':$slots.prefix},
        {'kv-input--append':$slots.append}]">
    <div class="kv-input--prepend-inner"
         v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <span class="kv-input--prefix-inner"
          v-if="$slots.prefix">
      <slot name="prefix"></slot>
    </span>
    <input type="text"
           class="kv-input--input"
           v-bind="$attrs"
           v-model="model"
           :disabled="disabled"
           :autocomplete="autocomplete"
           @focus="handleFocus"
           @blur="handleBlur"
           @change="handleChange">
    <span class="kv-input--suffix-inner"
          v-if="$slots.suffix">
      <slot name="suffix"></slot>
    </span>
    <div class="kv-input--append-inner"
         v-if="$slots.append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KvInput',
  componentName: 'KvInput',
  props: {
    value: [Number, String],
    disabled: Boolean,
    autocomplete: { type: String, default: "off" }
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit("input", value)
      }
    }
  },
  methods: {
    handleFocus(event) {
      this.$emit("focus", event);
    },
    handleBlur(event) {
      this.$emit("blur", event);
    },
    handleChange(event) {
      this.$emit("change", event.target.value, event);
    }
  }
}
</script>

