<template>
  <div id="app">
    <h1>Vue app</h1>
  <seating msg="Seating map"></seating>
  <!-- <span>Hello world</span> -->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Seating from './components/Seating.vue'

export default {
  name: 'app',
  components: {
    Seating
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
