<template>
    <div>
        <van-nav-bar
            title="详情页"
            left-text="返回"
            right-text="按钮"
            left-arrow
            @click-left="onClickLeft"
        />
        <dl>
            <dt>
                <img :src="item.url" alt="" />
            </dt>
            <dd>{{ item.title }}</dd>
        </dl>
        <button @click="addCar">加入购物车</button>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            id: this.$route.params.id,
            item: {},
        };
    },
    created() {
        axios
            .get("/api/detail", {
                params: {
                    id: this.id,
                },
            })
            .then((result) => {
                this.item = result.data;
            });
    },
    methods: {
        onClickLeft() {
            this.$router.back();
        },
        addCar() {
            this.$router.push({ name: "Search" });
        },
    },
};
</script>

<style>
</style>