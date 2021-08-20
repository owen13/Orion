<template>
    <button @click="addOne">Add 1 from ChangeCounter</button>
</template>

<script>
export default {
    name: "ChangeCounter",
    methods: {
        addOne() {
            //this.$store.state.counter++;
            this.$store.commit('incrementCounter');
        }
    }
}
</script>

<style scoped>

</style>