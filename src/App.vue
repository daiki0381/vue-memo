<template>
  <div id="app">
    <MemoList @click-add-memo="getIsShow" />
    <MemoForm :is-show="isShow" @set-isShow="getIsShow" />
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
      isShow: false
    }
  },
  methods: {
    getIsShow (isShow) {
      this.isShow = isShow
    }
  }
}
</script>

<style></style>
