import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '@/views/Home.vue'
import Breed from '@/views/Breed.vue'
import SubBreed from '@/views/SubBreed.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'List',
    component: List
  },
  {
    path: '/breed/:name',
    name: 'Breed',
    component: Breed
  },
  {
    path: '/breed/:breedName/sub-breed/:subBreedName',
    name: 'SubBreed',
    component: SubBreed
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
