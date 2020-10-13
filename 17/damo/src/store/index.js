import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from "axios";


export default new Vuex.Store({
  state: {
    //切换数据
    tabs: [],
    // 详情页数据
    item: {},
  },
  mutations: {
    // 设置Tabs初始值
    Init_Tabs(state, data) {
      state.tabs = data;
    },
    Init_Item(state, id) {
      state.tabs.forEach(item => {
        item.children.forEach(item => {
          if (item.id === id) {
            state.item = item;
          }
        })
      })
    },
    Add_Mess(state, {
      id,
      obj
    }) {
      state.tabs.forEach(item => {
        item.children.forEach(item => {
          if (item.id === id) {
            item.mess.push(obj)
          }
        })
      })
    }
  },
  actions: {
    Set_Tabs(context) {
      axios.get("/api/tab").then(result => {
        context.commit("Init_Tabs", result.data)
      })
    }
  },
  modules: {}
})