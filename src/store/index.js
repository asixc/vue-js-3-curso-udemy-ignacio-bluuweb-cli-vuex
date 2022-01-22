import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 100
  },
  mutations: {
    incrementar(state, payload = 10) {
      state.contador += payload;
    },
    disminuir(state, payload) {
      state.contador -= payload;
    }
  },
  actions: {
    accionIncrementarContador ({commit}) {
      commit('incrementar')
    },
    accionDisminuirContador ({commit}, cantidad) {
      commit('disminuir', cantidad)
    },
    accionBoton ({commit}, objeto) {
      if (objeto.estado){
        commit('incrementar', objeto.numero)
      } else {
        commit('disminuir', objeto.numero)
      }
    }
  },
  modules: {
  }
})
