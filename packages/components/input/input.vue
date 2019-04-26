<template>
  <div :class="['kv-input',
        {'kv-input--disabled':disabled},
        {'kv-input--suffix':$slots.suffix},
        {'kv-input--prefix':$slots.prefix}]">
    <span class="kv-input--prefix-inner"
          v-if="$slots.prefix">
      <slot name="prefix"></slot>
    </span>
    <input type="text"
           class="kv-input--input"
           v-bind="$attrs"
           :disabled="disabled">
    <span class="kv-input--suffix-inner"
          v-if="$slots.suffix">
      <slot name="suffix"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'KvInput',
  componentName: 'KvInput',
  props: {
    disabled: Boolean
  }
}
</script>

