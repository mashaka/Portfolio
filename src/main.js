import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { MdButton, MdCard, MdChip } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-awesome/icons'
import App from './components/App.vue'
import VueScrollTo from 'vue-scrollto'
import Icon from 'vue-awesome/components/Icon'
import './assets/img/favicon.ico'

Vue.component('icon', Icon)
Vue.use(MdButton)
Vue.use(MdCard)
Vue.use(MdChip)
Vue.use(VueScrollTo)
Vue.use(BootstrapVue)

new Vue({
    el: '#app',
    render: h => h(App)
})