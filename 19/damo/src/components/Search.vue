<template>
    <div>
        <van-search
            v-model="val"
            placeholder="请输入搜索关键词"
            @input="search"
        />

        <ul>
            <li v-for="(item, index) in list" :key="index">{{ item.title }}</li>
        </ul>
    </div>
</template>

<script>
import Axios from "axios";
export default {
    data() {
        return {
            val: "",
            list: [],
        };
    },
    methods: {
        search() {
            Axios.get("/api/search", {
                params: {
                    val: this.val,
                },
            }).then((result) => {
                this.list = result.data;
            });
        },
    },
    created() {
        this.search();
    },
};
</script>

<style>
</style>