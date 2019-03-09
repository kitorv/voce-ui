<template>
  <tr :class="[{'kv-datagird--row-hover':row.hover},{'kv-datagird--row-selected':row.selected},tableRowClass]"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="handleClick">
    <slot></slot>
  </tr>
</template>

<script>
export default {
  props: {
    row: { type: Object },
    rowIndex: { type: Number }
  },
  computed: {
    tableRowClass() {
      //   if (!this.rowClass) return "";
      //   return this.rowClass.call(null, this.row, this.rowIndex);
    }
  },
  methods: {
    handleMouseEnter() {
      this.row.hover = true;
    },
    handleMouseLeave() {
      this.row.hover = false;
    },
    handleClick() {}
  }
};
</script>
