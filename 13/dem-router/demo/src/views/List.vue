<template>
    <div>
        列表
        <ul>
            <li v-for="item in list" :key="item.id">
                <dl @click="toDetail(item.id)">
                    <dt>
                        <img :src="item.url" alt />
                    </dt>
                    <dd>{{ item.title }}</dd>
                </dl>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
export default {
    created() {
        axios.get("/api/list").then((result) => {
            this.list = result.data;
            console.log(this.list);
        });
    },
    data() {
        return {
            list: [],
        };
    },
    methods: {
        toDetail(id) {
            this.$router.push(`/detail/${id}`);
        },
    },
};
</script>

<style>
dl {
    display: flex;
}
</style>