<template>
    <base-container title="Vuex">
        <the-counter></the-counter>
        <button @click="addOne">Add 1</button>
        <button @click="addTen">Add 10</button>
        <change-counter></change-counter>
    </base-container>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer';
import TheCounter from '@/components/AdvancedFeatures/vuex-state-management/TheCounter'
import ChangeCounter from '@/components/AdvancedFeatures/vuex-state-management/ChangeCounter'

export default {
    name: "VuexStateManagement",
    components: {
        BaseContainer,
        TheCounter,
        ChangeCounter
    },
    methods: {
        addOne() {
            //this.$store.state.counter++;
            this.$store.commit('incrementCounter');
        },
        addTen() {
            //this.$store.state.counter += 10;
            //this.$store.commit('increaseCounter', { value:10 });
            
            this.$store.commit({
                type: 'increaseCounter',
                value: 10
            })
        }
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}

html {
    font-family: sans-serif;
}

body {
    margin: 0;
}
</style>