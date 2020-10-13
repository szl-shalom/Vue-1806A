// 引入swiper
import Swiper from "swiper"

// 引入axios
import axios from "axios";

let box = document.querySelector(".box");
axios.get("/api/urls").then(result => {
    box.innerHTML = result.data.urls.map(item => {
        return `
        <div class="swiper-slide">
            <img src="${item}" alt="">
        </div>
        `
    }).join("")

    // 开启轮播
    new Swiper(".banner", {
        autoplay: true,
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true
    })
})