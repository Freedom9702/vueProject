// import引入文件
import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false



import './assets/css/base.css';
import './assets/js/font';

import $ from 'jquery';
window.$ = $;

import router from './plugins/router.config.js'

import config from './config/config';

import './plugins/axios';
window.baseUrl = config.baseUrl.localhost;  //本地端口
// window.baseUrl = config.baseUrl.http;  //服务器端口


import loading from './plugins/loading';
Vue.use(loading);

new Vue({
  render: h => h(App),
  router,
  data:{
    headerdisplay:true,
    footerdisplay:true,
    bloading:true
  },
  
}).$mount('#app')
