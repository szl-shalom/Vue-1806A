<template>
    <div class="tabs">
        <ul>
            <li
                v-for="(item,index) in list"
                :key="item.id"
                :class="{active:ind===index}"
                @click="changeInd(index)"
            >{{ item.title }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Tabs",
    props: {
        list: Array,
        ind: Number,
    },
    methods: {
        changeInd(index) {
            // 触发自定义事件changeInd
            this.$emit("changeInd", index);
        },
    },
};
</script>

<style lang="scss" scoped>
.tabs {
    width: 80px;
    height: 100%;
    overflow-y: auto;
    ul {
        width: 100%;
        height: 100%;

        li {
            height: 46px;
            line-height: 46px;
            text-align: center;
            border-bottom: 1px solid #ccc;
            &.active {
                background: tomato;
                color: #fff;
            }
        }
    }
}
</style>