import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用路由
Vue.use(VueRouter)


// 路由注册表
const routes = [{
  path: "/",
  // 重定向 根路径路径
  redirect: "/index"
}, {
  path: "/home",
  name: "Home",
  component: () => import("../views/Home"),
}, {
  path: "/index",
  name: "Index",
  component: () => import("../views/Index")
}, {
  // 匹配 404 页面
  path: "*",
  name: "404",
  component: () => import("../views/404")
}]
// 新建路由实例
const router = new VueRouter({
  mode: 'history', //模式 
  base: process.env.BASE_URL,
  routes
})
// 抛出路由实例
export default router