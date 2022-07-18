<template>
  <div v-show="isShow">
    <v-textarea
      solo
      label="メモを入力してください"
      v-model="computedContent"
    ></v-textarea>
    <v-btn
      class="mr-2"
      elevation="2"
      color="primary"
      raised
      rounded
      @click="clickSaveMemo"
      >編集</v-btn
    >
    <v-btn elevation="2" color="error" raised rounded @click="clickDeleteMemo"
      >削除</v-btn
    >
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'MemoForm',
  computed: {
    ...mapState(['isShow', 'index', 'memos']),
    ...mapGetters(['getContent']),
    computedContent: {
      get () {
        return this.getContent
      },
      set (content) {
        this.setContent(content)
      }
    }
  },
  methods: {
    ...mapMutations([
      'setIsShow',
      'setIndex',
      'setContent',
      'addMemo',
      'editMemo',
      'deleteMemo'
    ]),
    clickSaveMemo () {
      if (!this.getContent) return
      if (this.index === null) {
        const memo = {
          id: new Date().getTime().toString(),
          content: this.getContent
        }
        this.addMemo(memo)
        this.setIndex(this.memos.length - 1)
      } else {
        this.editMemo({
          id: this.memos[this.index].id,
          content: this.getContent
        })
      }
    },
    clickDeleteMemo () {
      if (this.index !== null) this.deleteMemo()
      this.setIsShow(false)
    }
  }
}
</script>
