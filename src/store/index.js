import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShow: false,
    index: null,
    content: '',
    memos: []
  },
  getters: {
    getContent (state) {
      return state.content
    },
    getMemos (state) {
      return state.memos
    }
  },
  mutations: {
    setIsShow (state, isShow) {
      state.isShow = isShow
    },
    setIndex (state, index) {
      state.index = index
    },
    setContent (state, content) {
      state.content = content
    },
    setIsShowAndIndexAndContent (state, { isShow, index, content }) {
      state.isShow = isShow
      state.index = index
      state.content = content
    },
    setMemos (state, memos) {
      state.memos = memos
    },
    addMemo (state, memo) {
      state.memos.push(memo)
    },
    editMemo (state, memo) {
      state.memos.splice(state.index, 1, memo)
    },
    deleteMemo (state) {
      state.memos.splice(state.index, 1)
    }
  }
})
