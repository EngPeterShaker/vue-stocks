import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Fx from "../components/Fx/Fx.vue";
import Stocks from "../components/Stocks/Stocks.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'stocks',
    component: Stocks
  },
  {
    path: '/stocks',
    name: 'stocks',
    component: Stocks
  },
  {
    path: '/fx',
    name: 'fx',
    component: Fx
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
