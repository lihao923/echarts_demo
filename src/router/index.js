import Vue from 'vue'
import VueRouter from 'vue-router'
import Pies from '../views/pies.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'pies',
    component: Pies
  },
  {
    path: '/lines',
    name: 'lines',
    // route level code-splitting
    // this generates a separate chunk (lines.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "lines" */ '../views/lines.vue')
  },
  {
    path: '/bars',
    name: 'bars',
    component: () => import(/* webpackChunkName: "bars" */ '../views/bars.vue')
  },
  {
    path: '/doughnuts',
    name: 'doughnuts',
    component: () => import(/* webpackChunkName: "doughnuts" */ '../views/doughnuts.vue')
  },
  {
    path: '/gauges',
    name: 'gauges',
    component: () => import(/* webpackChunkName: "gauges" */ '../views/gauges.vue')
  },
  {
    path: '/scatters',
    name: 'scatters',
    component: () => import(/* webpackChunkName: "scatters" */ '../views/scatters.vue')
  },
  {
    path: '/funnels',
    name: 'funnels',
    component: () => import(/* webpackChunkName: "funnels" */ '../views/funnels.vue')
  },
  {
    path: '/customs',
    name: 'customs',
    component: () => import(/* webpackChunkName: "customs" */ '../views/customs.vue')
  },
  {
    path: '/radars',
    name: 'radars',
    component: () => import(/* webpackChunkName: "radars" */ '../views/radars.vue')
  },
  {
    path: '/datasets',
    name: 'datasets',
    component: () => import(/* webpackChunkName: "datasets" */ '../views/datasets.vue')
  },
  {
    path: '/richtexts',
    name: 'richtexts',
    component: () => import(/* webpackChunkName: "richtexts" */ '../views/richtexts.vue')
  },
  {
    path: '/maps',
    name: 'maps',
    component: () => import(/* webpackChunkName: "maps" */ '../views/maps.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
