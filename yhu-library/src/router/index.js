import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import AccessDeniedView from '@/views/AccessDeniedView.vue'
import FirebaseLoginView from '@/views/FirebaseLoginView.vue'
import FirebaseSignupView from '@/views/FirebaseSignupView.vue'
import AddBookView from '@/views/AddBookView.vue'
import GetBookCountView from '@/views/GetBookCountView.vue'
import WeatherView from '@/views/WeatherView.vue'
import CountBookAPI from '@/views/CountBookAPI.vue'
import GetAllBookAPI from '@/views/GetAllBookAPI.vue'

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
    component: FirebaseLoginView
  },
  {
    path: '/FireSignup',
    name: 'FireSignup',
    component: FirebaseSignupView
  },
  {
    path: '/AddBook',
    name: 'AddBook',
    component: AddBookView
  },
  {
    path: '/GetBookCount',
    name: 'GetBookCount',
    component: GetBookCountView
  },
  {
    path: '/WeatherCheck',
    name: 'WeatherCheck',
    component: WeatherView
  },
  {
    path: '/CountBookAPI',
    name: 'CountBookAPI',
    component: CountBookAPI
  },
  {
    path: '/GetAllBookAPI',
    name: 'GetAllBookAPI',
    component: GetAllBookAPI
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
