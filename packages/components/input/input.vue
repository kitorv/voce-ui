<template>
  <div :class="['kv-input']">
    <input type="text"
           class="kv-input--input"
           v-bind="$attrs">
  </div>
</template>

<script>
export default {
  name: 'KvInput',
  componentName: 'KvInput'
}
</script>

