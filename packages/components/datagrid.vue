<template>
  <div :class="['vk-datagrid',{'vk-datagrid-border':showBorder}]">
    <!-- 表头 -->
    <div class="vk-datagrid--header"
         :style="{'padding-right': `${this.verticalScrollBarSize}px`}">
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
           :style="{'width':`${rightFixedColumnsWidth}px`,'right':`${verticalScrollBarSize}px`}">
        <d-header-table :style="{'width':`${tableContentWidth}px`}"
                        :columns="columnRows"
                        :leaf-columns="leafColumns"></d-header-table>
      </div>
    </div>
    <!-- 表体 -->
    <div class="vk-datagird--body">
      <div ref="leftBody"
           v-if="leftFixedColumns.length>0"
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
           v-if="rightFixedColumns.length>0"
           class="vk-datagrid--body-right"
           :style="{'width':`${rightFixedColumnsWidth}px`,'height':`${tableContentHeight}px`,'right':`${verticalScrollBarSize}px`}"
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
         v-if="Array.isArray(footer)&&footer.length>0"
         :style="{'padding-right': `${verticalScrollBarSize}px`}">
      <div v-if="leftFixedColumns.length>0"
           class="vk-datagrid--body-left"
           :style="{'width':`${leftFixedColumnsWidth}px`,'height':`${tableContentHeight}px`}">
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
      <div v-if="rightFixedColumns.length>0"
           class="vk-datagrid--body-right"
           :style="{'width':`${rightFixedColumnsWidth}px`,'height':`${tableContentHeight}px`,'right':`${verticalScrollBarSize}px`}">
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

export default {
  components: { DHeaderTable, DBodyTable },
  data() {
    return {
      columnRows: [],
      leafColumns: [],
      leftFixedColumns: [],
      rightFixedColumns: [],
      verticalScrollBarSize: false,
      horizontalScrollBarSize: false,
      tableContentWidth: 0,
      tableContentHeight: 0,
      leftFixedColumnsWidth: 0,
      rightFixedColumnsWidth: 0,
      resizeTimer: null
    };
  },
  props: {
    columns: { required: true, type: Array },
    dataSource: { type: Array },
    footer: { type: Array },
    border: { type: Boolean, default: false }
  },
  computed: {
    showBorder() {
      return this.columns.length > 1 ? true : this.border;
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
        this.verticalScrollBarSize = 0;
        // TODO 无数据表头滚动
        return;
      }
      // 计算宽度获取是否存在滚动条
      let bodyEl = this.$refs.body;
      this.verticalScrollBarSize = bodyEl.offsetWidth - bodyEl.clientWidth;
      // 计算高度获取是否存在滚动条
      this.horizontalScrollBarSize = bodyEl.offsetHeight - bodyEl.clientHeight;
      // 没有固定列不需要计算固定列宽度
      const leftFixedColumnsLength = this.leftFixedColumns.length;
      const rightFixedColumnsLength = this.rightFixedColumns.length;
      if (leftFixedColumnsLength < 1 && rightFixedColumnsLength < 1) return;
      // 计算固定列头的宽度
      const rowEl = bodyEl.querySelector("tr");
      const cellEls = rowEl.querySelectorAll("td");
      const cellLength = this.leafColumns.length;
      let leftBodyWidth = 0;
      let rightBodyWidth = 0;
      cellEls.forEach((cell, index) => {
        const cellWidth = cell.offsetWidth;
        if (index < leftFixedColumnsLength) {
          leftBodyWidth += cellWidth;
        }
        if (index > cellLength - rightFixedColumnsLength) {
          rightBodyWidth += cellWidth;
        }
      });
      this.leftFixedColumnsWidth = leftBodyWidth;
      this.rightFixedColumnsWidth = rightBodyWidth;
      this.tableContentWidth = rowEl.offsetWidth;
      this.tableContentHeight =
        bodyEl.offsetHeight - this.horizontalScrollBarSize;
    },
    handleBodyScroll() {
      const bodyEl = this.$refs.body;
      const scrollLeft = bodyEl.scrollLeft;
      const scrollTop = bodyEl.scrollTop;
      if (this.$refs.header) {
        this.$refs.header.scrollLeft = scrollLeft;
      }
      if (this.$refs.footer) {
        this.$refs.footer.scrollLeft = scrollLeft;
      }
      if (this.$refs.leftBody) {
        this.$refs.leftBody.scrollTop = scrollTop;
      }
      if (this.$refs.rightBody) {
        this.$refs.rightBody.scrollTop = scrollTop;
      }
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
    },
    handleResize() {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.handleBodyTableAfterRneder();
        this.handleBodyScroll();
      }, 100);
    }
  },
  created() {
    this.renderOptions();
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  }
};
</script>


