// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Clock from './components/Clock'
import SetInterval from './components/SetInterval'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/clock', component: Clock},
    {path:'/setinterval', component: SetInterval}
  ],
  mode: "history"
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
