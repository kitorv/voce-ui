<template>
  <kv-dropdown :class="['kv-select',{'kv-select--disabled':disabled}]"
               :visable.sync="visable"
               :disabled="disabled">
    <div slot="selection"
         class="kv-select--selection">
      <input class="kv-select--input"
             v-if="mode!=='tags'"
             v-model="selectText"
             :placeholder="placeholder"
             :disabled="disabled" />
      <div v-else
           class="kv-select--tags">
        <span v-for="(option, index) in selectText"
              :key="index"
              class="kv-select--tags-item">{{option.text}}</span>
      </div>
      <span class="kv-select--icon">
        <slot name="icon">
          <i class="kv-icon-down"></i>
        </slot>
      </span>
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
    placeholder: {
      type: String,
      default: "请选择"
    },
    disabled: Boolean
  },
  computed: {
    selectText() {
      const selectValue = Array.isArray(this.value) ? this.value : [this.value]
      const selectText = []
      if (this.mode == "tags") {
        return this.options.filter(m => selectValue.includes(m.value))
      }
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

