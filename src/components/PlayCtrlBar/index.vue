<template>
  <div class="play-ctrl-bar" :style="getResponsiveStyle(0.25)">
    <SwitchSongBtn dir="prev" />
    <LoopModeBtn mode="shuffle" />
    <SwitchSongBtn dir="next" />
  </div>
</template>


<script>
import { mapState } from 'vuex'

import { getTopMarginOfSection } from '../../utils/responsive'

import SwitchSongBtn from './SwitchSongBtn'
import LoopModeBtn from './LoopModeBtn'

export default {
  name: 'PlayCtrlBar',
  components: {
    SwitchSongBtn,
    LoopModeBtn,
  },
  computed: mapState({
    appWidth: state => state.responsiveUI.appWidth,
    appHeight: state => state.responsiveUI.appHeight,
  }),
  methods: {
    getResponsiveStyle() {
      return `margin-top: ${getTopMarginOfSection(this.appWidth, this.appHeight, 0.2)}px;`
    },
  }
}
</script>


<style scoped lang="less">
.play-ctrl-bar {
  width: 63%;
  margin: auto;
  padding: 9px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
