<template>
  <div :class="['kv-datagrid',{'kv-datagrid-border':columnRows.length>1||border},{'kv-datagrid-stripe':stripe}]"
       :style="tableStyle">
    <!-- 表头 -->
    <div v-if="showHeader"
         ref="headerWrapper"
         class="kv-datagrid--header"
         :style="{'padding-right': `${vScrollSize}px`}">
      <div v-if="leftFixedColumns.length>0"
           class="kv-datagrid--header-left"
           :style="{'width':`${leftBodyWidth}px`}">
        <table-header :style="{'width':`${bodyWidth}px`}"></table-header>
      </div>
      <div ref="header"
           class="kv-datagrid--header-center">
        <table-header :column-rows="columnRows"></table-header>
      </div>
      <div v-if="rightFixedColumns.length>0"
           class="kv-datagrid--header-right"
           :style="{'width':`${rightBodyWidth}px`,'right':`${vScrollSize}px`}">
        <table-header :style="{'width':`${bodyWidth}px`}"></table-header>
      </div>
    </div>
    <!-- 表头 -->
    <!-- 表体 -->
    <div :class="['kv-datagird--body',{'kv-datagird--body-vscroll':vScrollSize}]">
      <div v-if="leftFixedColumns.length>0"
           v-mousewheel="handleMousewheel"
           ref="leftBody"
           class="kv-datagrid--body-left"
           :style="{'width':`${leftBodyWidth}px`,'height':`${bodyHeight-hScrollSize}px`}">
        <table-body :style="{'width':`${bodyWidth}px`}"></table-body>
      </div>
      <div ref="body"
           class="kv-datagrid--body-center"
           :style="bodyStyle"
           @scroll="handleBodyScroll">
        <table-body v-if="dataSource.length>0"
                    @on-after-render="handleBodyLayoutResize"></table-body>
        <div v-else
             :style="{'width':dataSource.length<1?`${bodyWidth}px`:'auto'}"
             :class="['kv-datagrid--body-empty',{'kv-datagrid--body-empty-fit':fit}]">
          <div class="kv-datagrid--body-empty-placeholder">
            <div class="kv-datagrid--body-empty-image"><img src="../images/empty.svg"></div>
            <p>暂无数据</p>
          </div>
        </div>
      </div>
      <div v-if="rightFixedColumns.length>0"
           v-mousewheel="handleMousewheel"
           ref="rightBody"
           class="kv-datagrid--body-right"
           :style="{'width':`${rightBodyWidth}px`,'height':`${bodyHeight-hScrollSize}px`,'right':`${vScrollSize}px`}">
        <table-body :style="{'width':`${bodyWidth}px`}"></table-body>
      </div>
    </div>
    <!-- 表体 -->
    <!-- 表尾 -->
    <div ref="footerWrapper"
         class="kv-datagrid--footer"
         :style="{'padding-right': `${vScrollSize}px`}">
      <div v-if="leftFixedColumns.length>0"
           class="kv-datagrid--body-left"
           :style="{'width':`${leftBodyWidth}px`,}">
        <table-footer :style="{'width':`${bodyWidth}px`}"></table-footer>
      </div>
      <div ref="footer"
           v-if="footer.length>0"
           class="kv-datagrid--footer-center">
        <table-footer>
        </table-footer>
      </div>
      <div v-if="rightFixedColumns.length>0"
           class="kv-datagrid--body-right"
           :style="{'width':`${rightBodyWidth}px`,'right':`${vScrollSize}px`}">
        <table-footer :style="{'width':`${bodyWidth}px`}"></table-footer>
      </div>
    </div>
    <!-- 表尾 -->
    <div v-if="pagination&&dataSource.length>0"
         ref="page"
         class="kv-datagrid--footer-pagination">
      <table-pagination :page-total="pageTotal"
                        :page-size="pageSize"
                        :page-index="pageIndex"
                        :page-sizes="pagination.pageSizes"
                        :page-number="pagination.pageNumnber"
                        @on-change="loadAjaxData"></table-pagination>
    </div>
    <table-loading v-show="loadData?ajaxLoading:loading"></table-loading>
  </div>
</template>

<script>
import TableHeader from "./header";
import TableBody from "./body";
import TableFooter from "./footer";
import TablePagination from "./pagination"
import TableLoading from "./loading"
import Mousewheel from "../directives/mousewheel.js";
import debounce from "../utils/debounce.js";
import scrollSize from "../utils/scrollsize.js";
import { initProxyRows, initTreeProxyRows, initMegreProxyRows } from "../store/row.js";
import initColumnProps from "../store/column.js";

