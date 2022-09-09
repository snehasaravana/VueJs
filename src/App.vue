<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <grid-component-vue></grid-component-vue>
</template>

<script>
import gridComponentVue from './components/gridComponent.vue';
export default {
  name: 'App',
  components: {
    gridComponentVue

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
