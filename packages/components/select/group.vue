<template>
  <li class="kv-select-option-group">
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
  props: {
    title: String
  }
}
</script>

