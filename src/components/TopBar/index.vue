<template>
  <div class="top-bar">
    <ProgressDisp />
    <VolumnDisp />
  </div>
</template>


<script>
import ProgressDisp from './ProgressDisp'
import VolumnDisp from './VolumnDisp'

export default {
  name: 'TopBar',
  components: {
    ProgressDisp,
    VolumnDisp,
  }
}
</script>


<style scoped lang="less">
@import './style-vars.less';

.top-bar {
  position: relative;
  height: @bar-height;
}
</style>
