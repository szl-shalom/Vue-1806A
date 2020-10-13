<template>
    <div id="app">
        <header></header>
        <main>
            <!--Tab -->
            <div class="tab">
                <!-- 侧边栏 -->
                <div class="slide">
                    <SlideComp
                        v-for="(item,index) in list"
                        :key="index"
                        :item="item"
                        :isActive="tabIndex===index?'active':''"
                        :index="index"
                        @changeIndex="changeIndex"
                    />
                </div>
                <!-- 内容 -->
                <div class="content">
                    <template v-if="list.length">
                        <ContentComp
                            v-for="(item) in list[tabIndex].spuList"
                            :key="Math.random()"
                            :item="item"
                        />
                    </template>
                </div>
            </div>
        </main>
        <footer></footer>
    </div>
</template>

<script>
import SlideComp from "./components/SlideComp";
import ContentComp from "./components/ContentComp";
import axios from "axios";
export default {
    name: "App",
    components: {
        SlideComp,
        ContentComp,
    },
    created() {
        // 请求数据
        axios.get("/api/list").then((result) => {
            // 修改数据
            this.list = result.data;
            console.log(this.list);
        });
    },
    data() {
        return {
            // 数据
            list: [],
            // 高亮下表
            tabIndex: 0,
        };
    },
    methods: {
        // 方法 改变下表
        changeIndex(index) {
            this.tabIndex = index;
        },
    },
};
</script>

<style lang="scss" scoped>
@import url("assets/scss/reset.scss");
#app {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    header {
        height: 46px;
        background: hotpink;
    }
    main {
        flex: 1;
        overflow-y: auto;
        .tab {
            display: flex;
            width: 100%;
            .slide {
                width: 100px;
                overflow: hidden;
                padding-left: 20px;
            }
            .content {
                flex: 1;
                height: 100%;
                overflow-y: auto;
            }
        }
    }
    footer {
        height: 46px;
        background: tomato;
    }
}
</style>
