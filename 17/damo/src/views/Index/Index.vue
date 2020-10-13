<template>
    <div>
        <van-nav-bar title="微博" left-text="返回" left-arrow fixed placeholder>
            <template #right>
                <van-icon name="search" size="18" />
            </template>
        </van-nav-bar>
        <div class="main">
            <van-tabs v-model="active" animated>
                <van-tab
                    v-for="(item, index) in tabs"
                    :title="item.title"
                    :key="index"
                >
                    <div>
                        <van-skeleton
                            v-for="(item, index) in tabs[active].children"
                            :key="index"
                            avatar
                            :row="3"
                            :loading="loading"
                        >
                            <dl class="item" @click="toDetail(item)">
                                <dt>
                                    <img :src="item.img" alt="" />
                                </dt>
                                <dd>
                                    <p class="name">{{ item.name }}</p>
                                    <p class="content">{{ item.desc }}</p>
                                </dd>
                            </dl>
                            <p class="icon">
                                <van-icon name="share-o" />
                                <van-icon
                                    name="chat-o"
                                    :badge="item.mess.length"
                                />
                                <van-icon
                                    name="thumb-circle-o"
                                    :badge="item.zan"
                                    @click="item.zan++"
                                />
                            </p>
                            <van-divider
                                :style="{
                                    color: '#1989fa',
                                    borderColor: '#1989fa',
                                    padding: '0 16px',
                                }"
                                >分割线</van-divider
                            >
                        </van-skeleton>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
        <MyFooter />
    </div>
</template>
<script>
// 映射---actiions
import { mapActions } from "vuex";
// 映射----state
import { mapState } from "vuex";

// 映射 ---mamutions
import { mapMutations } from "vuex";
export default {
    computed: {
        // state
        ...mapState(["tabs"]),
    },
    methods: {
        // actions
        // 获取 Set_Tab
        ...mapActions(["Set_Tabs"]),
        ...mapMutations(["Init_Item"]),
        onClickLeft() {
            this.$router.back();
        },
        toDetail(item) {
            // 保存item到vuex
            this.Init_Item(item.id);
            // 跳转页面
            // this.$router.push({ name: "Detail", params: { id } });
            this.$router.push(`/detail/${item.id}`);
        },
    },
    data() {
        return {
            active: 0,
            loading: true,
        };
    },
    // 数据准备
    // 这个生命周期函数执行的时候  数据都已经准备了  比如说 映射的数据
    created() {
        // 调用
        !this.tabs.length && this.Set_Tabs();
    },
    mounted() {
        this.loading = false;
    },
};
</script>


<style lang="scss">
dl {
    padding: 20px;
    display: flex;
    dt {
        img {
            border-radius: 50%;
        }
    }
    dd {
        padding-left: 6px;
        .name {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .content {
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            line-clamp: 4;
            -webkit-box-orient: vertical;
        }
    }
}
.icon {
    display: flex;
    justify-content: space-around;
    height: 46px;
    span {
    }
}
</style>