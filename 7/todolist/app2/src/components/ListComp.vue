<template>
    <div>
        <h2>
            <span>{{ type }}</span>
            <b>{{ list.length }}</b>
        </h2>
        <ul>
            <li v-for="item in list" :key="item.id">
                <input type="checkbox" v-model="item.flag" />
                <span>{{ item.title }}</span>
                <b @click="del(item.id)">X</b>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    // 父子通信 II.使用props接受 数据类型可以使 数组 对象（推荐）
    props: {
        list: Array,
        type: String,
    },
    methods: {
        del(id) {
            // 子父通信 B、使用this.$emit("事件名称"，参数1.。。。)
            this.$emit("del", id);
        },
    },
};
</script>

<style lang="css" scoped>
ul {
}
li {
    font-size: 26px;
    border-bottom: 1px solid #ccc;
}
input {
    width: 20px;
    height: 20px;
}
b {
    float: right;
}
</style>