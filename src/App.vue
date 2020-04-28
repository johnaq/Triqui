<template>
  <div id="app">
    <Tablero/>
  </div>
</template>

<script>
import Tablero from './components/Tablero'

export default {
  name: 'App',
  components: {
    Tablero
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
