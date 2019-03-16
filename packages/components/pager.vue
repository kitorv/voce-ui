<template>
  <ul class="kv-datagrid--page">
    <li class="kv-datagrid--page-number">
      <i class="kv-icon-left"></i>
    </li>
    <li class="kv-datagrid--page-number">1</li>
    <li class="kv-datagrid--page-number kv-datagrid--page-prev">
      <i>•••</i>
    </li>
    <li v-for="(page, index) in pageList"
        :key="index"
        class="kv-datagrid--page-number">{{page}}</li>
    <li class="kv-datagrid--page-number kv-datagrid--page-next">
      <i>•••</i>
    </li>
    <li class="kv-datagrid--page-number">{{pageCount}}</li>
    <li class="kv-datagrid--page-number">
      <i class="kv-icon-right"></i>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    pageIndex: { type: Number },
    pageCount: { type: Number },
    pageNumber: { type: Number }
  },
  computed: {
    showPrevMore() {
      return this.pageIndex > this.pageNumber - (this.pageNumber - 1) / 2;
    },
    showNextMore() {
      return this.pageIndex < this.pageCount - (this.pageNumber - 1) / 2;
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
  }
}
</script>
