import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: "/index"
  }, {
    path: "/index",
    name: "Index",
    component: () => import("@/views/Index/Index")
  }, {
    path: "/my",
    name: "My",
    component: () => import("@/views/My")
  }, {
    path: "/search",
    name: "Search",
    component: () => import("@/views/Search")
  },
  {
    path: "/detail/:id/",
    name: "Detail",
    component: () => import("@/views/Detail")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router