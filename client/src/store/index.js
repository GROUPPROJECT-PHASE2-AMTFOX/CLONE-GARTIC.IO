import Vue from 'vue'
import Vuex from 'vuex'
import socket from '../config/socket'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    rooms:[],
    roomDetail:{},
    isPlaying:false,
    canvasStroke:{},
    answered: false
  },
  mutations: {
    setUsers (state, payload) {
      state.users = payload
    },
    getRooms (state, payload){
      state.rooms = payload
    },
    updateRooms(state,data){
      state.rooms = data
    },
    roomDetail(state,data){
      state.roomDetail = data
      console.log(state.roomDetail)
    },
    startGame(state){
      state.isPlaying=true
    },
    nextRound(state) {
      state.answered = false
    },
    canvasStroke(state,data){
      state.canvasStroke=data
    },
    answered(payload) {
      state.answered = payload
      console.log(payload)
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
    },
    updateRooms(context){
socket.on('updated-rooms',(data)=>{
  console.log(data,'kiriman rooms dari update rooms')
  context.commit('updateRooms',data)
})
    },
    getRooms (context){
      socket.on('get-rooms',(data)=>{
        console.log(data,'data dari get rooms')
        context.commit('getRooms',data)
      })
    },
    createRoom(context,payload){
      console.log(`dalam store.index create room`)
      socket.emit('create-room', payload)
    },
    joinRoom(context,payload){
      socket.emit('join-room',payload)
    },
    roomDetail(context){
      socket.on('room-detail',(data) =>{
        console.log(data.users,'dari room Detail')
        context.commit('roomDetail',data)
        context.commit('answered', false)
      })
    },
    startGame(context,data){
      socket.emit('start-game',data)
      // context.commit('startGame')
    },
    nextQuestion(context,data){
      
      socket.emit('next-question',data)
    },
    canvasLine(context,data){
      console.log('ada di canvas line',data)
      socket.emit('canvas-line',data)
    },
    canvasStroke(context){
      socket.on('canvas-stroke',(data)=>{
        console.log(data,'canvas stroke index store')
        context.commit('canvasStroke',data)
      })
    },
    tebakanServer(context,data){
      console.log(data)
      socket.emit('tebakan-server',data)
    },
    hasilTebakan(context){
      socket.on('hasil-tebakan',(data)=>{
        console.log(data,'hasil tebakan')
      })
    }

  },
  modules: {
  }
})
