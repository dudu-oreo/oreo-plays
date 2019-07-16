<template>
  <div id="app">
    <TopBar />
    <PolygonDisk />
    <TrackInfo title="Wake Me Up When September Ends" artist="直火帮 Straight Fire Gang" />
    <PlayCtrlBar />
    <ResponsiveWatcher />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import { fetchStatus } from '../requests/status'

import PolygonDisk from './PolygonDisk/index.vue'
import TopBar from './TopBar/index.vue'
import TrackInfo from './TrackInfo/index.vue'
import PlayCtrlBar from './PlayCtrlBar/index.vue'
import ResponsiveWatcher from './ResponsiveWatcher.vue'

export default {
  name: 'app',
  components: {
    PolygonDisk,
    TopBar,
    TrackInfo,
    PlayCtrlBar,
    ResponsiveWatcher,
  },
  methods: {
    ...mapActions('trackInfo', [ 'updateTrackInfo' ])
  },
  mounted() {
    fetchStatus().then(({ trackInfo }) => {
      this.updateTrackInfo(trackInfo)
    })
  },
}
</script>

<style lang="less">
#app {
  max-width: 420px;
  min-width: 300px;
  height: 100%;
  margin: auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
