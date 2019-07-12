<template>
  <div id="app">
    <PolygonDisk />
  </div>
</template>

<script>
import PolygonDisk from './components/PolygonDisk/index.vue'

export default {
  name: 'app',
  components: {
    PolygonDisk,
  },
}
</script>

<style lang="less">
* {
  box-sizing: border-box;
}

body {
  height: 100vh;
  margin: 0;
  padding: 0;
  background: #2e2e2e;
}

#app {
  max-width: 540px;
  height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
