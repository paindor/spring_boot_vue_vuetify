import Vue from 'vue'
import App from './components/Home.vue'
import vueRouter from 'vue-router'
import router from './router'

import axios from 'axios'
import vuex from 'vuex'
import promise from 'es6-promise';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
//import VueElementLoading from 'vue-element-loading'


Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
 render: h => h(App),
 router,
 vueRouter,
 axios,
 vuex,
 vuetify,

 // VueElementLoading
 promise
}).$mount('#app')
