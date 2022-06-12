import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/layouts/MainLayout'
import Dashboard from '@/views/Dashboard'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/admin',
      component: MainLayout,
      children: [
        {
          path: '',
          component: Dashboard,
          name: 'dashboard'
        }
      ]
    }
  ],
  mode: 'history'
})

export default router
