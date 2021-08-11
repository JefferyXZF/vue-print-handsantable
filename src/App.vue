<template>
  <div id="app">
    {{ print.name }}
  </div>
</template>

<script>

import print from '../print/index'

export default {
  name: 'App',
  data () {
    return {
      print
    }
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
