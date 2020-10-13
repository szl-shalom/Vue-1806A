<template>
    <div>
        <van-card
            v-for="(item, index) in list"
            :key="index"
            :desc="'描述信息' + item.id"
            :title="item.title"
            :thumb="item.url"
            @click="toDetail(item.id)"
        />
    </div>
</template>

<script>
export default {
    props: {
        list: Array,
    },
    methods: {
        toDetail(id) {
            // this.$router.push({ name: "Detail",params:{ id } });
            // 动态路由跳转
            this.$router.push(`/detail/${id}`);
        },
    },
};
</script>

<style>
</style>