import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    memos: []
  },
  getters: {
    getMemos (state) {
      return state.memos
    }
  },
  mutations: {
    setMemos (state, memos) {
      state.memos = memos
    },
    addMemo (state, memo) {
      state.memos.push(memo)
    },
    editMemo (state, [index, memo]) {
      state.memos.splice(index, 1, memo)
    },
    deleteMemo (state, index) {
      state.memos.splice(index, 1)
    }
  }
})
