<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container fluid>
          <MemoList />
          <MemoForm />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import MemoList from '@/components/MemoList.vue'
import MemoForm from '@/components/MemoForm.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    MemoList,
    MemoForm
  },
  created () {
    const memos = JSON.parse(localStorage.getItem('memos'))
    if (memos) this.setMemos(memos)
  },
  computed: {
    ...mapGetters(['getMemos']),
    memos () {
      return this.getMemos
    }
  },
  methods: {
    ...mapMutations(['setMemos'])
  },
  watch: {
    memos (memos) {
      localStorage.setItem('memos', JSON.stringify(memos))
    }
  }
}
</script>
