// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import App from './App'
import router from './router'
// import axios from './axios/axios.js'
import axios from 'axios'

Vue.use(Vant)
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.baseURL = '/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
