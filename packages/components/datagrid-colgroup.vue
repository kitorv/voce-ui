<template>
  <colgroup>
    <col v-for="(column, index) in leafColumns" :key="index" :style="getStyle(column)">
  </colgroup>
</template>

<script>
export default {
  props: {
    leafColumns: { required: true, type: Array }
  },
  methods: {
    getStyle({ width }) {
      if (typeof width === "number") {
        width = `${width}px`;
      }
      return { width, minWidth: width };
    }
  }
};
</script>

