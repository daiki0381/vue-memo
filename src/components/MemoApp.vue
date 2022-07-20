<template>
  <div>
    <MemoList
      @click-add-memo="setIsShowAndIndexAndContent"
      @click-show-memo="setIsShowAndIndexAndContent"
    />
    <div v-show="isShow">
      <v-textarea
        solo
        label="メモを入力してください"
        v-model="content"
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
  </div>
</template>

<script>
import MemoList from '@/components/MemoList.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'MemoApp',
  components: {
    MemoList
  },
  data () {
    return {
      isShow: false,
      index: null,
      content: ''
    }
  },
  computed: {
    ...mapState(['memos'])
  },
  methods: {
    ...mapMutations(['addMemo', 'editMemo', 'deleteMemo']),
    setIsShowAndIndexAndContent ({ isShow, index, content }) {
      this.isShow = isShow
      this.index = index
      this.content = content
    },
    clickSaveMemo () {
      if (!this.content) return
      if (this.index === null) {
        const memo = {
          id: new Date().getTime().toString(),
          content: this.content
        }
        this.addMemo(memo)
        this.index = this.memos.length - 1
      } else {
        this.editMemo([
          this.index,
          {
            id: this.memos[this.index].id,
            content: this.content
          }
        ])
      }
    },
    clickDeleteMemo () {
      if (this.index !== null) this.deleteMemo(this.index)
      this.isShow = false
    }
  }
}
</script>
