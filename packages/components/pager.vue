<template>
  <ul>
    <li>1</li>
    <li class="kv-icon kv-icon-ellipsis"></li>
    <li v-for="(item, index) in pageList"
        :key="index"></li>
    <li class="kv-icon kv-icon-ellipsis"></li>
    <li>{{pageCount}}</li>
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
    pageList() {
      const pageNumber = this.pageNumber;
      const halfpageNumber = (pageNumber - 1) / 2;
      const pageIndex = Number(this.pageIndex);
      const pageCount = Number(this.pageCount);
      let showPrevMore = false;
      let showNextMore = false;
      if (pageCount > pageNumber) {
        if (pageIndex > pageNumber - halfpageNumber) {
          showPrevMore = true;
        }
        if (pageIndex < pageCount - halfpageNumber) {
          showNextMore = true;
        }
      }
      const array = [];
      if (showPrevMore && !showNextMore) {
        const startPage = pageCount - (pageNumber - 2);
        for (let i = startPage; i < pageCount; i++) {
          array.push(i);
        }
      } else if (!showPrevMore && showNextMore) {
        for (let i = 2; i < pageNumber; i++) {
          array.push(i);
        }
      } else if (showPrevMore && showNextMore) {
        const offset = Math.floor(pageNumber / 2) - 1;
        for (let i = pageIndex - offset; i <= pageIndex + offset; i++) {
          array.push(i);
        }
      } else {
        for (let i = 2; i < pageCount; i++) {
          array.push(i);
        }
      }
      this.showPrevMore = showPrevMore;
      this.showNextMore = showNextMore;
      return array;
    }
  }
}
</script>
