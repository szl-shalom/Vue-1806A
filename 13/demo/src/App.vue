<template>
    <div id="app">
        <h1>
            <button @click="back">返回上一级</button>
            <button @click="toIndex">首页</button>
            <button @click="toHome">我的</button>
            <button @click="forward">返回下一级</button>
        </h1>
        <!-- 一级路由 -->
        <!-- 切换路由 -->
        <h2>
            <router-link to="/index" tag="b">首页</router-link>
            <router-link to="/home" tag="span">我的</router-link>
        </h2>
        <!-- 视图出口 -->
        <router-view />
    </div>
</template>
<script>
export default {
    methods: {
        toIndex() {
            // 通过操作 this.$router 路由实例 方法push
            // 跳转路由
            this.$router.push("/index");
        },
        toHome() {
            this.$router.push("/home");
        },
        back() {
            // 后退
            this.$router.back();
        },
        forward() {
            // 前进
            this.$router.forward();
        },
    },
};
</script>
<style>
/* Vue在切换路由的时候 当前路由高亮类名  router-link-exact-active  */
.router-link-exact-active {
    color: red;
}
</style>
