import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './User.js'
import mallModule from './Mall.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msgs: 'helo',
    num: [1, 2, 40, 50, 6, 99, 80, 70]
  },
  getters: {
    low(state) {
      return state.num.filter(item => item > 50)
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userModule, mallModule
  }
})
