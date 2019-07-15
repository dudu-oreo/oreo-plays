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
