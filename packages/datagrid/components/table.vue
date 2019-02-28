<template>
  <div class="kv-datagrid">

    <!-- 表头 -->
    <div class="kv-datagrid--header">
      <table-header :column-rows="columnRows"
                    :leaf-columns="leafColumns"></table-header>
    </div>
    <!-- 表头 -->

    <!-- 表体 -->
    <div class="vk-datagird--body">
      <div class="vk-datagrid--body-center">
        <table-body :leaf-columns="leafColumns"
                    :data="dataSource"></table-body>
      </div>
    </div>
    <!-- 表体 -->

  </div>
</template>

<script>
import TableHeader from "./header";
import TableBody from "./body";

export default {
  name: "datagird",
  components: { TableHeader, TableBody },
  data() {
    let initParams = this.init();
    return {
      columnRows: initParams.columnRows,
      leafColumns: initParams.leafColumns,
      leftFixedColumns: initParams.leftFixedColumns,
      rightFixedColumns: initParams.rightFixedColumns,
      dataSource: this.intiDataSource()
    };
  },
  props: {
    columns: { type: Array, default: () => [] },
    data: { type: Array, default: () => [] }
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
    initColumnTypeAndSize(columnRows) {
      let leftFixedColumns = [];
      let rightFixedColumns = [];
      let leafColumns = [];
      // 设置单元格的colspan和rowspan
      const initCell = column => {
        const { children, fixed } = column;
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
    intiDataSource() {
      let dataRows = [];
      this.data.forEach(row => {
        dataRows.push({ hover: false, data: row });
      });
      return dataRows;
    }
  }
};
</script>
