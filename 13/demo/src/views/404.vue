<template>
    <div>{{ $route.path }}------------404 页面找不到！！！！！！</div>
</template>

<script>
export default {
    created() {
        // this.$route  代表当前路由
        console.log(this.$route);
        // this.$router 代表路由实例
        console.log(this.$router);
        console.log(this.$route.path);
    },
};
</script>

<style>
</style>