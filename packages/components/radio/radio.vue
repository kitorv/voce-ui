<template>
  <label :class="['kv-radio']">
    <span class="kv-radio--check">
      <span class="kv-radio--check-inner"></span>
      <input type="radio" />
    </span>
    <span class="kv-radio--text"
          v-if="$slots.default">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "KvRadio",
  componentName: "KvRadio"
}
</script>
