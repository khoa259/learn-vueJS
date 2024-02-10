<template>
    <div class="layout_default bg-white">
        <Navbar />
        <div class="min-h-screen">
            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :is="Component" />
                </transition>
                <ScrollToTop />
            </router-view>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Clients/NavBar.vue'
import ScrollToTop from '@/components/Clients/ScrollToTop.vue'
import Footer from '@/components/Clients/Footer.vue'
export default {
    name: 'DefaultLayout',
    components: { Navbar, ScrollToTop, Footer },
}
</script>

<style>
.v-enter-active,
.v-leave-active {
    animation-duration: 0.3s ease;
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
g
