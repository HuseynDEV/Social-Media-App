import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'
import {router} from './router'
import './index.css'
import Vuelidate from 'vuelidate'
// import axios from 'axios'

Vue.config.productionTip = false
Vue.use(Vuelidate)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
