<template>
    <div>
        <dl>
            <dt>
                <img :src="item.img" alt="" />
            </dt>
            <dd>
                <p class="name">{{ item.name }}</p>
                <p class="content">{{ item.desc }}</p>
            </dd>
        </dl>
        <van-divider
            :style="{
                color: '#1989fa',
                borderColor: '#1989fa',
                padding: '0 16px',
            }"
        >
            评论
        </van-divider>
        <ul>
            <li v-for="(val, index) in item.mess" :key="index">
                <dl>
                    <dt>
                        <img :src="val.img" alt="" />
                    </dt>
                    <dd>
                        <p class="name">{{ val.name }}</p>
                        <p class="content">{{ val.content }}</p>
                    </dd>
                </dl>
            </li>
        </ul>

        <van-tabbar>
            <template>
                <div>
                    <input type="text" v-model="val" />
                    <button @click="addMess">提交</button>
                </div>
            </template>
        </van-tabbar>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    computed: {
        ...mapState(["item"]),
    },
    created() {
        console.log(this.item);
    },
    data() {
        return {
            val: "",
        };
    },
    methods: {
        ...mapMutations(["Add_Mess"]),
        addMess() {
            if (localStorage.getItem("token")) {
                let obj = {
                    name: localStorage.getItem("token"),
                    content: this.val,
                    img:
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601358259338&di=0d8844fb5d55820f3ea228b3053aa128&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201411%2F01%2F20141101171342_xHRH2.jpeg",
                };

                this.Add_Mess({
                    id: this.$route.params.id,
                    obj,
                });
            } else {
                this.$router.push("/my");
            }
        },
    },
};
</script>

<style>
img {
    width: 50px;
}
</style>