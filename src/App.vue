<template>
  <div id="app">
    <TopBar />
    <PolygonDisk />
  </div>
</template>

<script>
import PolygonDisk from './components/PolygonDisk/index.vue'
import TopBar from './components/TopBar/index.vue'

export default {
  name: 'app',
  components: {
    PolygonDisk,
    TopBar,
  },
}
</script>

<style lang="less">
#app {
  max-width: 540px;
  height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
