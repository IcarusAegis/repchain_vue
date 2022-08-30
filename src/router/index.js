import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import blockinfo from "@/components/blockinfo";
import upload_trans from "@/components/upload_trans";
import setting from "@/components/setting";
import api_test from "@/components/api_test";
import api from "@/views/api";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'blockinfo',
    component: blockinfo
  },{
    path:'/setting',
    component: setting
  },
  {
    path:'/blockinfo',
    component: blockinfo
  },
  {
    path: '/api_test',
    component: api_test
  },
  {
    path:'/api',
    component: api,
  }
    ,
  {
    path:"/upload",
    component: upload_trans
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
