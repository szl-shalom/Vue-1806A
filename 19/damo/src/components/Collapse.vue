<template>
    <van-collapse v-model="activeNames">
        <van-collapse-item name="1">
            <template #title>
                <div>标题1 <van-icon name="question-o" /></div>
                <div>标题2 <van-icon name="question-o" /></div>
                <div>标题3 <van-icon name="question-o" /></div>
            </template>
            <p>内容1</p>
            <p>内容2</p>
            <p>内容3</p>
        </van-collapse-item>
     
    </van-collapse>
</template>

<script>
export default {
    data() {
        return {
            activeNames: ["1"],
        };
    },
};
</script>

<style>
.van-cell__title {
    display: flex;
}
</style>