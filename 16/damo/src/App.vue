<template>
    <div id="app">
        <input type="text" placeholder="请输入姓名" v-model="person.title" />
        <input type="text" placeholder="请输入年龄" v-model="person.age" />
        <input type="button" value="提交" @click="add" />

        <h2>所以年龄数据</h2>
        <ul>
            <li v-for="(item, index) in list" :key="index">
                {{ item.title }}---{{ item.age }} --- <b @click="delList(index)">删除</b>
            </li>
        </ul>

        <!--展示 18岁以上的 -->
        <h2>所以年龄>18岁的</h2>
        <ul>
            <li v-for="(item, index) in persons" :key="index">
                {{ item.title }}---{{ item.age }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
export default {
    computed: {
        // 映射 state
        ...mapGetters(["persons"]),
        ...mapState(["list"]),
    },
    methods: {
        // 映射 matations
        ...mapMutations(["addList", "delList"]),

        add() {
            // 调用映射出来的addlist方法
            this.addList({
                ...this.person,
            });
        },
    },
    data() {
        return {
            person: {
                title: "",
                age: "",
            },
        };
    },
};
</script>

<style lang="scss">
</style>
