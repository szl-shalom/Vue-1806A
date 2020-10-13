import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
  path: "/",
  redirect: "/index"
}, {
  path: "/index",
  name: "Index",
  component: () => import("@/views/Index"),
  children: [{
    path: "/index",
    redirect: "/index/tab"
  }, {
    path: "/index/tab",
    name: "Tab",
    component: () => import("@/views/Tab")
  }, {
    path: "/index/indexchildren",
    name: "IndexChildren",
    component: () => import("@/views/IndexChildren")
  }]
}, {
  path: "/list",
  name: "List",
  component: () => import("@/views/List")
}, {
  path: "/my",
  name: "My",
  component: () => import("@/views/My")
}, {
  path: "/search",
  name: "Search",
  component: () => import("@/views/Search")
}, {
  path: "/detail/:id",
  name: "Detail",
  component: () => import("@/views/Detail")
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 全局前置守卫
router.beforeEach((to, from, next) => {
  if (to.path === "/search") {
    if (localStorage.getItem("token")) {
      next()
    } else {
      alert("用户没有登录。请登录")
      next("/my")
    }
  } else {
    next()
  }
})


export default router