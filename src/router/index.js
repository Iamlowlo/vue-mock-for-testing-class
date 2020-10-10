import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '@/views/List.vue'
import Detail from '@/views/Detail.vue'
import Form from '@/views/Form.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'List',
    component: List
  },
  {
    path: '/detail/:name',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/form/:id?',
    name: 'Form',
    component: Form
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
