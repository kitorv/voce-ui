<template>
  <div :class="['kv-textarea',{
        'kv-textarea-disabled':disabled
    }]">
    <textarea class="kv-textarea--content"
              v-bind="$attrs"
              :disabled="disabled"
              :style="textareaStyle"
              :rows="rows"
              v-model="model"
              @focus="handleFocus"
              @blur="handleBlur"
              @change="handleChange"
              ref="textarea">
        </textarea>
  </div>
</template>

<script>
import calcTextareaHeight from './calcTextareaHeight.js'

export default {
  name: "KvTextarea",
  componentName: "KvTextarea",
  data() {
    return {
      textareaStyle: {}
    }
  },
  props: {
    value: [String, Number],
    disabled: Boolean,
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    rows: {
      type: Number,
      default: 2
    }
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
    resizeTextarea() {
      if (!this.$refs.textarea || !this.autosize) return
      const minRows = this.autosize.minRows || this.rows;
      const maxRows = this.autosize.maxRows;
      this.textareaStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
    },
    handleFocus(event) {
      this.$emit("focus", event);
    },
    handleBlur(event) {
      this.$emit("blur", event);
    },
    handleChange(event) {
      this.$emit("change", event.target.value, event);
    }
  },
  watch: {
    model() {
      this.resizeTextarea()
    }
  },
  mounted() {
    this.resizeTextarea()
  }
};
</script>

