import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msgs: 'helo',
    num: Array[1, 2, 40, 50, 6, 99]
  },
  getters: {
    low() {
      return state
    }
  },
  mutations: {
    increment(state, payload) {
      console.log(state)
      console.log(payload)
      state.msgs = payload
    }
  },
  actions: {
    getAddr(content, ip) {
      console.log(content)
      let httpUrl = `https://qryip.market.alicloudapi.com/lundear/qryip?ip=${ip}`
      fetch(httpUrl, {
        headers: {
          "Authorization": "APPCODE 4d7a3d98f8db41509806da3f1fdeaaf5"
        }
      }).then(res => res.json())
        .then(data => {
          console.log(data)
          let city = data.result.ad_info.city
          console.log(city)
          content.commit('increment', city)
        })
    }
  },
  modules: {
  }
})
