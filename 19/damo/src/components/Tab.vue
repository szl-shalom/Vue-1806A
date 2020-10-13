<template>
    <div>
        <van-tabs v-model="active">
            <van-tab
                v-for="(item, index) in list"
                :key="index"
                :title="item.title"
            >
                <component :is="item.comp" />
                {{ "页面" + item.title }}
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    props: {
        list: Array,
    },
    data() {
        return {
            active: 0,
        };
    },
};
</script>

<style>
</style>