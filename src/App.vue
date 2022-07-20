<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container fluid>
          <MemoApp />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import MemoApp from '@/components/MemoApp.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    MemoApp
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
