<template>
    <div>
        <hr />
        我是子组件
        num:{{ num }}
        <button @click="go">点我</button>
    </div>
</template>


<script>
export default {
    props: {
        num: Number,
    },
    methods: {
        go() {
            // 触发自定时事件add
            this.$emit("add", 1, 2, 3);
        },
    },
};
</script>