import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyFooter from "@/components/MyFooter";
// import MyFooter from "@/components/MyFooter";


Vue.component("MyFooter", MyFooter)
// 使用vant
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
// 全局组件



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')