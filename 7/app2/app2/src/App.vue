
<template>
    <div id="app">
        我是父组件，也是根组件
        <p>父组件显示num:{{ num }}</p>

        <FirstComp :num="num" @add="add"></FirstComp>
    </div>
</template>

<script>
import FirstComp from "./components/FirstComp";
export default {
    name: "App",
    components: {
        FirstComp,
    },
    data() {
        return {
            num: 1,
        };
    },
    methods: {
        add(val1,val2,val3) {
            console.log(val1,val2,val3)
            this.num++;
        },
    },
};
</script>

<style>
</style>
