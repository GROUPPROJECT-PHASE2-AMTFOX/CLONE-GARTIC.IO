import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import GameRoom from '../views/GameRoom.vue'
import Lobby from '../views/Lobby.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/game',
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
