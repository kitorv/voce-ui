<template>
  <div ref="datagrid"
       :class="['kv-datagrid',{'kv-datagrid-border':columnRows.length>0||boder}]">

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
                    :leaf-columns="leafColumns"></table-body>
      </div>
      <div ref="body"
           class="kv-datagrid--body-center"
           :style="bodyStyle"
           @scroll="handleBodyScroll">
        <table-body :leaf-columns="leafColumns"
                    :data="dataSource"
                    @on-after-render="handleBodyLayoutResize"></table-body>
      </div>
      <div v-if="rightFixedColumns.length>0"
           v-mousewheel="handleMousewheel"
           ref="rightBody"
           class="kv-datagrid--body-right"
           :style="{'width':`${rightBodyWidth}px`,'height':`${bodyHeight-hScrollSize}px`,'right':`${vScrollSize}px`}">
        <table-body :style="{'width':`${bodyWidth}px`}"
                    :data="dataSource"
                    :leaf-columns="leafColumns"></table-body>
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
        <table-body :style="{'width':`${bodyWidth}px`}"
                    :data="footerDataSource"
                    :leaf-columns="leafColumns"
                    :footer="true"></table-body>
      </div>
      <div ref="footer"
           class="kv-datagrid--footer-center">
        <table-body :data="footerDataSource"
                    :leaf-columns="leafColumns"
                    :footer="true"></table-body>
      </div>
      <div v-if="rightFixedColumns.length>0"
           class="kv-datagrid--body-right"
           :style="{'width':`${rightBodyWidth}px`,'right':`${vScrollSize}px`}">
        <table-body :style="{'width':`${bodyWidth}px`}"
                    :data="footerDataSource"
                    :leaf-columns="leafColumns"
                    :footer="true"></table-body>
      </div>
    </div>
    <!-- 表尾 -->

  </div>
</template>

<script>
import TableHeader from "./header";
import TableBody from "./body";
import Mousewheel from "../directives/mousewheel.js";
import debounce from "../utils/debounce.js";
import scrollSize from "../utils/scrollsize.js";
import extColumns from "../columns/index";

export default {
  name: "datagird",
  components: { TableHeader, TableBody },
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
      dataSource: this.proxyDataSource(this.data),
      // 表尾数据源包装构建
      footerDataSource: this.proxyDataSource(this.footer),
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
      //  复选半选中状态
      indeterminate: false,
      // 数据字典存储变量数据
      dictionary: {}
    };
  },
  props: {
    columns: { type: Array, default: () => [] },
    data: { type: Array, default: () => [] },
    footer: { type: Array, default: () => [] },
    fit: { type: Boolean, default: true },
    boder: { type: Boolean, default: true }
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
        let width = column.width;
        column.colStyle = { width: `${width}px`, minWidth: `${width}px` };
        // 列存在type类型则读取type对应的列配置赋值列
        if (type) {
          Object.assign(column, extColumns[type]);
        }
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
    proxyDataSource(rows) {
      let dataRows = [];
      rows.forEach(row => {
        dataRows.push({ hover: false, data: row });
      });
      return dataRows;
    },
    // 表格内容渲染完成根据内容调整表格
    handleBodyLayoutResize() {
      // 无数据不进行渲染
      if (this.dataSource.length < 1) return;
      // 计算滚动条宽度
      let bodyEl = this.$refs.body;
      if (!bodyEl) return;
      this.vScrollSize =
        bodyEl.scrollWidth > bodyEl.offsetWidth ? scrollSize() : 0;
      this.hScrollSize =
        bodyEl.scrollHeight > bodyEl.offsetHeight ? scrollSize() : 0;
      // 存在固定列计算固定列所占有的宽度
      const lefColLength = this.leftFixedColumns.length;
      const rightColLength = this.rightFixedColumns.length;
      if (lefColLength < 1 && rightColLength < 1) return;
      // 计算固定列头的宽度
      const rowEl = bodyEl.querySelector("tr");
      const cellEls = rowEl.querySelectorAll("td");
      const cellLength = this.leafColumns.length;
      let leftWidth = 0;
      let rightWidth = 0;
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
    resizeHeight() {
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
    }
  },
  mounted() {
    window.addEventListener("resize", this.handleLayoutReize(100));
    this.resizeHeight();
  }
};
</script>
