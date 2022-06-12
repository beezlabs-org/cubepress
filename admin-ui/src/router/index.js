import Vue from 'vue'
import Router from 'vue-router'
import DeleteMeToo from '@/views/DeleteMeToo'

Vue.use(Router)

const router = new Router({
  routes: {
    path: '/',
    name: 'delete-me-too',
    component: DeleteMeToo
  },
  mode: 'history'
})

export default router
