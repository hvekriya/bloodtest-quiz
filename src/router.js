import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Type from './views/Type.vue'
import MainSurvey from './views/MainSurvey.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/type',
    name: 'Type',
    component: Type
  }
  ,
  {
    path: '/survey',
    name: 'MainSurvey',
    component: MainSurvey
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
