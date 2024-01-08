<template>
  <div
    class="heading_posts bg-slate-50 flex justify-between shadow-md rounded-bl-lg rounded-br-lg p-5"
  >
    <div class="title w-4/6 leading-loose">
      <h1 class="text-3xl font-bold">{{ item.title }}</h1>
      <span class="text-base font-semibold text-slate-600">{{
        item.title
      }}</span>
      <div class="flex space-x-2 items-start border-t-2 py-3">
        <i class="fa-solid fa-location-dot text-xl text-red-600"></i>
        <p class="text-slate-700 font-medium text-base capitalize">
          {{ item.fullAdress ? item.fullAdress : "đang cập nhật địa chỉ" }}
        </p>
      </div>
      <div class="flex space-x-1 justify-start items-center">
        <span
          class="text-[var(--cl-yellow)] bg-white rounded-md text-sm font-semibold border-2 border-[var(--cl-yellow)] px-2 py-1"
          ><i class="fa-solid fa-calendar-days text-red-400 pr-2"></i>
          {{ formatDate(item.createdAt) }}</span
        >
        <div v-if="item.categoryId">
          <router-link
            :to="`/list-all/${item.categoryId._id}`"
            class="text-[var(--cl-yellow)] bg-white rounded-md text-sm font-semibold border-2 border-[var(--cl-yellow)] px-2 py-1 hover:bg-[var(--cl-yellow)] hover:text-white duration-200"
          >
            {{ item.categoryId ? item.categoryId.nameCate : "" }}
          </router-link>
        </div>
      </div>
    </div>

    <div class="flex-col justify-start space-y-2">
      <div class="flex space-x-2 items-center">
        <i class="fa-solid fa-hand-holding-dollar text-xl"></i>
        <p class="text-slate-700 font-medium text-base">
          {{ formatPrice(item.pricemin) }} -
          {{ formatPrice(item.pricemax) }} VNĐ
        </p>
      </div>
      <div class="flex space-x-2 items-center">
        <i class="fa-regular fa-clock text-xl"></i>
        <p class="text-slate-700 font-medium text-base">
          {{ item.timeopen }} - {{ item.timeclose }}
        </p>
      </div>
      <div class="flex space-x-2 items-center">
        <span
          class="text-[var(--cl-yellow)] bg-white rounded-md text-sm font-semibold border-2 border-[var(--cl-yellow)] px-2 py-1"
        >
          <i class="fa-solid fa-star text-yellow-400 pr-2"></i>{{ item.rating }}
        </span>
        <span
          class="text-[var(--cl-yellow)] bg-white rounded-md text-sm font-semibold border-2 border-[var(--cl-yellow)] px-2 py-1"
        >
          <i class="fa-solid fa-eye pr-2 text-blue-500"></i>
          {{ item.review }}</span
        >
      </div>
      <div class="block">
        <button
          class="w-full border-[var(--cl-yellow)] text-[var(--cl-yellow)] border-2 py-1 rounded-lg focus:bg-[var(--cl-yellow)] focus:text-white"
          @click="handleSave(item._id)"
        >
          {{ isSave ? "Chán rồi !" : "Yêu thích" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapActions } from "vuex";

export default {
  props: ["item"],
  data() {
    return {
      idSave: null,
      isSave: false,
      local: JSON.parse(localStorage.getItem("user")),
    };
  },
  methods: {
    ...mapActions(["addWishList", "removeWishList"]),
    formatDate(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY HH:SS");
      }
    },
    formatPrice(value) {
      let val = (value / 1).toFixed().replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    handleSave(id) {
      if (this.local === null) {
        return alert("Bạn cần đăng nhập");
      } else {
        this.isSave = !this.isSave;
        const payload = {
          email: this.local.email,
          postsId: id,
        };
        if (this.isSave) {
          this.addWishList(payload);
          console.log("id va isSave", id, this.isSave);
        } else {
          console.log("item remove", id);
          this.removeWishList(payload);
        }
      }
    },
  },
};
</script>

<style></style>
