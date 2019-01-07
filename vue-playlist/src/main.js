// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Home from './components/Home'
import HelloWorld from './components/HelloWorld'
import axios from 'axios'

axios.defaults.headers.common['token'] = '...'
axios.defaults.headers.post['content-type'] = '...'

/* eslint-disable no-new */

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.prototype.$axios = axios

const router = new VueRouter({
    routes:[
      {path:'/',component: Home},
      {path:'/helloworld',component: HelloWorld}
    ],
    mode: "history"
})


new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
