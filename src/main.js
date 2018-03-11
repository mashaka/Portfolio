import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './components/App.vue'

import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo);

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App)
})