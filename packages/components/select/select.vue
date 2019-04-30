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
      if (Array.isArray(this.value)) {
        // 多选
      } else {
        // 单选
        this.selectText = kvOption.text
        this.visable = false
        this.$emit('imput', kvOption.value)
      }
      // this.selectText = option.text

    }
  }
}
</script>

