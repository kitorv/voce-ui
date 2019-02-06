<template>
  <table class="vk-datagrid--body-table"
         cellspacing="0"
         cellpadding="0"
         border="0">
    <colgroup is="d-colgroup"
              :leaf-columns="leafColumns"></colgroup>
    <tr :class="{'vk-datagird--row-hover':row.hover}"
        v-for="(row, index) in dataSource"
        :key="index"
        @mouseenter="handleMouseIn(row)"
        @mouseleave="handleMouseOut(row)">
      <td v-for="(column, index) in leafColumns"
          :key="index"
          :class="{'vk-datagrid--visibility-hidden':hideCell(column)}">
        <d-cell :column="column"
                :data="row"></d-cell>
      </td>
    </tr>
  </table>
</template>

<script>
import DColgroup from "./datagrid-colgroup";
import DCell from "./datagrid-cell";

export default {
  components: { DColgroup, DCell },
  data() {
    return {};
  },
  props: {
    leafColumns: { required: true, type: Array },
    dataSource: { type: Array },
    fixedColumns: { type: Array }
  },
  computed: {
    fixedColumnKeys() {
      return Array.from(this.fixedColumns || [], m => m.key);
    }
  },
  methods: {
    hideCell({ key }) {
      if (this.fixedColumnKeys.length < 1) return false;
      return !this.fixedColumnKeys.includes(key);
    },
    handleMouseIn(row) {
      row.hover = true;
    },
    handleMouseOut(row) {
      row.hover = false;
    }
  },
  mounted() {
    this.$emit("after-render");
  }
};
</script>

