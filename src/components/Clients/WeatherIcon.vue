<template>
    <div class="flex flex-col">
        <div>
            <button class="peer font-medium text-base text-white">20°C</button>

            <!-- the menu here -->
            <div
                class="rounded-md hidden peer-hover:flex hover:flex w-[300px] flex-col bg-white drop-shadow-lg absolute z-20"
            >
                <div class="p-5">
                    <div class="font-bold text-base">Hà Nội, Việt Nam</div>
                    <div class="text-sm text-gray-500">
                        Thứ năm, ngày 10 tháng 10 năm 2023
                    </div>
                    <div class="flex flex-row items-center">
                        <div
                            class="text-6xl self-center inline-flex items-center justify-start rounded-lg text-indigo-400 h-14 w-14"
                        >
                            <svg
                                class="w-12 h-12"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                ></path>
                            </svg>
                        </div>
                        <div class="font-medium text-4xl">24°C</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { UrlWeather } from '../../api/weather.js'
export default {
    created() {
        UrlWeather().then((res) => console.log(res))
    },
}
</script>

<style></style>
