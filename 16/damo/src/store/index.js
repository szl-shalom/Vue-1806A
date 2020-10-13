import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 相当于 组件的data
  state: {
    list: [{
      title: "张三",
      age: 16
    }, {
      title: "李四",
      age: 22
    }, {
      title: "王五",
      age: 32
    }]
  },
  // 相当于组件的 methods
  mutations: {
    // 所有mutations上的方法  第一个参数必须是state
    // 从第二个参数起  是传入的参数
    addList(state, obj) {
      state.list.push(obj)
    },
    delList(state, index) {
      state.list.splice(index, 1)
    }
  },
  // 相当于 组件的computed
  getters: {
    persons(state) {
      return state.list.filter(item => item.age >= 18)
    }
  },
  actions: {},
  modules: {}
})