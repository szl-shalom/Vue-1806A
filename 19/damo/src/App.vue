<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 2,
            activeName: "a",
        };
    },
};
</script>

<style lang="scss">
</style>
