<template>
    <div>
        <h2>首页</h2>

        <router-link to="/index/tab">tab</router-link>
        <router-link to="/index/indexchildren">子路由</router-link>

        <!-- 二级路由出口 -->
        <router-view />
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>