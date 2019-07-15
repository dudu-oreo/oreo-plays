<template>
  <div class="switch-song-btn">
    <svg viewBox="0 0 70 70" width="100%">
      <path
        d="M 9 35 L 61 5 L 61 65 L 26.36 45"
        stroke="#93a22b" stroke-width="6" fill="none"
        :transform="getTransformStyle()"
      />
    </svg>
  </div>
</template>


<script>
export default {
  name: 'SwitchSongBtn',
  props: {
    dir: {
      validator: val => [ 'prev', 'next' ].indexOf(val) > -1,
    },
  },
  methods: {
    getTransformStyle: function() {
      return this.dir === 'prev'
        ? ''
        : 'rotate(180, 35, 35)'
    },
  },
}
</script>


<style scoped lang="less">
@import './ctrl-btn.less';

.switch-song-btn {
  .ctrl-btn();
}
</style>
