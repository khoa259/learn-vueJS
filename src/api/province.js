import axios from 'axios'

const baseUrlProvince = axios.create({
    baseURL: import.meta.env.VITE_APP_API_PROVINCE,
})
export default {
    apiGetProvince() {
        const url = '/province'
        return baseUrlProvince.get(url)
    },
    apiGetDistricts(idProvince) {
        const url = `/province/district/${idProvince}`
        return baseUrlProvince.get(url, idProvince)
    },
    apiGetWard(idDistricts) {
        const url = `/province/ward/${idDistricts}`
        return baseUrlProvince.get(url, idDistricts)
    },
}
