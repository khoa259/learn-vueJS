<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper w-2/3"
  >
    <swiper-slide v-for="(item, index) in listItems" :key="index">
      <img loading="lazy" :src="item.banner" alt="" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import axios from "axios";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      listItems: [],
    };
  },
  created() {
    this.getdata = axios
      .get("https://6530fece4d4c2e3f333c2ecf.mockapi.io/banner")
      .then((res) => {
        this.listItems = res.data;
      });
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  max-height: 364px;
  border-radius: 4px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper-button-prev,
.swiper-button-next {
  color: #ff8a00 !important;
  width: 20px !important;
  font-weight: 800;
  height: 20px !important;
}

.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 26px !important;
}
</style>
