<template>
    <div class="comment w-2/5 mt-4">
        <span class="text-xl font-semibold py-2">Bình luận (2)</span>
        <div
            class="flex space-x-4 items-end bg-slate-50 shadow-sm rounded-lg p-5"
        >
            <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Cảm nghĩ của bạn..."
            ></textarea>
            <button>
                <i
                    class="fa-solid fa-paper-plane text-[var(--cl-yellow)] text-2xl"
                ></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style></style>
