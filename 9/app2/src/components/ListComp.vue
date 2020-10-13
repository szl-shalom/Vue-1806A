<template>
    <div>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <span @click="flag=!flag">{{ item.title }}</span>
                <ListComp v-if="item.children" :list="item.children" v-show="flag" />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    // 递归的名字
    name: "ListComp",
    props: {
        list: Array,
    },
    data() {
        return {
            flag: true,
        };
    },
};
</script>

<style>
</style>