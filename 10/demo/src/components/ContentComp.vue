<template>
    <div class="item">
        <dl>
            <dd>
                <img :src="item.littleImageUrl" alt />
            </dd>
            <dt>
                <p>{{ item.spuName }}</p>
                <p class="ex">{{ item.spuDesc }}</p>
                <p>1份/{{ item.currentPrice }}￥</p>
                <div class="count">
                    <b v-if="item.count" @click="item.count--">-</b>
                    <span v-if="item.count">{{ item.count }}</span>
                    <b @click="item.count++">+</b>
                </div>
            </dt>
        </dl>
    </div>
</template>

<script>
export default {
    props: {
        item: Object,
    },
    created() {
        // this.item.count = 0;
        this.$set(this.item, "count", 0);
    },
};
</script>

<style lang="scss" scoped>
.item {
    width: 100%;
    height: 110px;
    dl {
        display: flex;
        width: 100%;
        dd {
            width: 100px;
            flex-shrink: 0;
            img {
                width: 100%;
            }
        }
        dt {
            flex: 1;
            overflow: hidden;
            .ex {
                overflow: hidden;

                text-overflow: ellipsis;

                display: -webkit-box;

                -webkit-box-orient: vertical;

                -webkit-line-clamp: 1;

                // overflow: hidden;
                // text-overflow: ellipsis;
                // white-space: nowrap;
            }
            .count {
                display: flex;
                justify-content: flex-end;
                padding: 0 20px;
                b,
                span {
                    padding: 0 6px;
                }
            }
        }
    }
}
</style>