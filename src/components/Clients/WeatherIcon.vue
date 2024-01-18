<template>
    <div class="flex flex-col">
        <div>
            <button class="peer font-medium text-base text-white">
                {{ itemWeather.main ? itemWeather.main.temp : '24' }}°C
            </button>
            <div
                class="rounded-md hidden peer-hover:flex hover:flex w-[300px] flex-col bg-white drop-shadow-lg absolute z-20"
            >
                <div class="p-5">
                    <div class="font-bold text-base">
                        {{ itemWeather.name }},
                        {{
                            itemWeather.sys
                                ? itemWeather.sys.country
                                : 'Việt Nam'
                        }}
                    </div>
                    <div class="text-sm text-gray-500">
                        {{ date }}
                    </div>
                    <div class="flex space-x-3 flex-row items-center">
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
                        <div class="font-medium text-4xl">
                            {{
                                itemWeather.main
                                    ? itemWeather.main.temp
                                    : 'loading...'
                            }}°C
                        </div>
                        <div class="flex flex-col">
                            <span
                                >high :
                                {{
                                    itemWeather.main
                                        ? itemWeather.main.temp_max
                                        : 'loading...'
                                }}°C</span
                            >
                            <span
                                >low :
                                {{
                                    itemWeather.main
                                        ? itemWeather.main.temp_min
                                        : 'loading...'
                                }}°C</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['itemWeather'],
    data() {
        return {
            date: '',
        }
    },
    computed: {
        getDate() {
            let day = new Date()
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }
            this.date = day.toLocaleDateString('VN-vi', options)
        },
    },
    created() {
        this.getDate
    },
}
</script>

<style></style>
