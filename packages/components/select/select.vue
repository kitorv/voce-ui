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
      selectText: ""
    }
  },
  props: {
    multiple: Boolean,
    value: {
      type: [Number, String, Array],
      required: true
    },
    valueKey: {
      type: String,
      default: 'value'
    },
  },
  methods: {
    handleOptionClick(kvOption) {
      let value = this.value
      const optionValue = kvOption.value
      if (!Array.isArray(value)) {
        this.selectText = kvOption.text
        this.visable = false
        this.$emit('input', optionValue)
        return
      }
      const optionIndex = this.value.findIndex(m => m === optionValue)
      if (optionIndex > -1) {
        value.splice(optionIndex, 1);
      } else {
        if (this.multiple) {
          value.push(optionValue)
        } else {
          value = [optionValue]
        }
      }
      this.selectText = kvOption.text = value.join(",")
      this.$emit('input', value)
    }
  }
}
</script>

