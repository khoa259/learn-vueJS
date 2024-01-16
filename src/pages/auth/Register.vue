<template>
  <!-- component -->
  <div class="py-6">
    <div
      class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl"
    >
      <div
        class="hidden lg:block lg:w-1/2 bg-cover"
        style="
          background-image: url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80');
        "
      ></div>
      <div class="w-full p-8 lg:w-1/2">
        <h2 class="text-2xl font-semibold text-gray-700 text-center">
          Đăng ký
        </h2>
        <form action="" @submit.prevent="register">
          <div class="mt-4">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Họ tên
            </label>
            <input
              class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="text"
              v-model="userName"
            />
          </div>

          <div class="mt-4">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Email
            </label>
            <input
              class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="email"
              v-model="email"
            />
          </div>
          <div class="mt-4">
            <div class="flex justify-between">
              <label class="block text-gray-700 text-sm font-bold mb-2"
                >Mật khẩu</label
              >
              <a href="#" class="text-xs text-gray-500">quên mật khẩu</a>
            </div>
            <input
              class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="password"
              v-model="password"
            />
          </div>
          <div class="mt-8">
            <button
              type="submit"
              class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
            >
              Đăng ký
            </button>
          </div>
        </form>

        <div class="mt-4 flex items-center justify-between">
          <span class="border-b w-1/5 md:w-1/4"></span>
          <router-link to="/login" class="text-xs text-gray-500 uppercase"
            >đăng nhập</router-link
          >
          <span class="border-b w-1/5 md:w-1/4"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Author from "@/api/auth";
export default {
  name: "Register",
  data() {
    return {
      userName: "khoa",
      email: "khoa10688@gmail.com",
      password: "12345678",
    };
  },
  methods: {
    async register() {
      const payload = {
        userName: this.userName,
        email: this.email,
        password: this.password,
      };
      console.log("payload", payload);
      await Author.signup(payload)
        .then((res) => {
          console.log(res);
          alert(
            `Đăng ký thành công, bạn vui lòng vào email ${res?.data?.newUser?.email} để xác thực tài khoản `
          );
        })
        .catch((err) => {
          const { data } = err?.response;
          alert(`${data.message}`);
        });
    },
  },
};
</script>

<style></style>
