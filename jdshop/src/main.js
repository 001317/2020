// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Swipe, SwipeItem } from 'vant';
import { Grid, GridItem } from 'vant';
import { Image } from 'vant';
import { Button } from 'vant';
import { CountDown } from 'vant';
import { Col, Row } from 'vant';
import { TreeSelect } from 'vant';




Vue.use(Swipe).use(SwipeItem);
Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Vant);
Vue.use(Grid).use(GridItem);
Vue.use(Image);
Vue.use(CountDown);
Vue.use(Col);
Vue.use(Row);
Vue.use(TreeSelect);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
