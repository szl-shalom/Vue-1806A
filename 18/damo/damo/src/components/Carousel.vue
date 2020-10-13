<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in banner" :key="index">
            <img :src="item" alt="" />
        </van-swipe-item>
    </van-swipe>
</template>

<script>
export default {
    props: {
        banner: Array,
    },
};
</script>

<style lang="scss">
.my-swipe .van-swipe-item {
    img {
        width: 100%;
    }
}
</style>