import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Canvas from '../views/Canvas.vue'
import Lobby from '../views/Lobby.vue'
import GameRoom from '../views/GameRoom.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/lobby/:namaroom',
    name: 'Lobby',
    component: Lobby
  },{
    path: '/game/:namaroom',
    name: 'GameRoom',
    component: GameRoom
  },
  {
    path: '/lobby',
    name: 'Lobby',
    component: Lobby
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
