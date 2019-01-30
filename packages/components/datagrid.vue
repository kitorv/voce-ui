<template>
  <div class="vk-datagrid">
    <!-- 表头 -->
    <div class="vk-datagrid--header"
         :style="headerTableStyle"
         @mousewheel="handleFixedBodyMousewheel"
         @DOMMouseScroll="handleFixedBodyMousewheel">
      <div class="vk-datagrid--header-left"
           :style="{'width':`${leftFixedColumnsWidth}px`}">
        <d-header-table :style="{'width':`${tableContentWidth}px`}"
                        :columns="columnRows"
                        :leaf-columns="leafColumns"></d-header-table>
      </div>
      <div ref="header"
           class="vk-datagrid--header-center">
        <d-header-table :columns="columnRows"
                        :leaf-columns="leafColumns"></d-header-table>
      </div>
      <div class="vk-datagrid--header-right"
           :style="{'width':`${rightFixedColumnsWidth}px`,'right':`${showVerticalScrollBar?scrollBarSize:0}px`}">
        <d-header-table :style="{'width':`${tableContentWidth}px`}"
                        :columns="columnRows"
                        :leaf-columns="leafColumns"></d-header-table>
      </div>
    </div>
    <!-- 表体 -->
    <div class="vk-datagird--body">
      <div ref="leftBody"
           class="vk-datagrid--body-left"
           :style="{'width':`${leftFixedColumnsWidth}px`,'height':`${tableContentHeight}px`}"
           @mousewheel="handleFixedBodyMousewheel"
           @DOMMouseScroll="handleFixedBodyMousewheel">
        <d-body-table :style="{'width':`${tableContentWidth}px`}"
                      :data-source="dataSource"
                      :leaf-columns="leafColumns"
                      :fixed-columns="leftFixedColumns"></d-body-table>
      </div>
      <div ref="body"
           class="vk-datagrid--body-center"
           @scroll="handleBodyScroll">
        <d-body-table :data-source="dataSource"
                      :leaf-columns="leafColumns"
                      @after-render="handleBodyTableAfterRneder"></d-body-table>
      </div>
      <div ref="rightBody"
           class="vk-datagrid--body-right"
           :style="{'width':`${rightFixedColumnsWidth}px`,'height':`${tableContentHeight}px`}"
           @mousewheel="handleFixedBodyMousewheel"
           @DOMMouseScroll="handleFixedBodyMousewheel">
        <d-body-table :style="{'width':`${tableContentWidth}px`}"
                      :data-source="dataSource"
                      :leaf-columns="leafColumns"
                      :fixed-columns="rightFixedColumns"></d-body-table>
      </div>
    </div>
    <!-- 表尾 -->
    <div class="vk-datagrid--footer"
         :style="headerTableStyle"
         @mousewheel="handleFixedBodyMousewheel"
         @DOMMouseScroll="handleFixedBodyMousewheel">
      <div ref="leftFooter"
           class="vk-datagrid--body-left"
           :style="{'width':`${leftFixedColumnsWidth}px`,'height':`${tableContentHeight}px`}"
           @mousewheel="handleFixedBodyMousewheel"
           @DOMMouseScroll="handleFixedBodyMousewheel">
        <d-body-table :style="{'width':`${tableContentWidth}px`}"
                      :data-source="footer"
                      :leaf-columns="leafColumns"
                      :fixed-columns="leftFixedColumns"></d-body-table>
      </div>
      <div ref="footer"
           class="vk-datagrid--footer-center">
        <d-body-table :data-source="footer"
                      :leaf-columns="leafColumns"></d-body-table>
      </div>
      <div ref="rightFooter"
           class="vk-datagrid--body-right"
           :style="{'width':`${rightFixedColumnsWidth}px`,'height':`${tableContentHeight}px`,'right':`${showVerticalScrollBar?scrollBarSize:0}px`}">
        <d-body-table :style="{'width':`${tableContentWidth}px`}"
                      :data-source="footer"
                      :leaf-columns="leafColumns"
                      :fixed-columns="rightFixedColumns"></d-body-table>
      </div>
    </div>
  </div>
</template>

<script>
import DHeaderTable from "./datagrid-header";
import DBodyTable from "./datagrid-body";

import { scrollBarSize, debounce } from "../utils";
import { log } from "async";