export default {
  name: "datagird",
  components: { TableHeader, TableBody, TableFooter, TablePagination, TableLoading },
  directives: { Mousewheel },
  provide() {
    return { datagrid: this };
  },
  data() {
    let { treeKey, columnRows, leafColumns, leftFixedColumns, rightFixedColumns } = this.init();
    return {
      columnRows: columnRows,
      leafColumns: leafColumns,
      leftFixedColumns: leftFixedColumns,
      rightFixedColumns: rightFixedColumns,
      headerDataSource: initProxyRows(this.header),
      dataSource: this.initProxyDataSource(treeKey),
      footerDataSource: initProxyRows(this.footer),
      vScrollSize: 0,
      hScrollSize: 0,
      leftBodyWidth: 0,
      rightBodyWidth: 0,
      bodyWidth: 0,
      bodyHeight: 0,
      headerHeight: 0,
      footerHeight: 0,
      checkedAll: false,
      indeterminate: false,
      height: 0,
      orderType: null,
      orderKey: null,
      treeKey: treeKey,
      pageIndex: this.pagination && this.pagination.pageIndex || 1,
      pageSize: this.pagination && this.pagination.pageSize || 10,
      pageTotal: 0,
      ajaxLoading: false
    };
  },
  props: {
    columns: { type: Array, default: () => [] },
    header: { type: Array, default: () => [] },
    data: { type: Array, default: () => [] },
    footer: { type: Array, default: () => [] },
    fit: { type: Boolean, default: false },
    border: { type: Boolean, default: true },
    stripe: { type: Boolean, default: false },
    select: { type: Boolean, default: false },
    maxHeight: { type: Number },
    rowClass: { type: Function },
    rowStyle: { type: Function },
    cellClass: { type: Function },
    cellStyle: { type: Function },
    cellSpan: { type: Function },
    pagination: { type: Object },
    showHeader: { type: Boolean, default: true },
    loadData: { type: Function },
    loading: { type: [Boolean, Object], default: null }
  },
  computed: {
    bodyStyle() {
      if (this.maxHeight == this.height) {
        return { height: `${this.bodyHeight}px` };
      }
      if (!this.fit) return;
      return { height: `${this.bodyHeight}px` };
    },
    tableStyle() {
      if (this.height) {
        return { maxHeight: `${this.height}px` };
      }
    }
  },
  methods: {
    // 初始化配置属性处理
    init() {
      this.initSortFixedColumns();
      let columnRows = this.initColumnRows(this.columns);
      let params = this.initColumnToParams(columnRows);
      return { columnRows, ...params };
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
    // 将列拆分固定列、末级列、设置基本属性,行数据处理
    initColumnToParams(columnRows) {
      let leftFixedColumns = [],
        rightFixedColumns = [],
        leafColumns = [];
      let treeKey = null;
      // 设置单元格的colspan和rowspan
      const initCell = column => {
        const { children, fixed, type, separate, key } = column;
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
        if (type == "tree" && !this.treeKey && key) {
          treeKey = key;
        }
        leafColumns.push(column);
        column.colSpan = 1;
        column.rowSpan = columnRows.length - column.level + 1;
      };
      // 从顶部递归到底部设置单元格的占位大小
      this.columns.forEach(col => {
        initCell(col);
      });
      return {
        leftFixedColumns,
        rightFixedColumns,
        leafColumns,
        treeKey
      };
    },
    // 初始化表体数据源代理，表体需要处理合并单元格数据和表体特有数据
    initProxyDataSource(treeKey, data) {
      if (treeKey || this.treeKey) return initTreeProxyRows(this.data);
      return initProxyRows(data || this.data);
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
      let resize = () => {
        this.handleBodyLayoutResize();
        this.handleBodyScroll();
        this.handleBodyResize();
      };
      if (interval > 0) return debounce(resize, interval);
      resize();
    },
    // 调整表格内容高度，固定列头
    handleBodyResize() {
      if (this.$refs.header) {
        this.bodyWidth = this.$refs.header.firstChild.offsetWidth;
      }
      let fitSize = false;
      if (this.fit) {
        fitSize = true;
        this.height = this.maxHeight || this.$el.parentNode.clientHeight;
      } else {
        this.height = this.$el.offsetHeight;
        fitSize = this.height == this.maxHeight;
      }
      if (!fitSize) {
        this.height = 0
        return
      };
      // 计算内容高度=父容器-表头-表尾
      if (this.$refs.headerWrapper) {
        this.headerHeight = this.$refs.headerWrapper.offsetHeight;
      }
      if (this.$refs.footerWrapper) {
        this.footerHeight = this.$refs.footerWrapper.offsetHeight;
      }
      if (this.$refs.page) {
        this.footerHeight += this.$refs.page.offsetHeight;
      }
      // 判断是否包含滚动态条，并计算出滚动条尺寸
      const bodyEl = this.$refs.body;
      if (!bodyEl) return
      this.hScrollSize = bodyEl.scrollWidth > bodyEl.offsetWidth ? scrollSize() : 0;
      this.bodyHeight = this.height - this.headerHeight - this.footerHeight;
      // 自适应父容器表格滚动条要根据表体内容高度计算
      this.vScrollSize =
        bodyEl.scrollHeight > this.bodyHeight ? scrollSize() : 0;
    },
    loadAjaxData(pageIndex, pageSize) {
      this.ajaxLoading = true
      if (!this.pagination || !this.loadData) return
      let params = { pageIndex, pageSize, orderKey: this.orderKey, orderType: this.orderType }
      let success = ({ total, rows }) => {
        this.dataSource = this.initProxyDataSource(null, rows)
        this.pageSize = pageSize,
          this.pageIndex = pageIndex
        this.pageTotal = total
        this.ajaxLoading = false
      }
      this.loadData(params, success)
    }
  },
  created() {
    if (this.pagination) {
      let { pageIndex, pageSize } = this.pagination
      this.loadAjaxData(pageIndex || this.pageIndex, pageSize || this.pageSize)
      return
    }
    if (this.loadData) {
      this.ajaxLoading = true
      let success = ({ total, rows }) => {
        this.dataSource = this.initProxyDataSource(null, rows)
        this.ajaxLoading = false
      }
      this.loadData({ orderKey: this.orderKey, orderType: this.orderType }, success)
    }
  },
  mounted() {
    window.addEventListener("resize", this.handleLayoutReize(100));
    this.handleBodyResize();
  }
};
</script>
