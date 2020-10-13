import Vue from 'vue'
import App from './App.vue'
import GlobalComp from "./components/GlobalComp"


Vue.config.productionTip = false

// 使用全局组件
Vue.component("GlobalComp", GlobalComp)


new Vue({
  render: h => h(App),
}).$mount('#app')