export default {
  components: { DHeaderTable, DBodyTable },
  data() {
    return {
      columnRows: [],
      leafColumns: [],
      leftFixedColumns: [],
      rightFixedColumns: [],
      scrollBarSize: scrollBarSize(),
      showVerticalScrollBar: false,
      showHorizontalScrollBar: false,
      tableContentWidth: 0,
      tableContentHeight: 0,
      leftFixedColumnsWidth: 0,
      rightFixedColumnsWidth: 0
    };
  },
  props: {
    columns: { required: true, type: Array },
    dataSource: { type: Array },
    footer: { type: Array }
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

      // 左右固定列数组
      let leftFixedColumns = [];
      let rightFixedColumns = [];

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
            leftFixedColumns.push(column);
          }
          if (fixed === "right") {
            rightFixedColumns.push(column);
          }
          column.colSpan = 1;
          column.rowSpan = rows.length - column.level + 1;
        }
      };

      // 从顶部递归到底部设置单元格的占位大小
      this.columns.forEach(col => {
        setCellSize(col);
      });

      // 设置初始化数据
      this.columnRows = rows;
      this.leafColumns = leafColumns;
      this.leftFixedColumns = leftFixedColumns;
      this.rightFixedColumns = rightFixedColumns;
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
      let contentEl = bodyEl.childNodes[0];
      this.showVerticalScrollBar = bodyEl.offsetWidth - contentEl.offsetWidth;
      // 计算高度获取是否存在滚动条
      this.showHorizontalScrollBar = contentEl.offsetHeight - contentEl.offsetHeight;

      let rowEl = bodyEl.querySelector("tr");
      let cellEls = rowEl.querySelectorAll("td");
      let leftBodyWidth = 0;
      let rightBodyWidth = 0;
      let tableContentWidth = 0;
      const leftFixedColumnsNumber = this.leftFixedColumns.length;
      const rightFixedColumnsNumber = this.rightFixedColumns.length;
      const cellNumber = this.leafColumns.length;
      cellEls.forEach((cell, index) => {
        const cellWidth = cell.offsetWidth;
        if (index < leftFixedColumnsNumber) {
          leftBodyWidth += cellWidth;
        }
        if (index > cellNumber - rightFixedColumnsNumber) {
          rightBodyWidth += cellWidth;
        }
        tableContentWidth += cellWidth;
      });
      this.leftFixedColumnsWidth = leftBodyWidth;
      this.rightFixedColumnsWidth = rightBodyWidth;
      this.tableContentWidth = tableContentWidth;
      this.tableContentHeight = bodyEl.clientHeight;
    },
    handleBodyScroll() {
      let bodyEl = this.$refs.body;
      this.$refs.header.scrollLeft = bodyEl.scrollLeft;
      this.$refs.footer.scrollLeft = bodyEl.scrollLeft;
      this.$refs.leftBody.scrollTop = bodyEl.scrollTop;
      this.$refs.rightBody.scrollTop = bodyEl.scrollTop;
    },
    handleFixedBodyMousewheel() {
      let deltaY = event.deltaY;
      if (!deltaY && event.detail) {
        deltaY = event.detail * 40;
      }
      if (!deltaY && event.wheelDeltaY) {
        deltaY = -event.wheelDeltaY;
      }
      if (!deltaY && event.wheelDelta) {
        deltaY = -event.wheelDelta;
      }
      if (!deltaY) return;
      const body = this.$refs.body;
      const bodyScrollTop = body.scrollTop;
      if (deltaY < 0 && bodyScrollTop !== 0) {
        event.preventDefault();
      }
      if (deltaY > 0 && body.scrollHeight - body.clientHeight > bodyScrollTop) {
        event.preventDefault();
      }
      let step = 0;
      let timeId = setInterval(() => {
        step += 5;
        if (deltaY > 0) {
          body.scrollTop += 2;
        } else {
          body.scrollTop -= 2;
        }
        if (step >= Math.abs(deltaY)) {
          clearInterval(timeId);
        }
      }, 5);
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
  overflow: hidden;
}

.vk-datagrid--header,
.vk-datagird--body,
.vk-datagrid--footer {
  position: relative;
}

.vk-datagrid--header-left,
.vk-datagrid--body-left {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  overflow: hidden;
  height: 100%;
}

.vk-datagrid--header-center,
.vk-datagrid--body-center,
.vk-datagrid--footer-center {
  position: relative;
  z-index: 1;
  overflow: auto;
}

.vk-datagrid--header-center,
.vk-datagrid--footer-center {
  overflow: hidden;
}

.vk-datagrid--body-center {
  max-height: 250px;
}

.vk-datagrid--header-right,
.vk-datagrid--body-right {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 3;
  overflow: hidden;
  height: 100%;

  > table {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 4;
  }
}
</style>

