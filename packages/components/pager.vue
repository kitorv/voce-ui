<template>
  <ul class="kv-datagrid--page">
    <li :class="['kv-datagrid--page-number',{'kv-datagrid--page-disabled':pageIndex<2}]"
        @click="handlePageIndexChange(pageIndex-1)">
      <i class="kv-icon-left"></i>
    </li>
    <li :class="['kv-datagrid--page-number',{'kv-datagrid--page-avtive':pageIndex==1}]"
        @click="handlePageIndexChange(1)">1</li>
    <li v-if="showPrevMore"
        class="kv-datagrid--page-number kv-datagrid--page-prev"
        @mouseenter="prevMoreHover=true"
        @mouseleave="prevMoreHover=false"
        @click="handlePageIndexChange(pageIndex-pageNumber+2)">
      <i v-if="prevMoreHover"
         class="kv-icon-doubleleft"></i>
      <i v-else>•••</i>
    </li>
    <li v-for="(page, index) in pageList"
        :key="index"
        :class="['kv-datagrid--page-number',{'kv-datagrid--page-avtive':pageIndex==page}]"
        @click="handlePageIndexChange(page)">{{page}}</li>
    <li v-if="showNextMore"
        class="kv-datagrid--page-number kv-datagrid--page-next"
        @mouseenter="nextMoreHover=true"
        @mouseleave="nextMoreHover=false"
        @click="handlePageIndexChange(pageIndex+pageNumber-2)">
      <i v-if="nextMoreHover"
         class="kv-icon-doubleright"></i>
      <i v-else>•••</i>
    </li>
    <li v-if="pageCount>1"
        :class="['kv-datagrid--page-number',{'kv-datagrid--page-avtive':pageIndex==pageCount}]"
        @click="handlePageIndexChange(pageCount)">{{pageCount}}</li>
    <li :class="['kv-datagrid--page-number',{'kv-datagrid--page-disabled':pageIndex>pageCount-1}]"
        @click="handlePageIndexChange(pageIndex+1)">
      <i class="kv-icon-right"></i>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      prevMoreHover: false,
      nextMoreHover: false
    }
  },
  props: {
    pageIndex: { type: Number },
    pageCount: { type: Number },
    pageNumber: { type: Number }
  },
  computed: {
    showPrevMore() {
      return this.pageIndex > this.pageNumber - (this.pageNumber - 1) / 2 && this.pageCount > this.pageNumber;
    },
    showNextMore() {
      return this.pageIndex < this.pageCount - (this.pageNumber + 1) / 2 && this.pageCount > this.pageNumber;
    },
    pageList() {
      let startIndex = 2, endIndex = this.pageCount
      if (this.showPrevMore && !this.showNextMore) {
        startIndex = this.pageCount - (this.pageNumber - 2) - 1
      }
      if (!this.showPrevMore && this.showNextMore) {
        startIndex = 2
        endIndex = this.pageNumber + 1
      }
      if (this.showPrevMore && this.showNextMore) {
        const offset = Math.floor(this.pageNumber / 2);
        startIndex = this.pageIndex - offset
        endIndex = this.pageIndex + offset + 1
      }
      let pageList = []
      for (let i = startIndex; i < endIndex; i++) {
        pageList.push(i)
      }
      return pageList
    }
  },
  methods: {
    handlePageIndexChange(pageIndex) {
      if (this.pageIndex == pageIndex) return
      if (pageIndex < 1) return
      if (pageIndex > this.pageCount) return
      this.$emit('on-change', pageIndex)
    }
  }
}
</script>
