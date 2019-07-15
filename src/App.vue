<template>
  <div id="app">
    <TopBar />
    <PolygonDisk />
    <TrackInfo title="Wake Me Up When September Ends" artist="直火帮 Straight Fire Gang" />
    <PlayCtrlBar />
  </div>
</template>

<script>
import PolygonDisk from './components/PolygonDisk/index.vue'
import TopBar from './components/TopBar/index.vue'
import TrackInfo from './components/TrackInfo/index.vue'
import PlayCtrlBar from './components/PlayCtrlBar/index.vue'

export default {
  name: 'app',
  components: {
    PolygonDisk,
    TopBar,
    TrackInfo,
    PlayCtrlBar,
  },
}
</script>

<style lang="less">
#app {
  max-width: 540px;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
