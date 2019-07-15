<template>
  <div class="loop-mode-btn">
    <svg viewBox="0 0 70 70" width="100%" stroke="#b08d30" stroke-width="5" fill="none">
      <g v-if="mode === 'shuffle'">
        <path d="M 65 10 L 5 60 L 5 10 L 53 50" stroke-linejoin="bevel" />
        <path d="M 65 45 l 0 15 l -15 0" />
      </g>
    </svg>
  </div>
</template>


<script>
export default {
  name: 'LoopModeBtn',
  props: {
    mode: {
      validator: val => [ 'shuffle', 'single', 'list' ],
    },
  },
}
</script>


<style scoped lang="less">
@import './ctrl-btn.less';

.loop-mode-btn {
  .ctrl-btn();
}
</style>
