<template>
    <div id="app">
      <!-- 3、使用 组价-->
        <HeaderComp @add="add" />
        <!-- 父子通信  I、使用自定义属性-->
        <!-- 子父通信  A、使用自义定事件 -->
        <ListComp :list="process" type="正在进行" @del="del" />
        <ListComp :list="finish" type="已经完成" @del="del" />
        <HeaderComp @add="add" />
    </div>
</template>

<script>
// 为了表示数据的唯一性  唯一标识符 人为的
let id = 0;
// 1、引入组件
import HeaderComp from "./components/HeaderComp";
import ListComp from "./components/ListComp";
export default {
    name: "App",
    // 2、注册组件
    components: {
        HeaderComp,
        ListComp,
    },
    data() {
        return {
            list: [
                {
                    id: ++id,
                    title: "张三" + id,
                    flag: false,
                },
                {
                    id: ++id,
                    title: "张三" + id,
                    flag: true,
                },
                {
                    id: ++id,
                    title: "张三" + id,
                    flag: true,
                },
                {
                    id: ++id,
                    title: "张三" + id,
                    flag: false,
                },
                {
                    id: ++id,
                    title: "张三" + id,
                    flag: false,
                },
                {
                    id: ++id,
                    title: "张三" + id,
                    flag: false,
                },
                {
                    id: ++id,
                    title: "张三" + id,
                    flag: false,
                },
                {
                    id: ++id,
                    title: "张三" + id,
                    flag: false,
                },
                {
                    id: ++id,
                    title: "张三" + id,
                    flag: false,
                },
                {
                    id: ++id,
                    title: "张三" + id,
                    flag: false,
                },
            ],
        };
    },
    computed: {
        finish() {
            return this.list.filter((item) => item.flag);
        },
        process() {
            return this.list.filter((item) => !item.flag);
        },
    },
    methods: {
        del(id) {
            this.list = this.list.filter((item) => item.id != id);
        },
        add(val) {
            this.list.push({
                title: val,
                id: ++id,
                flag: false,
            });
        },
    },
};
</script>

<style>
#app {
    width: 500px;
    margin: auto;
}
</style>
