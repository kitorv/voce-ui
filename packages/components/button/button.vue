<template>
  <button v-bind="$attrs"
          :class="[
          'kv-button',
          `kv-button--type-${type}`,
          `kv-button--color-${color}`,
          `kv-button--size-${size}`,
          {'kv-button--circle':circle},
          iconTypeClass]">
    <i v-if="icon&&iconType==='left'"
       :class="icon"></i>
    <span v-if="$slots.default"
          class="kv-button--text">
      <slot />
    </span>
    <i v-if="icon&&iconType==='right'"
       :class="icon"></i>
  </button>
</template>

<script>
export default {
  name: 'KvButton',
  componentName: 'KvButton',
  props: {
    type: {
      type: String,
      default: 'fill'
    },
    color: {
      type: String,
      default: 'primary'
    },
    icon: String,
    iconType: {
      type: String,
      default: "left"
    },
    circle: Boolean,
    size: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    iconTypeClass() {
      if (!this.$slots.default) return `kv-button--icon-default`;
      return `kv-button--icon-${this.iconType}`;
    }
  }
}
</script>

