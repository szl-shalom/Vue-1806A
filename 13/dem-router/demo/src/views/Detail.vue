<template>
    <div>详情页 id--{{ $route.params.id }}</div>
</template>

<script>
export default {
    created() {
        console.log(this.$route);
    },
};
</script>

<style>
</style>