import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import Vant from 'vant';
import 'vant/lib/index.css';

import MyFooter from "@/components/MyFooter"
Vue.component("MyFooter", MyFooter)

Vue.use(Vant);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')