<template>
    <div class="mains">
        <ul>
            <li v-for="(item) in arr" :key="item.id">
                <img :src="item.url" alt />
                <span>{{ item.title }}</span>
                <b @click="add(item)">{{ item.flag?"已订阅":"订阅" }}</b>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Mains",
    props: {
        arr: Array,
    },
    methods: {
        add(item) {
            this.$emit("add", item);
        },
    },
};
</script>

<style lang="scss" scoped>
.mains {
    flex: 1;
    height: 100%;
    background: skyblue;
    ul {
        li {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 60px;
            padding: 0 20px;
            img {
                border-radius: 50%;
                width: 50px;
            }
            span {
                flex: 1;
            }
        }
    }
}
</style>