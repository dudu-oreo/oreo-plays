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
@bar-height: 72px;

.top-bar {
  height: @bar-height;
  display: flex;
  justify-content: space-between;
}
</style>
