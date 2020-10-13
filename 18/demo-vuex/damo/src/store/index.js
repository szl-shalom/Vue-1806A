import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from "axios";

export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    INIT_LIST(state, arr) {
      state.list = arr;
    },
    DELETE_LIST(state, index) {
      state.list.splice(index, 1)
    }
  },
  actions: {
    GET_LIST(context) {
      axios.get("/api/list").then(result => {
        context.commit("INIT_LIST", result.data)
      })
    }
  },
  modules: {}
})