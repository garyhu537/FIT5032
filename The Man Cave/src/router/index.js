import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import AccessDeniedView from '@/views/AccessDeniedView.vue'
import RegistrationView from '@/views/RegistrationView.vue'
import UserDashboardView from '@/views/UserDashboardView.vue'
import AdminDashboardView from '@/views/AdminDashboardView.vue'
import DashboardView from '@/views/DashboardView.vue'
import EnrolledProgramView from '@/views/ProgramView.vue'
import ProgramView from '@/views/ProgramView.vue'

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
    path: '/Registration',
    name: 'Registration',
    component: RegistrationView
  },
  {
    path: '/AccessDenied',
    name: 'AccessDenied',
    component: AccessDeniedView
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: DashboardView,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('isAuthenticated')
      const userType = localStorage.getItem('userType')
      if (isAuthenticated === 'true' && userType === 'Admin') {
        next('/AdminDashboard')
      } else if (isAuthenticated === 'true' && userType === 'User') {
        next('/UserDashboard')
      } else {
        next('/AccessDenied')
      }
    }
  },
  {
    path: '/UserDashboard',
    name: 'UserDashboard',
    component: UserDashboardView,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('isAuthenticated')
      const userType = localStorage.getItem('userType')
      if (isAuthenticated === 'true' && userType === 'User') {
        next()
      } else {
        next('/AccessDenied')
      }
    }
  },
  {
    path: '/AdminDashboard',
    name: 'AdminDashboard',
    component: AdminDashboardView,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('isAuthenticated')
      const userType = localStorage.getItem('userType')
      if (isAuthenticated === 'true' && userType === 'Admin') {
        next()
      } else {
        next('/AccessDenied')
      }
    }
  },
  {
    path: '/Program',
    name: 'Program',
    component: ProgramView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
