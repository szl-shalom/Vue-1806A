<template>
    <div>
        <ListItem :list="list" />
    </div>
</template>

<script>
import ListItem from "@/components/ListItem";
import axios from "axios";

export default {
    components: {
        ListItem,
    },
    created() {
        axios.get("/api/list").then((result) => {
            this.list = result.data;
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