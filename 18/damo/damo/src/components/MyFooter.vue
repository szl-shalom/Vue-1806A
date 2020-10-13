<template>
    <van-tabbar route>
        <van-tabbar-item
            v-for="(item, index) in links"
            :key="index"
            replace
            :to="item.path"
            :icon="item.icon"
        >
            {{ item.name }}
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    path: "/index",
                    name: "首页",
                    icon: "wap-home-o",
                },
                {
                    path: "/list",
                    name: "列表",
                    icon: "coupon-o",
                },
                {
                    path: "/search",
                    name: "搜索",
                    icon: "search",
                },
                {
                    path: "/my",
                    name: "我的",
                    icon: "user-o",
                },
            ],
        };
    },
};
</script>

<style>
</style>