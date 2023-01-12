import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/course',
    name: 'course',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Course.vue')
  },
  {
    path: '/user',
    name: 'user',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue'),
    redirect: () => `/user/${localStorage.userType}`,
    children: [
      {
        path: '/user/vip',
        component: () => import(/* webpackChunkName: "vip" */ '../components/Vip.vue')
      },
      {
        path: '/user/normal',
        component: () => import(/* webpackChunkName: "normal" */ '../components/Normal.vue')
      }
    ]

  },
  {
    path: '/news',
    name: 'news',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      top: () => import(/* webpackChunkName: "top" */ '../components/Top.vue'),
      bottom: () => import(/* webpackChunkName: "bottom" */ '../components/Bottom.vue'),
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
