<template>
  <div class="mb-6">
    <ul class="mb-2 pl-0">
      <li class="mb-1" v-for="(memo, index) in memos" :key="memo.id">
        <span
          @click="
            setIsShowAndIndexAndContent({
              isShow: true,
              index: index,
              content: memo.content,
            })
          "
        >
          {{ memo.content.split(/\n/)[0] }}
        </span>
      </li>
    </ul>
    <v-btn
      elevation="2"
      color="success"
      raised
      rounded
      @click="
        setIsShowAndIndexAndContent({ isShow: true, index: null, content: '' })
      "
      >+</v-btn
    >
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'MemoList',
  computed: {
    ...mapState(['memos'])
  },
  methods: {
    ...mapMutations(['setIsShowAndIndexAndContent'])
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
