<template>
  <table class="vk-datagrid--body-table"
         cellspacing="0"
         cellpadding="0"
         border="0">
    <colgroup is="d-colgroup"
              :leaf-columns="leafColumns"></colgroup>
    <tr v-for="(row, index) in dataSource"
        :key="index">
      <td v-for="({key}, index) in leafColumns"
          :key="index"
          :class="{'vk-datagrid--visibility-hidden':hideCell(key)}">
        {{row[key]}}
      </td>
    </tr>
  </table>
</template>

<script>
import DColgroup from "./datagrid-colgroup";

export default {
  components: { DColgroup },
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
    hideCell(key) {
      if (this.fixedColumnKeys.length < 1) return false;
      return !this.fixedColumnKeys.includes(key);
    }
  },
  mounted() {
    this.$emit("after-render");
  }
};
</script>

