<template>
  <div class="vk-datagrid">
    <div class="vk-datagrid--header" :style="headerTableStyle">
      <div class="vk-datagrid--header-left"></div>
      <div class="vk-datagrid--header-center">
        <d-header-table :columns="columnRows" :leaf-columns="leafColumns"></d-header-table>
      </div>
      <div class="vk-datagrid--header-right"></div>
    </div>
    <div class="vk-datagird--body">
      <div class="vk-datagrid--body-left"> </div>
      <div class="vk-datagrid--body-center" ref="body">
        <d-body-table :data-source="dataSource" :leaf-columns="leafColumns" @after-render="handleBodyTableAfterRneder"></d-body-table>
      </div>
      <div class="vk-datagrid--body-right"></div>
    </div>
    <div class="vk-datagrid--footer"></div>
  </div>
</template>

<script>
import DHeaderTable from "./datagrid-header";
import DBodyTable from "./datagrid-body";

import { scrollBarSize } from "../utils";

export default {
  components: { DHeaderTable, DBodyTable },
  data() {
    return {
      columnRows: [],
      leafColumns: [],
      leftFixedColumns: [],
      rightFixedColumns: [],
      scrollBarSize: scrollBarSize(),
      showVerticalScrollBar: false
    };
  },
  props: {
    columns: { required: true, type: Array },
    dataSource: { type: Array }
  },
  computed: {
    headerTableStyle() {
      if (!this.showVerticalScrollBar) return;
      return { "padding-right": `${this.scrollBarSize}px` };
    }
  },
  methods: {
    // 初始化配置属性处理
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

      // 列先进行固定列的排序
      this.sortFixedColumns();
      // 列转换数据格式为表格渲染行格式
      const rows = getHeaderRows(this.columns);

      // 设置单元格的colspan和rowspan
      const setCellSize = column => {
        const { children, fixed } = column;
        if (Array.isArray(children) && children.length > 0) {
          let colSpan = 0;
          children.forEach(subColumn => {
            subColumn.fixed = fixed;
            setCellSize(subColumn);
            colSpan += subColumn.colSpan;
          });
          column.colSpan = colSpan;
          column.rowSpan = 1;
        } else {
          if (fixed === "left") {
            this.leftFixedColumns.push(column);
          }
          if (fixed === "right") {
            this.rightFixedColumns.push(column);
          }
          column.colSpan = 1;
          column.rowSpan = rows.length - column.level + 1;
        }
      };

      // 从顶部递归到底部设置单元格的占位大小
      this.columns.forEach(col => {
        setCellSize(col);
      });

      // 设置初始话数据
      this.columnRows = rows;
      this.leafColumns = leafColumns;

      console.log(this.leftFixedColumns);
      console.log(this.rightFixedColumns);
    },
    // 根据固定列属性fixed排序'left'排左侧'right'排右侧其他的排中间
    sortFixedColumns() {
      const sortOrderProps = ["left", undefined, "right"];
      this.columns.sort((x, y) => {
        const xIndex = sortOrderProps.indexOf(x.fixed);
        const yIndex = sortOrderProps.indexOf(y.fixed);
        return Math.abs(xIndex) - Math.abs(yIndex);
      });
    },
    // 表体内容渲染完数据，根据是否包含滚动条处理
    handleBodyTableAfterRneder() {
      // 无数据滚动条不存在
      if (!this.dataSource || this.dataSource.length < 1) {
        this.showVerticalScrollBar = false;
        return;
      }
      // 计算宽度获取是否存在滚动条
      let bodyEl = this.$refs.body;
      this.showVerticalScrollBar = bodyEl.scrollHeight - bodyEl.clientHeight;
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

.vk-datagrid--header-center {
  width: 100%;
  overflow: hidden;
}

.vk-datagrid--body-center {
  height: 200px;
  overflow: auto;
}
</style>

