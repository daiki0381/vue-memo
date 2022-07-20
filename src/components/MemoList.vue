<template>
  <div class="mb-6">
    <ul class="mb-2 pl-0">
      <li class="mb-1" v-for="(memo, index) in memos" :key="memo.id">
        <span @click="showMemo(index, memo.content)">
          {{ memo.content.split(/\n/)[0] }}
        </span>
      </li>
    </ul>
    <v-btn elevation="2" color="success" raised rounded @click="addMemo"
      >+</v-btn
    >
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MemoList',
  computed: {
    ...mapState(['memos'])
  },
  methods: {
    addMemo () {
      this.$emit('click-add-memo', { isShow: true, index: null, content: '' })
    },
    showMemo (index, content) {
      this.$emit('click-show-memo', {
        isShow: true,
        index: index,
        content: content
      })
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
