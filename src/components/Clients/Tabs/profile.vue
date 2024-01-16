<template>
    <div>
        <div class="border-b-2 border-gray-100 py-3">
            <h2 class="uppercase font-semibold text-md">Thông tin cá nhân</h2>
            <span class="text-base font-light"
                >Hồ sơ và các thông tin của bạn</span
            >
        </div>
        <div class="flex pt-7">
            <div class="w-4/5 pr-7">
                <form action="">
                    <table class="w-full">
                        <tr>
                            <td class="pb-8">Họ tên</td>
                            <td class="pb-8">
                                <input type="text" disabled class="w-full" />
                            </td>
                        </tr>
                        <tr>
                            <td class="pb-8">Email</td>
                            <td class="pb-8">
                                <input type="text" disabled class="w-full" />
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
            <div
                class="w-2/5 justify-center flex items-center border-l-2 border-gray-50"
            >
                <img
                    loading="lazy"
                    class="rounded w-36 h-36"
                    src="./image_user.png"
                    alt="Extra large avatar"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: JSON.parse(localStorage.getItem('user')),
        }
    },
}
</script>

<style></style>
