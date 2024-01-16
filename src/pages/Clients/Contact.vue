<template>
    <div class="container">
        <h1 class="title-page">Liên Hệ</h1>
        <div class="mt-8 flex gap-8 lg:justify-between">
            <div class="form-contact w-full">
                <form>
                    <div class="group relative z-0 mb-6 w-full">
                        <input
                            type="text"
                            name="floating_company"
                            id="floating_company"
                            class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                            placeholder=" "
                            required
                        />
                        <label
                            for="floating_company"
                            class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                            >Họ Tên</label
                        >
                    </div>
                    <div class="mt-6 grid md:grid-cols-2 md:gap-6">
                        <div class="group relative z-0 mb-6 w-full">
                            <input
                                type="email"
                                name="floating_phone"
                                id="floating_phone"
                                class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                                placeholder=" "
                                required
                            />
                            <label
                                for="floating_phone"
                                class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                                >Email</label
                            >
                        </div>
                        <div class="group relative z-0 mb-6 w-full">
                            <input
                                type="text"
                                name="floating_company"
                                id="floating_company"
                                class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                                placeholder=" "
                                required
                            />
                            <label
                                for="floating_company"
                                class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                                >Số điện thoại</label
                            >
                        </div>
                    </div>
                    <div>
                        <label
                            for="message"
                            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                            >Lời nhắn</label
                        >
                        <textarea
                            id="message"
                            rows="13"
                            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            placeholder="Write your thoughts here..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        class="my-5 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14899.758940560161!2d105.80683666201999!3d20.99505272356575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac927ce95957%3A0xe230355f8983adb9!2zVGhhbmggWHXDom4sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1698288701020!5m2!1svi!2s"
                width="600"
                height="440"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact',
}
</script>

<style></style>
