<template>
  <col :style="style">
</template>

<script>
export default {
  props: {
    column: Object
  },
  computed: {
    style() {
      let { width } = this.column;
      if (typeof width === "number") {
        width = `${width}px`;
      }
      return { width, minWidth: width };
    }
  }
};
</script>

