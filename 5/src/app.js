import "@/scss/index.scss";
import Vue from "vue/dist/vue.js";
import axios from "axios";


let vm = new Vue({
    el: "#app",
    data: {
        ind: 2,
        arr: []
    }
})


axios.get("/api/list").then(result => {
    console.log(result.data.list)
    vm.arr = result.data.list
})