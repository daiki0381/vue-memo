<template>
  <div v-show="getIsShow">
    <textarea cols="50" rows="10" v-model="content"></textarea>
    <button @click="saveMemo">編集</button>
    <button>削除</button>
  </div>
</template>

<script>
export default {
  name: 'MemoForm',
  props: ['isShow'],
  data () {
    return {
      memos: [],
      content: ''
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
    }
  },
  methods: {
    saveMemo () {
      if (!this.content) return
      const memo = {
        id: new Date().getTime().toString(),
        content: this.content
      }
      this.memos.push(memo)
      this.content = ''
      this.$emit('click-save-memo', this.memos)
    }
  }
}
</script>

<style>

</style>
