<template>
  <div class="kv-dropdown"
       v-clickoutside="handleClickOutSide">
    <div class="kv-dropdown--selection"
         @click="handleSelectionClick">
      <slot name="selection"></slot>
    </div>
    <div class="kv-dropdown--panel"
         v-show="visable">
      <slot name="panel"></slot>
    </div>
  </div>
</template>
<script>
import clickoutside from '../../directives/clickoutside.js'

export default {
  name: 'KvDropdown',
  componentName: 'KvDropdown',
  directives: { clickoutside },
  props: {
    visable: Boolean
  },
  methods: {
    handleClickOutSide() {
      this.$emit("update:visable", false)
    },
    handleSelectionClick() {
      this.$emit("update:visable", !this.visable)
    }
  }
}    
</script>