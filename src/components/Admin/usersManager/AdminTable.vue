<template>
    <Table :dataUser="itemUser" />
</template>

<script>
import API_AUTH from '@/api/auth.js'
import Table from './Table.vue'

export default {
    components: { Table },

    data() {
        return {
            itemUser: [],
        }
    },
    created() {
        API_AUTH.getAdmin()
            .then((res) => {
                this.itemUser = res.data.response
            })
            .catch((err) => console.log('error', err))
    },
}
</script>

<style></style>
