<template>
    <div class="layout_admin">
        <Sidebar />
        <div class="p-4 lg:ml-64 md:ml-56 sm:m-0 bg-gray-50 min-h-screen">
            <router-view />
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Admin/Sidebar.vue'

export default { components: { Sidebar } }
</script>

<style></style>
