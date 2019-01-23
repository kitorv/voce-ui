<template>
  <div class="vk-datagrid">
    <div class="vk-datagrid--header">
      <div class="vk-datagrid--header-left"></div>
      <div class="vk-datagrid--header-center">
        <d-header-table :columns="columnRows" :leaf-columns="leafColumns"></d-header-table>
      </div>
      <div class="vk-datagrid--header-right"></div>
    </div>
    <div class="vk-datagird--body">
      <div class="vk-datagrid--body-left"> </div>
      <div class="vk-datagrid--body-center">
        <d-body-table :data-source="dataSource" :leaf-columns="leafColumns"></d-body-table>
      </div>
      <div class="vk-datagrid--body-right"></div>
    </div>
    <div class="vk-datagrid--footer"></div>
  </div>
</template>

<script>
import DHeaderTable from "./datagrid-header";
import DBodyTable from "./datagrid-body";

export default {
  components: { DHeaderTable, DBodyTable },
  data() {
    return {
      columnRows: [],
      leafColumns: []
    };
  },
  props: {
    columns: { required: true, type: Array },
    dataSource: { type: Array }
  },
  methods: {
    renderOptions() {
      const leafColumns = [];
      // 递归循环将列数据对象转化为表头行数据集合
      const getHeaderRows = (columns, index = 0, rows, level = 0) => {
        // 行数据和当前行数据设置默认值
        rows = rows || [];
        rows[index] = rows[index] || [];
        // 循环列数据进行列转行数据处理
        columns.forEach(column => {
          const { children } = column;
          if (Array.isArray(children) && children.length > 0) {
            getHeaderRows(children, index + 1, rows, level + 1);
          }
          column.level = level + 1;
          if (column.key) {
            leafColumns.push(column);
          }
          rows[index].push(column);
        });
        // 过滤掉没有数据的行
        return rows.filter(row => row.length > 0);
      };
      const rows = getHeaderRows(this.columns);

      // 设置单元格的colspan和rowspan
      const setCellSize = column => {
        const { children } = column;
        if (Array.isArray(children) && children.length > 0) {
          let colSpan = 0;
          children.forEach(subColumn => {
            setCellSize(subColumn);
            colSpan += subColumn.colSpan;
          });
          column.colSpan = colSpan;
          column.rowSpan = 1;
        } else {
          column.colSpan = 1;
          column.rowSpan = rows.length - column.level + 1;
        }
      };
      this.columns.forEach(col => {
        setCellSize(col);
      });

      // 设置初始话数据
      this.columnRows = rows;
      this.leafColumns = leafColumns;
    }
  },
  created() {
    this.renderOptions();
  }
};
</script>

<style lang="scss" scoped>
.vk-datagrid {
  zoom: 1;
  box-sizing: border-box;
}

// .vk-datagrid--header {
//   overflow: hidden;
//   width: 100%;
// }
</style>

