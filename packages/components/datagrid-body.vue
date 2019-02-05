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
      <td v-for="({key,type}, index) in leafColumns"
          :key="index"
          :class="{'vk-datagrid--visibility-hidden':hideCell(key)}">
        <d-checkbox v-if="type=='checkbox'"
                    :value="row.checked"
                    @click.native="$parent.checkRow(row)"></d-checkbox>
        <template>
          {{row.data[key]}}
        </template>
      </td>
    </tr>
  </table>
</template>

<script>
import DColgroup from "./datagrid-colgroup";
import DCheckbox from "./datagrid-checkbox";

export default {
  components: { DColgroup, DCheckbox },
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

