import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import SideBar from '../components/SideBar.vue'
import Favorite from '../components/MovieFavo.vue'
import Interest from '../components/MovieInterest.vue'
import Result from '../components/Result.vue'
import NowPlaying from '../components/NowPlaying'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/NowPlaying',
    name:'Now Playing',
    component:NowPlaying
  },
  {
    path:'/SideBar',
    name:'SideBar',
    component:SideBar
  },
  {
    path:'/favorite',
    name:'favorite',
    component:Favorite
  },
  {
    path:'/interest',
    name:'interest',
    component:Interest
  },
  {
    path:'/result/:keyword',
    name:'result',
    component:Result
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
