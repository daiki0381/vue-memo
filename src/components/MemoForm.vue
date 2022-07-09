<template>
  <div v-show="getIsShow">
    <textarea cols="50" rows="10"></textarea>
    <button>編集</button>
    <button>削除</button>
  </div>
</template>

<script>
export default {
  name: 'MemoForm',
  props: ['isShow'],
  computed: {
    getIsShow: {
      get () {
        return this.isShow
      },
      set (isShow) {
        this.$emit('set-isShow', isShow)
      }
    }
  }
}
</script>

<style>

</style>
