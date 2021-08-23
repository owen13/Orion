import { createStore } from 'vuex'
import counterStore from './counter'

import rootMutations from './mutations'
import rootActions from './actions'
import rootGetters from './getters'

const store = createStore({
    modules: {
        numbers: counterStore
    },
    state() {
        return {
            counter: 0,
            isLoggedIn: false
        }
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters
});

export default store;