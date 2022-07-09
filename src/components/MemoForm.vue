<template>
  <div v-show="getIsShow">
    <textarea cols="50" rows="10" v-model="getContent"></textarea>
    <button @click="saveMemo">編集</button>
    <button @click="removeMemo">削除</button>
  </div>
</template>

<script>
export default {
  name: 'MemoForm',
  props: ['isShow', 'index', 'content'],
  data () {
    return {
      memos: []
    }
  },
  computed: {
    getIsShow: {
      get () {
        return this.isShow
      },
      set (isShow) {
        this.$emit('set-isShow', isShow)
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
        this.memos.push(memo)
        this.$emit('click-save-memo-emit-index', this.memos.length - 1)
      } else {
        this.memos.splice(this.index, 1, {
          id: this.memos[this.index].id,
          content: this.content
        })
      }
      this.$emit('click-save-memo-emit-memos', this.memos)
    },
    removeMemo () {
      if (this.index === null) {
        this.getIsShow = false
      } else {
        this.memos.splice(this.index, 1)
        this.getIsShow = false
        this.$emit('click-remove-memo', this.memos)
      }
    }
  }
}
</script>

<style></style>
