<template>
    <div
        class="mt-6 grid lg:grid-cols-4 lg:px-0 lg:gap-4 md:grid-cols-3 md:gap-3 sm:grid-cols-2 sm:gap-2"
    >
        <div
            class="p-4 w-full opacity-90 rounded-md shadow-md bg-white dark:bg-slate-600"
            v-for="item in Array(4)"
            :key="item"
        >
            <div class="flex flex-col space-y-3 animate-pulse">
                <div class="h-[190px] bg-slate-200 opacity-70 rounded-md"></div>
                <div class="h-8 bg-slate-200 opacity-70 rounded-md"></div>
                <div class="h-5 bg-slate-200 opacity-70 rounded-md"></div>
                <div class="flex space-x-3">
                    <div
                        class="h-6 w-1/2 bg-slate-200 opacity-70 rounded-md"
                    ></div>
                    <div
                        class="h-6 w-1/2 bg-slate-200 opacity-70 rounded-md"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style></style>
