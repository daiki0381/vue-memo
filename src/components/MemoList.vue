<template>
  <div>
    <ul class="mb-2 pl-0">
      <li v-for="(memo, index) in memos" :key="memo.id" class="mb-1">
        <span @click="showMemo(index, memo.content)">{{
          memo.content.split(/\n/)[0]
        }}</span>
      </li>
    </ul>
    <v-btn elevation="2" color="success" raised rounded @click="addMemo"
      >+</v-btn
    >
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

<style scoped lang="scss">
li {
  list-style-type: none;
  span:hover {
    color: #0000ee;
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
