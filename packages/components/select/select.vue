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
    value: {}
  },
  methods: {
    setSelectText(value) {
      this.selectText = value
    }
  }
}
</script>

