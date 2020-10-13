<template>
    <div id="app">
        <header>头部</header>
        <main>
            <div class="tab">
                <!-- 切换动态组件 -->
                <span
                    v-for="(item,index) in arr"
                    :key="index"
                    @click="ind=index"
                    :class="{active:ind===index}"
                >{{ item.name }}</span>
            </div>
            <div class="banner">
                <!-- 动态组件 -->
                <!-- <component :is="组件"> -->
                <component :is="arr[ind].comp" />
            </div>
            <GlobalComp />
        </main>
        <footer>
            <span>首页</span>
            <span>搜索</span>
            <span>消息</span>
            <span>我的</span>
        </footer>
    </div>
</template>

<script>
import Carrousel from "./components/Carrousel";
import List from "./components/List";
// import GlobalComp from "./components/GlobalComp";
export default {
    name: "App",
    data() {
        return {
            arr: [
                {
                    name: "轮播",
                    comp: Carrousel,
                },
                {
                    name: "列表",
                    comp: List,
                },
            ],
            ind: 0,
        };
    },
    components: {
        // GlobalComp,
    },
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    list-style: none;
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
    display: flex;
    flex-direction: column;
    header {
        height: 46px;
        background: skyblue;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #fff;
    }
    main {
        flex: 1;
        overflow-y: auto;
        .banner {
            width: 100%;
            height: 150px;
        }
        .tab {
            span {
                padding: 0 20px;
                &.active {
                    color: red;
                }
            }
        }
    }
    footer {
        height: 46px;
        background: tomato;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #fff;
    }
}
</style>
