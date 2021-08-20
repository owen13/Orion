import {createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        incrementCounter(state) {
            state.counter++;
        },
        increaseCounter(state, payload) {
            state.counter = state.counter + payload.value;
        }
    }
});

export default store;