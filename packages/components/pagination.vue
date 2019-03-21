<template>
  <div class="kv-datagrid--pagination">
    <span>共 {{pageTotal}} 条</span>
    <span>
      <div class="kv-datagrid--pagination-select">
        {{pageSize}}条/页
        <i class="kv-icon-down"></i>
      </div>
    </span>
    <pager class="kv-datagrid--pagination-pager"
           :page-count="currentPageCount"
           :page-number="pageNumber"
           :page-index="currentPageIndex"></pager>
    <span>
      前往
      <input class="kv-datagrid--pagination-number">
      页
    </span>
  </div>
</template>

<script>
import Pager from "./pager"

export default {
  components: { Pager },
  data() {
    return {
      currentPageIndex: 1,
      currentPageSize: 10
    }
  },
  props: {
    pageTotal: { type: Number, default: 0 },
    pageSize: { type: Number, default: 10 },
    pageCount: { type: Number, default: 0 },
    pageIndex: { type: Number, default: 1 },
    pageNumber: { type: Number, default: 5 }
  },
  computed: {
    currentPageCount() {
      if (this.pageTotal) {
        return Math.max(1, Math.ceil(this.pageTotal / this.currentPageSize));
      }
      if (this.pageCount) {
        return Math.max(1, this.pageCount);
      }
      return null;
    }
  },
}
</script>

<style lang="scss">
.kv-datagrid--pagination {
  white-space: nowrap;
  padding: 2px 5px;

  > span {
    display: inline-block;
    font-size: 13px;
    min-width: 35px;
    height: 28px;
    line-height: 28px;
    vertical-align: top;
    box-sizing: border-box;
    margin: 2px 5px;
  }

  .kv-datagrid--page-number {
    margin: 2px 5px;
  }
}

.kv-datagrid--pagination-select {
  position: relative;
  padding: 0 25px 0 8px;
  border-radius: 3px;
  border: 1px solid #e8e8e8;
  height: 28px;
  line-height: 28px;
  box-sizing: border-box;

  .kv-icon-down {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
  }
}

.kv-datagrid--pagination-pager {
  user-select: none;
  list-style: none;
  display: inline-block;
  vertical-align: top;
  font-size: 0;
  padding: 0;
  margin: 0;
}

.kv-datagrid--pagination-number {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 28px;
  line-height: 28px;
  outline: none;
  padding: 0 3px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 50px;
  text-align: center;
}
</style>


