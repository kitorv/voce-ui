<template>
  <col :style="style">
</template>

<script>
export default {
  inject: ['datagrid'],
  props: {
    column: { type: Object }
  },
  computed: {
    style() {
      let { width, type } = this.column
      return {
        width: `${width}px`,
        minWidth: `${width}px`
      }
    }
  }
}
</script>

