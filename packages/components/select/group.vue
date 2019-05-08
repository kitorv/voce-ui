<template>
  <li v-show="visibleOptionNumber>0"
      class="kv-select-option-group">
    <ul class="kv-select-option-group--content">
      <li class="kv-select-option-group--title">{{title}}</li>
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'KvOptionGroup',
  componentName: 'KvOptionGroup',
  provide() {
    return { kvOptionGroup: this }
  },
  data() {
    return {
      visibleOptionNumber: 0
    }
  },
  props: {
    title: String
  }
}
</script>

