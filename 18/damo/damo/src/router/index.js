import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: "/index"
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import( /* webpackChunkName: "Index" */ '../views/Index.vue')
  }, {
    path: '/search',
    name: 'Search',
    component: () => import( /* webpackChunkName: "Search" */ '../views/Search.vue'),
    beforeEnter: (to, from, next) => {
      localStorage.getItem("token") ? next() : next({
        path: "/my",
        // replace: true
      })
    }
  }, {
    path: '/list',
    name: 'List',
    component: () => import( /* webpackChunkName: "List" */ '../views/List/List.vue'),
    children: [{
        path: "/list",
        redirect: "/list/aa"
      },
      {
        path: '/list/aa',
        name: 'AA',
        component: () => import( /* webpackChunkName: "AA" */ '../views/List/AA.vue')
      }, , {
        path: '/list/bb',
        name: 'BB',
        component: () => import( /* webpackChunkName: "BB" */ '../views/List/BB.vue')
      },
    ]
  }, {
    path: '/my',
    name: 'My',
    component: () => import( /* webpackChunkName: "My" */ '../views/My.vue')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import( /* webpackChunkName: "Detail" */ '../views/Detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// // 
// router.beforeEach((to, from, next) => {
//   // 路由守卫拦截
//   if (to.path === "/search") {
//     localStorage.getItem("token") ? next() : next("/my")
//     return;
//   }

//   next()

// })


export default router