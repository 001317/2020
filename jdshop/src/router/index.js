import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import { Image } from 'vant';

Vue.use(Image);
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },

  ]
})
