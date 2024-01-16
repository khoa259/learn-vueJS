import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'

const userModules = {
    namespace: true,
    state: {
        userStore: [],
    },
    getters: getters,
    mutations: mutations,
    actions: actions,
}

export default userModules
