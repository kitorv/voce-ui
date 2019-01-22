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
      let { width, minWidth } = this.column;
      if (typeof width === "number") {
        width = `${width}px`;
      }
      if (typeof minWidth === "number") {
        minWidth = `${minWidth}px`;
      }
      console.log({ width, minWidth });

      return { width, minWidth:width };
    }
  }
};
</script>

