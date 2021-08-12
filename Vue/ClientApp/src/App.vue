<template>
  <nav-menu></nav-menu>
  <router-view />
</template>

<script>
    import NavMenu from './components/NavMenu.vue'

    export default {
      name: 'App',
      components: {
          NavMenu
      }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

#myApp {
  font-family: Roboto, Jost, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
