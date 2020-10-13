<template>
    <div id="app">
        <ul>
            <li v-for="(item, index) in list" :key="index">
                {{ item.title }}
                <img :src="item.url" alt="" />
                <button @click="DELETE_LIST(index)">删除</button>
            </li>
        </ul>
    </div>
</template>


<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
    computed: {
        ...mapState(["list"]),
    },
    methods: {
        ...mapActions(["GET_LIST"]),
        ...mapMutations(["DELETE_LIST"])
    },
    created() {
        this.GET_LIST();
    },
};
</script>


<style lang="scss">
</style>
