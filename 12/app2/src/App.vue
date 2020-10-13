<template>
    <div id="app">
        <Tabs :list="list" :ind="ind" @changeInd="changeInd" />
        <Mains :arr="list[ind].children" v-if="list.length" @add="add" />
        <div>
            <HaLou />
        </div>
    </div>
</template>

<script>
import Tabs from "./components/Tabs";
import Mains from "./components/Mains";
import HaLou from "./components/HaLou";
import axios from "axios";
export default {
    name: "App",
    components: {
        HaLou,
        Tabs,
        Mains,
    },
    created() {
        axios.get("/api/list").then((result) => {
            console.log(result.data);
            this.list = result.data;
        });
    },
    data() {
        return {
            list: [],
            // 高亮下表
            ind: 0,
            //
        };
    },
    methods: {
        changeInd(index) {
            // 修改下表
            this.ind = index;
        },
        add(item) {
            // 切换
            item.flag = !item.flag;
            if (item.flag) {
                this.list[0].children.push(item);
            } else {
                this.list[0].children = this.list[0].children.filter(
                    (val) => val.id != item.id
                );
            }
        },
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
}
html,
body {
    height: 100%;
    width: 100%;
}
#app {
    display: flex;
    height: 100%;
    width: 100%;
    overflow: hidden;
}
</style>
