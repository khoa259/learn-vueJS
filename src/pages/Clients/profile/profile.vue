<template>
    <div class="bg-gray-50 min-h-screen">
        <div class="container bg-white">
            <Tabs :tabs="tabs">
                <template v-slot="{ activeTab }">
                    <div v-if="tabs[activeTab]">
                        <component :is="tabs[activeTab].component"></component>
                    </div>
                </template>
            </Tabs>
        </div>
    </div>
</template>

<script>
import Tabs from '@/components/Clients/Tabs/Tabs.vue'
import profile from '@/components/Clients/Tabs/profile.vue'
import SaveItems from '@/components/Clients/Tabs/SaveItems.vue'
export default {
    components: {
        Tabs,
        profile,
        SaveItems,
    },
    data() {
        return {
            tabs: [
                { label: 'Bài viết yêu thích', component: 'SaveItems' },
                { label: 'Thông tin cá nhân', component: 'profile' },
            ],
        }
    },
}
</script>
