import Vue from "vue/dist/vue.js";



window.vm = new Vue({
    el: "#app",
    data: {
        tab: [{
            title: "水果",
            children: ["苹果", "香蕉"]
        }, {
            title: "蔬菜",
            children: ["苹果1111111", "香蕉22222"]
        }, {
            title: "无名氏",
            children: ["苹果XXXXX", "香蕉OOOOO"]
        }],
        ind: 0,
    }
})