<template>
  <div id="app">
    <MemoList
      :memos="memos"
      @click-add-memo="getIsShowAndIndexAndContent"
      @click-show-memo="getIsShowAndIndexAndContent"
    />
    <MemoForm
      :is-show="isShow"
      :index="index"
      :content="content"
      @set-isShow="getIsShow"
      @set-content="getContent"
      @click-save-memo-emit-index="getIndex"
      @click-save-memo-emit-memos="getMemos"
    />
  </div>
</template>

<script>
import MemoList from '@/components/MemoList.vue'
import MemoForm from '@/components/MemoForm.vue'

export default {
  name: 'App',
  components: {
    MemoList,
    MemoForm
  },
  data () {
    return {
      isShow: false,
      memos: [],
      index: null,
      content: ''
    }
  },
  methods: {
    getIsShow (isShow) {
      this.isShow = isShow
    },
    getMemos (memos) {
      this.memos = memos
    },
    getIndex (index) {
      this.index = index
    },
    getContent (content) {
      this.content = content
    },
    getIsShowAndIndexAndContent (isShow, index, content) {
      this.isShow = isShow
      this.index = index
      this.content = content
    }
  }
}
</script>

<style></style>
