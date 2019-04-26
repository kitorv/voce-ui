<template>
  <div :class="['kv-input',
        {'kv-input--disabled':disabled},
        {'kv-input--prepend':$slots.prepend},
        {'kv-input--suffix':$slots.suffix},
        {'kv-input--prefix':$slots.prefix},
        {'kv-input--append':$slots.append}]">
    <div class="kv-input--prepend-inner"
         v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
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
    <div class="kv-input--append-inner"
         v-if="$slots.append">
      <slot name="append"></slot>
    </div>
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

