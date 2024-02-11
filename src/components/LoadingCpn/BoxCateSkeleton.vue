<template>
    <div class="flex space-x-3 mt-6">
        <div
            class="flex flex-col max-w-[180px] h-48 flex-shrink-0 overflow-hidden bg-white rounded-md p-4"
            v-for="index in Array(7)"
            :key="index"
        >
            <div class="animate-pulse">
                <div
                    class="h-5 text-center text-base font-medium uppercase bg-slate-200 opacity-70 rounded-md"
                ></div>
                <div
                    class="mt-2 h-[130px] w-[130px] bg-slate-200 opacity-70 rounded-md"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style></style>
