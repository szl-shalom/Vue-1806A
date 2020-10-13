<template>
    <div>
        <Carousel :banner="banner" />
        <ListItem :list="list" />
        <MyFooter />
    </div>
</template>

<script>
import Carousel from "@/components/Carousel";
import ListItem from "@/components/ListItem";
import axios from "axios";
export default {
    components: {
        Carousel,
        ListItem,
    },
    created() {
        axios.get("/api/banner").then((result) => {
            this.banner = result.data;
        });
        axios.get("/api/list").then((result) => {
            this.list = result.data;
        });
    },
    data() {
        return {
            banner: [],
            list: [],
        };
    },
};
</script>

<style>
</style>