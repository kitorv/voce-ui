<template>
  <div class="kv-datagrid--pagination">
    <span>共 {{pageTotal}} 条</span>
    <span>
      <div class="kv-datagrid--pagination-select"
           v-clickoutside="handleOutsideClick"
           @click="showDropdown=!showDropdown">
        {{currentPageSize}}条/页
        <i class="kv-icon-down"></i>
        <div v-if="showDropdown"
             class="kv-datagrid--pagination-select-dropdown">
          <div v-for="(size, index) in pageSizes"
               :key="index"
               :class="[
                'kv-datagrid--pagination-select-option',
                {'kv-datagrid--pagination-select-active':size==currentPageSize}
               ]"
               @click.stop="handleSelctSize(size)">{{size}}条/页</div>
        </div>
      </div>
    </span>
    <pager class="kv-datagrid--pagination-pager"
           :page-count="currentPageCount"
           :page-number="pageNumber"
           :page-index="currentPageIndex"
           @on-change="handlePagerChange"></pager>
    <span>
      前往
      <input v-model="inputPageIndex"
             :min="1"
             :max="currentPageCount"
             type="number"
             autocomplete="off"
             class="kv-datagrid--pagination-number"
             @change="handleInputChange"
             @keyup.13="handleInputChange">
      页
    </span>
  </div>
</template>

<script>
import Pager from "./pager"
import Clickoutside from '../directives/clickoutside.js'

export default {
  components: { Pager },
  directives: { Clickoutside },
  data() {
    return {
      currentPageIndex: this.pageIndex,
      currentPageSize: 10,
      inputPageIndex: this.pageIndex,
      showDropdown: false
    }
  },
  props: {
    pageTotal: { type: Number, default: 0 },
    pageSize: { type: Number, default: 10 },
    pageCount: { type: Number, default: 0 },
    pageIndex: { type: Number, default: 1 },
    pageNumber: { type: Number, default: 5 },
    pageSizes: { type: Array, default: () => [10, 20, 30, 40, 50, 100] }
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
  methods: {
    handlePagerChange(pageIndex) {
      this.currentPageIndex = pageIndex
    },
    handleInputChange() {
      debugger
      let value = parseInt(this.inputPageIndex, 10);
      if (Number.isNaN(value)) {
        this.inputPageIndex = this.currentPageIndex
        return
      }
      let index = this.getValidPageIndex(value)
      this.inputPageIndex = index
      this.currentPageIndex = index
    },
    getValidPageIndex(value) {
      value = parseInt(value, 10);
      if (Number.isNaN(value)) {
        return 1
      }
      if (value > this.currentPageCount) {
        return this.currentPageCount
      }
      if (value < 1) {
        return 1
      }
      return value
    },
    handleSelctSize(size) {
      this.currentPageSize = size
      this.showDropdown = false
    },
    handleOutsideClick() {
      setTimeout(() => { this.showDropdown = false }, 10)
    }
  },
  watch: {
    currentPageIndex(pageIndex) {
      this.inputPageIndex = pageIndex
      this.$emit('on-change', { pageIndex, pageSize: this.currentPageSize })
    },
    currentPageSize(pageSize) {
      let pageIndex = this.currentPageIndex
      this.currentPageIndex = this.getValidPageIndex(pageIndex)
      if (pageIndex != this.currentPageIndex) return
      this.$emit('on-change', { pageIndex, pageSize: this.currentPageSize })
    },
    pageIndex(value) {
      let pageIndex = this.getValidPageIndex(value)
      this.currentPageIndex = pageIndex
      this.inputPageIndex = pageIndex
    },
    pageSize(pageSize) {
      this.currentPageSize = pageSize
    }
  }
}
</script>

