<template>
  <div>
    <ul>
      <li v-for="memo in memos" :key="memo.id">
        <span>{{ memo.content.split(/\n/)[0] }}</span>
      </li>
    </ul>
    <button @click="addMemo">+</button>
  </div>
</template>

<script>
export default {
  name: 'MemoList',
  props: ['memos'],
  methods: {
    addMemo () {
      this.$emit('click-add-memo', true)
    }
  }
}
</script>

<style>

</style>
