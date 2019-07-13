<template>
  <div class="progress-disp">
    <span class="time-elapsed">1:35</span>
    <span class="time-total">4:29</span>
  </div>
</template>


<script>
export default {
  name: 'TopBar',
}
</script>


<style scoped lang="less">
@import './style-vars.less';

@time-text-height: 16px;
@progress-disp-padding-vertical: @bar-height / 2 - @time-text-height;

.progress-disp {
  position: absolute;
  top: 0;
  left: 0;
  height: @bar-height;
  padding: @progress-disp-padding-vertical 24px;
}

.time-text {
  display: block;
  height: @time-text-height;
  line-height: @time-text-height;
  font-family: 'Courier New';
  font-size: 14px;
  text-align: center;
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
