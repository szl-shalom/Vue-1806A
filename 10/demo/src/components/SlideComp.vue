<template>
    <div class="item" :class="isActive" @click="changeIndex">
        {{ item.categoryName }}
        <!-- 数量 -->
        <span>{{ litCount ? litCount:"" }}</span>
    </div>
</template>


<script>
export default {
    props: {
        item: Object,
        isActive: String,
        index: Number,
    },
    methods: {
        changeIndex() {
            this.$emit("changeIndex", this.index);
        },
    },
    computed: {
        litCount() {
            return this.item.spuList.reduce((p, n, index) => {
                return p + n.count;
            }, 0);
        },
    },
};
</script>

<style lang="scss" scoped>
.item {
    height: 40px;
    line-height: 40px;
    width: 100%;
    &.active {
        color: red;
    }
}
</style>