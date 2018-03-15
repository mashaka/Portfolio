import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-awesome/icons'
import App from './components/App.vue'
import VueScrollTo from 'vue-scrollto'
import Icon from 'vue-awesome/components/Icon'

Vue.component('icon', Icon);
Vue.use(VueMaterial);
Vue.use(VueScrollTo);
Vue.use(BootstrapVue);

new Vue({
    el: '#app',
    render: h => h(App)
})