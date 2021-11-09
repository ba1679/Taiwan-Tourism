<template>
  <Paginate
    :value="currentPageNum"
    :pageCount="totalPageCount"
    :page-range="3"
    :margin-pages="2"
    :click-handler="changePage"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination'"
    :page-class="'page-item'"
    :page-link-class="'page-link'"
    :prev-class="'page-item'"
    :next-class="'page-item'"
    :pre-link-class="'page-link'"
    :next-link-class="'page-link'"
    :active-class="'active'"
  ></Paginate>
</template>
<script>
import Paginate from 'vuejs-paginate'

export default {
  name: 'Pagination',
  components: {
    Paginate
  },
  props: {
    pageNum: {
      // Pagination 現在指向的分頁頁數
      type: Number,
      default: 1
    },
    totalPageCount: {
      // 資料頁數的總數
      type: Number
    }
  },
  data () {
    return {
      currentPageNum: this.pageNum
    }
  },
  methods: {
    changePage (num) {
      this.currentPageNum = num
      this.$emit('updatePageNum', num)
    }
  }
}
</script>
