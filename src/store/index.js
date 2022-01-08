import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 100
  },
  mutations: {
    incrementar(state) {
      state.contador += 10;
    }
  },
  actions: {
    accionIncrementarContador ({commit}) {
      commit('incrementar')
    }
  },
  modules: {
  }
})
