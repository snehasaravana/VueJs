<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Gridcomponent></Gridcomponent>
</template>

<script>
import Gridcomponent from './components/gridcomponent.vue';

export default {
  name: 'App',
  components: {
    Gridcomponent
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
