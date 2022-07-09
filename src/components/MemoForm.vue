<template>
  <div v-show="getIsShow">
    <v-textarea
      solo
      label="メモを入力してください"
      v-model="getContent"
    ></v-textarea>
    <v-btn
      class="mr-2"
      elevation="2"
      color="primary"
      raised
      rounded
      @click="saveMemo"
      >編集</v-btn
    >
    <v-btn elevation="2" color="error" raised rounded @click="removeMemo"
      >削除</v-btn
    >
  </div>
</template>

<script>
export default {
  name: 'MemoForm',
  props: ['isShow', 'memos', 'index', 'content'],
  computed: {
    getIsShow: {
      get () {
        return this.isShow
      },
      set (isShow) {
        this.$emit('set-isShow', isShow)
      }
    },
    getMemos: {
      get () {
        return this.memos
      },
      set (memos) {
        this.$emit('set-memos', memos)
      }
    },
    getContent: {
      get () {
        return this.content
      },
      set (content) {
        this.$emit('set-content', content)
      }
    }
  },
  methods: {
    saveMemo () {
      if (!this.content) return
      if (this.index === null) {
        const memo = {
          id: new Date().getTime().toString(),
          content: this.content
        }
        this.getMemos.push(memo)
        this.$emit('click-save-memo-emit-index', this.memos.length - 1)
      } else {
        this.getMemos.splice(this.index, 1, {
          id: this.memos[this.index].id,
          content: this.content
        })
      }
      this.$emit('click-save-memo-emit-memos', this.memos)
      this.saveMemos()
    },
    removeMemo () {
      if (this.index === null) {
        this.getIsShow = false
      } else {
        this.getMemos.splice(this.index, 1)
        this.getIsShow = false
        this.$emit('click-remove-memo', this.memos)
        this.saveMemos()
      }
    },
    saveMemos () {
      localStorage.setItem('memos', JSON.stringify(this.memos))
    }
  }
}
</script>

<style></style>
