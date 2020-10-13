<template>
    <swiper ref="mySwiper" :options="swiperOptions" class="carrousel">
        <swiper-slide>
            <img
                src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1728556270,2676945380&fm=26&gp=0.jpg"
                alt
            />
        </swiper-slide>
        <swiper-slide>
            <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600409136377&di=dbe91cafa5fcd6be8ad8db8b0988373a&imgtype=0&src=http%3A%2F%2Fimg.91jiameng.cn%2F2019%2F02%2F16923a8b2cc.png"
                alt
            />
        </swiper-slide>
        <swiper-slide>
            <img
                src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1099335495,2353408217&fm=26&gp=0.jpg"
                alt
            />
        </swiper-slide>
        <swiper-slide>
            <GlobalComp />
        </swiper-slide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";
import "swiper/swiper-bundle.css";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    directives: {
        swiper: directive,
    },
    name: "carrousel",
    data() {
        return {
            swiperOptions: {
                pagination: {
                    el: ".swiper-pagination",
                },
                // Some Swiper option/callback...
            },
        };
    },
};
</script>

<style lang="scss" scoped>
.carrousel {
    width: 100%;
    height: 100%;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>