import Vue from 'vue'
import Router from 'vue-router'
import { resolve } from 'dns';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      redirect: '/main',
     
    },
    {
      path: '/main',
      name:"主界面",
      component: resolve=>require(["@/views/main/main.vue"],resolve),
      children:[
        {
          path: '/edit',
          name:"编辑界面",
          component: resolve=>require(["@/views/edit/index.vue"],resolve)
        },
        {
          path: '/running',
          name:"运行界面",
          component: resolve=>require(["@/views/running/index.vue"],resolve)
        }
      ]
    }
  ]
})
