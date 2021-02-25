import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const createStore = function () {
  return new Vuex.Store({
    state: {
      count: 1
    },
    mutations: {
      addCount(state, payload) {
        console.log("mutations payload", payload)
        state.count += payload
      }
    },
    actions: {
      fetchItem({ commit }, { payload }) {
        return new Promise((resolve) => {
          setTimeout(() => {
            commit("addCount", payload)
            resolve()
          }, 1000)
        })
      }
    },
    modules: {
    }
  })
}
export default createStore
