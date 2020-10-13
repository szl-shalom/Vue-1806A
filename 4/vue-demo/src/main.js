// import Vue from "vue";
// 引入完成版Vue.js
import Vue from "vue/dist/vue.js";

// Vue是一个构造函数，也是对象
// 为什么用 Vue 技术栈 
// 1、可以用Spa (单页面)
// 2、响应式的数据绑定
// 3、组件化开发
// 4、Virtual DOM


// 1、模板语法
// v-text 简写 {{  }}  文本             innerText  一般简写 {{}}
// v-html              可以识别html标签 innerHTML
// v-model   双向数据绑定

// 2、属性指令 v-bind
// 语法形式 v-bind:属性名称="值"     简写 :
// 2-1 加强class属性
//     对象语法 ：如果对象的键值对中的键值为真  那么会将键名作为类名
//     数组语法 ：直接将数组中保存的值作为类名
// 2-2 加强的style



// 3、条件指令
// v-if="值"     值为真 正常渲染  值为假不渲染
// v-show="值"   值为真 正常显示  值为假就隐藏


// 4、循环指令
// v-for="(item,index) in 数据"


// 事件
// 回忆：
// 1、什么是事件：一般情况下，指用户和浏览器交互的一瞬间
// 2、事件的传播机制：先捕获=>目标=>冒泡
//   2-1 事件委托：用一个事件去统一管理同一类型的事件，利用事件冒泡原理
// 3、事件三要素：事件源  事件类型   事件驱动函数   



// 5、Vue事件 
// 使用v-on指令  语法：v-on:事件类型="表达式"
// 可以简写    v-on:  => @    和    上午v-bind: => :





window.vm = new Vue({
    // 挂载的节点
    el: "#app",
    // 挂载数据
    data: {
        mes: "hellow Vue !",
        site: "http://www.baidu.con",
        name: "百度",
        className: "active",
        obj: {
            background: "red",
            color: "#fff"
        },
        flag: 0,
        arr: [{
            name: "张三",
            age: "18"
        }, {
            name: "李四",
            age: "20"
        }, {
            name: "王五",
            age: "22"
        }],
        person: {
            name: "呵呵",
            age: 89,
            sex: "男",
            h: 180
        },
        arr1: [{
            name: "item-1",
            children: [{
                name: "item-1-1"
            }, {
                name: "item-1-2"
            }, {

            }]
        }, {
            name: "item-2",
            children: [{
                name: "item-2-1"
            }, {
                name: "item-2-2"
            }, {
                name: "item-2-3"
            }]
        }],
        count: 1
    },
    // 挂载方法
    methods: {
        sayHello() {
            this.count = this.count + 2
        },
        go(){

        },
        press(e){
            console.log(123)
        }
    },
})