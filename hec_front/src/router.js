import { createRouter, createWebHashHistory } from 'vue-router'
import Vue from './views/VueInfoView.vue'
import Home from './views/HomeView.vue'
import Tests from './views/TestsView.vue'
import Login from './views/LoginView.vue'
import Signup from './views/SignupView.vue'
// import App from './App.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('./views/AboutView.vue')
  },
  {
    path: '/vue',
    name: 'VueInfo',
    component: Vue
  },
  {
    path: '/tests',
    name: 'Tests',
    component: Tests
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
