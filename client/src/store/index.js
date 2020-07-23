import Vue from 'vue'
import Vuex from 'vuex'
import socket from '../config/socket'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    setUsers (state, payload) {
      state.users = payload
    }
  },
  actions: {
    login (context, payload) {
      console.log('masuk login store')
      socket.emit('user-login', payload)
    },
    updateUsers (context, payload) {
      socket.on('user-data', (data) => {
        console.log(data, 'dataaaaaaaaaaaaaaaaa')
        context.commit('setUsers', data)
      })
    }
  },
  modules: {
  }
})
