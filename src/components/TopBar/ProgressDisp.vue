<template>
  <div class="progress-disp">
    <span class="time-elapsed">{{ timeElapsed }}</span>
    <span class="time-total">{{ timeTotal }}</span>
  </div>
</template>


<script>
import { mapState } from 'vuex'

const formatTime = seconds => {
  const minute = Math.floor(seconds / 60)
  const second = seconds % 60
  return `${minute}:${second < 10 ? '0' : ''}${second}`
}

export default {
  name: 'TopBar',
  computed: mapState({
    timeElapsed: state => formatTime(state.trackInfo.time),
    timeTotal: state => formatTime(state.trackInfo.length),
  }),
}
</script>


<style scoped lang="less">
@time-text-height: 16px;

.progress-disp {
  padding: 8px 9px;
  margin: 12px 15px;
}

.time-text {
  display: block;
  height: @time-text-height;
  line-height: @time-text-height;
  font-family: 'Courier New';
  font-size: 14px;
  user-select: none;
}

.time-elapsed {
  .time-text();
  color: #e2e2e2;
}

.time-total {
  .time-text();
  color: #555;
}
</style>
