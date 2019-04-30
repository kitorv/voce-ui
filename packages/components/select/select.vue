<template>
  <kv-dropdown class="kv-select"
               :visable.sync="visable">
    <div slot="selection">
      <input class="kv-select--input"
             v-model="selectText" />
    </div>
    <ul slot="panel"
        class="kv-select--dropdown">
      <slot></slot>
    </ul>
  </kv-dropdown>
</template>

<script>
import KvDropdown from "../dropdown/dropdown"

export default {
  name: 'KvSelect',
  componentName: 'KvSelect',
  provide() {
    return { kvSelect: this }
  },
  data() {
    return {
      visable: false,
      options: []
    }
  },
  props: {
    mode: String,
    value: {
      type: [Number, String, Array],
      required: true
    },
    valueKey: {
      type: String,
      default: 'value'
    },
  },
  computed: {
    selectText() {
      const selectValue = Array.isArray(this.value) ? this.value : [this.value]
      const selectText = []
      this.options.forEach(option => {
        if (!selectValue.includes(option.value)) return
        selectText.push(option.text)
      });
      return selectText.join(".")
    }
  },
  methods: {
    handleOptionClick(kvOption) {
      let value = this.value
      const optionValue = kvOption.value
      if (!Array.isArray(value)) {
        this.visable = false
        this.$emit('input', optionValue)
        return
      }
      const optionIndex = this.value.findIndex(m => m === optionValue)
      if (optionIndex > -1) {
        value.splice(optionIndex, 1);
      } else {
        if (this.mode) {
          value.push(optionValue)
        } else {
          value = [optionValue]
        }
      }
      this.$emit('input', value)
    }
  }
}
</script>

