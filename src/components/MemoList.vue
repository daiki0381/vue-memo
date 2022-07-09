<template>
  <div>
    <ul>
      <li v-for="(memo, index) in memos" :key="memo.id">
        <span @click="showMemo(index, memo.content)">{{ memo.content.split(/\n/)[0] }}</span>
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
      this.$emit('click-add-memo', true, null, '')
    },
    showMemo (index, content) {
      this.$emit('click-show-memo', true, index, content)
    }
  }
}
</script>

<style>

</style>
