import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import AccessDeniedView from '@/views/AccessDeniedView.vue'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/About',
    name: 'About',
    component: AboutView,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('isAuthenticated')
      if (isAuthenticated === 'true') {
        next()
      } else {
        next('/AccessDenied')
      }
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/AccessDenied',
    name: 'AccessDenied',
    component: AccessDeniedView
  },
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
