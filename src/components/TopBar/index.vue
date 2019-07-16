<template>
  <div class="top-bar">
    <ProgressDisp />
    <VolumeDisp />
  </div>
</template>


<script>
import ProgressDisp from './ProgressDisp'
import VolumeDisp from './VolumeDisp'

export default {
  name: 'TopBar',
  components: {
    ProgressDisp,
    VolumeDisp,
  }
}
</script>


<style scoped lang="less">
@bar-height: 72px;

.top-bar {
  height: @bar-height;
  display: flex;
  justify-content: space-between;
}
</style>
