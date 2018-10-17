import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import "@/static/css/index.less";
import iview from "iview";
import "iview/dist/styles/iview.css";
import common from "@/static/js/common.js";
Vue.prototype.$common = common;
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(iview);
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
