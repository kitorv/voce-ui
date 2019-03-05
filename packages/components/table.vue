<template>
  <div ref="datagrid"
       :class="['kv-datagrid',{'kv-datagrid-border':columnRows.length>1||border},{'kv-datagrid-stripe':stripe}]">
    <!-- 表头 -->
    <div ref="headerWrapper"
         class="kv-datagrid--header"
         :style="{'padding-right': `${vScrollSize}px`}">
      <div v-if="leftFixedColumns.length>0"
           class="kv-datagrid--header-left"
           :style="{'width':`${leftBodyWidth}px`}">
        <table-header :style="{'width':`${bodyWidth}px`}"
                      :column-rows="columnRows"
                      :leaf-columns="leafColumns"></table-header>
      </div>
      <div ref="header"
           class="kv-datagrid--header-center">
        <table-header :column-rows="columnRows"
                      :leaf-columns="leafColumns"></table-header>
      </div>
      <div v-if="rightFixedColumns.length>0"
           class="kv-datagrid--header-right"
           :style="{'width':`${rightBodyWidth}px`,'right':`${vScrollSize}px`}">
        <table-header :style="{'width':`${bodyWidth}px`}"
                      :column-rows="columnRows"
                      :leaf-columns="leafColumns"></table-header>
      </div>
    </div>
    <!-- 表头 -->

    <!-- 表体 -->
    <div class="kv-datagird--body">
      <div v-if="leftFixedColumns.length>0"
           v-mousewheel="handleMousewheel"
           ref="leftBody"
           class="kv-datagrid--body-left"
           :style="{'width':`${leftBodyWidth}px`,'height':`${bodyHeight-hScrollSize}px`}">
        <table-body :style="{'width':`${bodyWidth}px`}"
                    :data="dataSource"
                    :leaf-columns="leafColumns"
                    :row-class="rowClass"></table-body>
      </div>
      <div ref="body"
           class="kv-datagrid--body-center"
           :style="bodyStyle"
           @scroll="handleBodyScroll">
        <table-body v-if="dataSource.length>0"
                    :leaf-columns="leafColumns"
                    :data="dataSource"
                    :row-class="rowClass"
                    @on-after-render="handleBodyLayoutResize">
          <template slot="expansion">
            <slot name="expansion"></slot>
          </template>
        </table-body>
        <div v-else
             :style="{'width':`${bodyWidth}px`}"
             class="kv-datagrid--placeholder">
          <div :class="['kv-datagrid--placeholder-empty',{'kv-datagrid--placeholder-fit':fit}]">
            <p>暂无数据</p>
          </div>
        </div>
      </div>
      <div v-if="rightFixedColumns.length>0"
           v-mousewheel="handleMousewheel"
           ref="rightBody"
           class="kv-datagrid--body-right"
           :style="{'width':`${rightBodyWidth}px`,'height':`${bodyHeight-hScrollSize}px`,'right':`${vScrollSize}px`}">
        <table-body :style="{'width':`${bodyWidth}px`}"
                    :data="dataSource"
                    :leaf-columns="leafColumns"
                    :row-class="rowClass"></table-body>
      </div>
    </div>
    <!-- 表体 -->

    <!-- 表尾 -->
    <div ref="footerWrapper"
         class="kv-datagrid--footer"
         v-if="footer.length>0"
         :style="{'padding-right': `${vScrollSize}px`}">
      <div v-if="leftFixedColumns.length>0"
           class="kv-datagrid--body-left"
           :style="{'width':`${leftBodyWidth}px`,}">
        <table-footer :style="{'width':`${bodyWidth}px`}"
                      :data="footerDataSource"
                      :leaf-columns="leafColumns"></table-footer>
      </div>
      <div ref="footer"
           class="kv-datagrid--footer-center">
        <table-footer :data="footerDataSource"
                      :leaf-columns="leafColumns"></table-footer>
      </div>
      <div v-if="rightFixedColumns.length>0"
           class="kv-datagrid--body-right"
           :style="{'width':`${rightBodyWidth}px`,'right':`${vScrollSize}px`}">
        <table-footer :style="{'width':`${bodyWidth}px`}"
                      :data="footerDataSource"
                      :leaf-columns="leafColumns"></table-footer>
      </div>
    </div>
    <!-- 表尾 -->

  </div>
</template>

<script>
import TableHeader from "./header";
import TableBody from "./body";
import TableFooter from "./footer";
import Mousewheel from "../directives/mousewheel.js";
import debounce from "../utils/debounce.js";
import scrollSize from "../utils/scrollsize.js";
import proxyRow from "../store/row.js";
import initColumnProps from "../store/column.js";

