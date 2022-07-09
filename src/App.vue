<template>
  <div id="app">
    <MemoList />
    <MemoForm />
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
  }
}
</script>

<style></style>
