<template>
    <div id="app">
        <main>
            <!-- 一级路由出口 -->
            <router-view />
        </main>
        <footer>
            <router-link to="/index" tag="b">首页</router-link>
            <router-link to="/list" tag="b">列表</router-link>
            <router-link to="/search" tag="b">搜索</router-link>
            <router-link to="/my" tag="b">我的</router-link>
        </footer>
    </div>
</template>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    width: 100%;
    height: 100%;
}
#app {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    main {
        flex: 1;
        overflow-y: auto;
    }
    footer {
        height: 46px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
}
.router-link-exact-active,
.router-link-active {
    color: red;
}
</style>
