<template>
  <div>
    <button @click="addMemo">+</button>
  </div>
</template>

<script>
export default {
  name: 'MemoList',
  methods: {
    addMemo () {
      this.$emit('click-add-memo', true)
    }
  }
}
</script>

<style>

</style>
