<template>
  <div class="homepage">
    <img src="./img/ndo_br_3-8417.jpg" alt="" class="homepage_image relative" />
    <div class="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/3">
      <div class="flex lg:gap-2 max-h-[380px] mt-6 container">
        <Banner />
        <Weather />
      </div>
      <div class="w-2/4 mx-auto mt-20">
        <Search />
      </div>
    </div>
    <div class="container flex justify-center pt-8">
      <BoxItemCate />
    </div>
    <div class="container sub_banner pt-8">
      <img
        src="https://www.shutterstock.com/image-vector/march-8-happy-womens-day-260nw-1029869584.jpg"
        alt=""
      />
    </div>
    <div class="pt-8 static">
      <NewEatingArea />
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Homepage/Banner.vue";
import Weather from "@/components/Homepage/Weather.vue";
import BoxItemCate from "@/components/Homepage/BoxItemCate.vue";
import Search from "@/components/Homepage/Search.vue";
import NewEatingArea from "@/components/Homepage/NewEatingArea.vue";
export default {
  name: "HomePage",
  components: {
    Banner,
    Weather,
    BoxItemCate,
    Search,
    NewEatingArea,
  },
};
</script>

<style scoped>
.homepage {
  background-color: rgb(243, 230, 214);
}
.homepage_image {
  width: 100%;
  max-height: 700px;
  object-fit: cover;
  filter: brightness(0.8);
}
.sub_banner img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
</style>
