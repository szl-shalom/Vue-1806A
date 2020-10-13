<template>
    <div id="app">
        <ListComp :list="list" />
    </div>
</template>

<script>
import axios from "axios";
import ListComp from "./components/ListComp";
export default {
    name: "App",
    components: {
        ListComp,
    },
    created() {
        axios.get("/api/list").then((result) => {
            this.list = result.data.list;
        });
    },
    data() {
        return {
            list: [],
        };
    },
};
</script>

<style>

</style>