export default {
  name: "datagird",
  components: { TableHeader, TableBody, TableFooter },
  directives: { Mousewheel },
  data() {
    let initParams = this.init();
    return {
      // 列转行用于渲染表头数据
      columnRows: initParams.columnRows,
      // 末级叶子列用于实际数据展示
      leafColumns: initParams.leafColumns,
      // 左侧固定列
      leftFixedColumns: initParams.leftFixedColumns,
      // 右侧固定列
      rightFixedColumns: initParams.rightFixedColumns,
      // 数据源包装构建
      dataSource: this.initProxyDataSource(this.data),
      // 表尾数据源包装构建
      footerDataSource: this.initProxyDataSource(this.footer),
      // 垂直滚动条宽度
      vScrollSize: 0,
      // 水平滚动条宽度
      hScrollSize: 0,
      // 左侧固定表格内容宽度
      leftBodyWidth: 0,
      // 右侧固定表格内容宽度
      rightBodyWidth: 0,
      // 表格内容宽度
      bodyWidth: 0,
      // 表格内容高度
      bodyHeight: 0,
      // 顶部表头布局高度
      headerHeight: 0,
      // 底部表尾布局高度
      footerHeight: 0,
      // 复选框全部勾选状态
      checkedAll: false,
      // 复选半选中状态
      indeterminate: false,
      // 数据字典存储变量数据
      dictionary: {}
    };
  },
  props: {
    // 列配置
    columns: { type: Array, default: () => [] },
    // 表格数据
    data: { type: Array, default: () => [] },
    // 页脚数据
    footer: { type: Array, default: () => [] },
    // 自适应容器
    fit: { type: Boolean, default: true },
    // 边框
    border: { type: Boolean, default: true },
    // 斑马线
    stripe: { type: Boolean, default: false },
    // 行类样式
    rowClass: { type: Function },
    // 单元格类样式
    cellClass: { type: Function },
    // 单行选中状态
    select: { type: Boolean, default: false }
  },
  computed: {
    bodyStyle() {
      if (!this.fit) return;
      return { height: `${this.bodyHeight}px` };
    }
  },
  methods: {
    // 初始化配置属性处理
    init() {
      this.initSortFixedColumns();
      let columnRows = this.initColumnRows(this.columns);
      let columnTypes = this.initColumnTypeAndSize(columnRows);
      return { columnRows, ...columnTypes };
    },
    // 固定列排序：【left】【any】【right】，只排序最顶层
    initSortFixedColumns() {
      const sortOrderProps = ["left", undefined, "right"];
      this.columns.sort((x, y) => {
        const xIndex = sortOrderProps.indexOf(x.fixed);
        const yIndex = sortOrderProps.indexOf(y.fixed);
        return Math.abs(xIndex) - Math.abs(yIndex);
      });
    },
    // 树状结构列转行
    initColumnRows(columns, leafColumns, index = 0, rows = []) {
      // 多级表头为2维数组，多去当前行数组对象
      rows[index] = rows[index] || [];
      // 循环列转化数据
      columns.forEach(column => {
        // 列含有子列集合递归加载数据
        const { children } = column;
        if (Array.isArray(children) && children.length > 0) {
          this.initColumnRows(children, leafColumns, index + 1, rows);
        }
        column.level = index + 1;
        rows[index].push(column);
      });
      // 过滤掉没有数据的行
      return rows.filter(row => row.length > 0);
    },
    // 将列拆分固定列、末级列、设置基本属性
    initColumnTypeAndSize(columnRows) {
      let leftFixedColumns = [];
      let rightFixedColumns = [];
      let leafColumns = [];
      // 设置单元格的colspan和rowspan
      const initCell = column => {
        const { children, fixed, type } = column;
        // 包含子节点递归设置子节点的占位
        if (Array.isArray(children) && children.length > 0) {
          let colSpan = 0;
          children.forEach(subColumn => {
            // fixed只有设置在最顶层才有效果，子节点默认设置为父节点的fixed的属性
            subColumn.fixed = fixed;
            initCell(subColumn);
            // 递归加载所有当前子节点的colSpan有所有子节点的colSpan总计
            colSpan += subColumn.colSpan;
          });
          column.colSpan = colSpan;
          column.rowSpan = 1;
          return;
        }
        if (fixed === "left") {
          leftFixedColumns.push(column);
        }
        if (fixed === "right") {
          rightFixedColumns.push(column);
        }
        initColumnProps.call(this, column);
        let width = column.width;
        column.colStyle = { width: `${width}px`, minWidth: `${width}px` };
        leafColumns.push(column);
        column.colSpan = 1;
        column.rowSpan = columnRows.length - column.level + 1;
      };
      // 从顶部递归到底部设置单元格的占位大小
      this.columns.forEach(col => {
        initCell(col);
      });
      return { leftFixedColumns, rightFixedColumns, leafColumns };
    },
    // 初始化数据源包装，统一管理便于扩展
    initProxyDataSource(rows) {
      return Array.from(rows, m => proxyRow.call(this, m));
    },
    // 表格内容渲染完成根据内容调整表格
    handleBodyLayoutResize() {
      // 无数据不进行渲染
      if (this.dataSource.length < 1) return;
      // 计算滚动条宽度
      let bodyEl = this.$refs.body;
      if (!bodyEl) return;
      this.vScrollSize =
        bodyEl.scrollHeight > bodyEl.offsetHeight ? scrollSize() : 0;
      this.hScrollSize =
        bodyEl.scrollWidth > bodyEl.offsetWidth ? scrollSize() : 0;
      // 存在固定列计算固定列所占有的宽度
      const lefColLength = this.leftFixedColumns.length;
      const rightColLength = this.rightFixedColumns.length;
      if (lefColLength < 1 && rightColLength < 1) return;
      // 计算固定列头的宽度
      const rowEl = bodyEl.querySelector("tr");
      const cellEls = rowEl.querySelectorAll("td");
      const cellLength = this.leafColumns.length;
      let leftWidth = 0;
      // 存在边框固定列左侧边框设置
      let rightWidth = this.border ? 1 : 0;
      // 根据单元格计算出固定表格宽度
      cellEls.forEach((cell, index) => {
        const cellWidth = cell.offsetWidth;
        if (index < lefColLength) {
          leftWidth += cellWidth;
        }
        if (index >= cellLength - rightColLength) {
          rightWidth += cellWidth;
        }
      });
      // 计算完成赋值
      this.leftBodyWidth = leftWidth;
      this.rightBodyWidth = rightWidth;
      this.bodyWidth = rowEl.offsetWidth;
      this.bodyHeight = bodyEl.offsetHeight;
    },
    // 中心内容表格同步滚动处理
    handleBodyScroll() {
      const bodyEl = this.$refs.body;
      if (!bodyEl) return;
      const scrollLeft = bodyEl.scrollLeft;
      const scrollTop = bodyEl.scrollTop;
      // 同步表头左右滚动
      if (this.$refs.header) {
        this.$refs.header.scrollLeft = scrollLeft;
      }
      // 同步左侧固定表格的上下滚动
      if (this.$refs.leftBody) {
        this.$refs.leftBody.scrollTop = scrollTop;
      }
      // 同步右侧固定表格的上下滚动
      if (this.$refs.rightBody) {
        this.$refs.rightBody.scrollTop = scrollTop;
      }
      // 同步页脚滚动
      if (this.$refs.footer) {
        this.$refs.footer.scrollLeft = scrollLeft;
      }
    },
    // 固定列表格鼠标滚动同步
    handleMousewheel(event, distance) {
      const bodyEl = this.$refs.body;
      const scrollTop = bodyEl.scrollTop;
      if (distance < 0 && scrollTop !== 0) {
        event.preventDefault();
      }
      if (
        distance > 0 &&
        bodyEl.scrollHeight - bodyEl.clientHeight > scrollTop
      ) {
        event.preventDefault();
      }
      this.$refs.body.scrollTop += distance;
    },
    // 浏览器缩放表格布局自适应
    handleLayoutReize(interval = 0) {
      if (interval === 0) {
        this.handleBodyLayoutResize();
        this.handleBodyScroll();
        return;
      }
      return debounce(() => {
        this.handleBodyLayoutResize();
        this.handleBodyScroll();
      }, interval);
    },
    // 调整表格内容高度，固定列头
    handleBodyResize() {
      if (!this.bodyWidth) {
        this.bodyWidth = this.$refs.header.firstChild.offsetWidth;
      }
      if (!this.fit) return;
      // 计算内容高度=父容器-表头-表尾
      if (this.$refs.headerWrapper) {
        this.headerHeight = this.$refs.headerWrapper.offsetHeight;
      }
      if (this.$refs.footerWrapper) {
        this.footerHeight = this.$refs.footerWrapper.offsetHeight;
      }
      let parentHeight = this.$refs.datagrid.parentNode.offsetHeight;
      // 判断是否包含滚动态条，并计算出滚动条尺寸
      const bodyEl = this.$refs.body;
      this.hScrollSize = 0;
      if (bodyEl.scrollHeight > bodyEl.offsetHeight) {
        this.hScrollSize = scrollSize();
      }
      this.bodyHeight =
        parentHeight - this.headerHeight - this.footerHeight - this.hScrollSize;
      // 自适应父容器表格滚动条要根据表体内容高度计算
      this.vScrollSize =
        bodyEl.scrollHeight > this.bodyHeight ? scrollSize() : 0;
    }
  },
  mounted() {
    window.addEventListener("resize", this.handleLayoutReize(100));
    this.handleBodyResize();
  }
};
</script>
