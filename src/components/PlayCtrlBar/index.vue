<template>
  <div class="play-ctrl-bar">
    <SwitchSongBtn dir="prev" />
    <LoopModeBtn mode="shuffle" />
    <SwitchSongBtn dir="next" />
  </div>
</template>


<script>
import SwitchSongBtn from './SwitchSongBtn'
import LoopModeBtn from './LoopModeBtn'

export default {
  name: 'PlayCtrlBar',
  components: {
    SwitchSongBtn,
    LoopModeBtn,
  },
}
</script>


<style scoped lang="less">
.play-ctrl-bar {
  width: 63%;
  min-width: 210px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
