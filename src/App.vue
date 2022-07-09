<template>
  <div id="app">
    <MemoList :memos="memos" @click-add-memo="getIsShow" />
    <MemoForm :is-show="isShow" @set-isShow="getIsShow" @click-save-memo="getMemos" />
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
      memos: []
    }
  },
  methods: {
    getIsShow (isShow) {
      this.isShow = isShow
    },
    getMemos (memos) {
      this.memos = memos
    }
  }
}
</script>

<style></style>
