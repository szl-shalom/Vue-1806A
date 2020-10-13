<template>
    <div class="home">
        <Tab :list="list" />

        <!-- 尾部 -->
        <van-tabbar route>
            <van-tabbar-item replace to="/home" icon="home-o">
                首页
            </van-tabbar-item>
            <van-tabbar-item replace to="/about" icon="search">
                我的
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import Tab from "@/components/Tab";
import Banner from "@/components/Banner";
import Computer from "@/components/Computer";
import axios from "axios";
export default {
    name: "Home",
    components: {
        Tab,
    },
    created() {},
    data() {
        return {
            list: [
                {
                    title: "手机",
                    comp: Banner,
                },
                {
                    title: "电脑",
                    comp: Computer,
                },
                {
                    title: "手表",
                    comp: () => import("@/components/Collapse"),
                },
                {
                    title: "家电",
                    comp: () => import("@/components/Search"),
                },
            ],
        };
    },
};
</script>
