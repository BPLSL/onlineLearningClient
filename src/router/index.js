import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    component: () => import('@/components/Login.vue')
  },
  {
    path: '/student',
    name: 'Student',
    component: () => import('@/views/Student.vue'),
    children:[
      {
        path: 'login',
        name: 'StudentLogin',
        component: () => import('@/views/StudentLogin.vue')
      },
      {
        path: 'main',
        name: 'StudentMain',
        component: () => import('@/views/StudentMain.vue')
      }
    ]
  },
  {
    path: '/teacher',
    name: 'Teacher',
    component: () => import('@/views/Teacher.vue'),
    children:[
      {
        path: 'login',
        name: 'TeacherLogin',
        component: () => import('@/views/TeacherLogin.vue')
      },
      {
        path: 'main',
        name: 'TeacherMain',
        component: () => import('@/views/TeacherMain.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/Admin.vue'),
    children:[
      {
        path: 'login',
        name: 'AdminLogin',
        component: () => import('@/views/AdminLogin.vue')
      },
      {
        path: 'main',
        name: 'AdminMain',
        component: () => import('@/views/AdminMain.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
