<template>
  <div class="play-ctrl-bar" :style="getResponsiveStyle(0.25)">
    <GoToItemBtn dir="prev" />
    <LoopModeBtn mode="shuffle" />
    <GoToItemBtn dir="next" />
  </div>
</template>


<script>
import { mapState } from 'vuex'

import GoToItemBtn from './GoToItemBtn'
import LoopModeBtn from './LoopModeBtn'

export default {
  name: 'PlayCtrlBar',
  components: {
    GoToItemBtn,
    LoopModeBtn,
  },
  computed: mapState({
    appHeight: state => state.responsive.appHeight,
    appContentHeight: state => state.responsive.appContentHeight,
  }),
  methods: {
    getResponsiveStyle() {
      return `margin-top: ${(this.appHeight - this.appContentHeight) * 0.2}px;`
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
