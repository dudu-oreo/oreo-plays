<template>
  <div class="volume-disp">
    <svg
      viewBox="0 0 59 33"
      width="33"
    >
      <rect x="7" y="11.5" width="3" height="10" :fill="getVolStepFill(0)" />
      <rect x="14" y="9" width="3" height="15" :fill="getVolStepFill(1)" />
      <rect x="21" y="2.5" width="3" height="28" :fill="getVolStepFill(2)" />
      <rect x="28" y="0" width="3" height="33" :fill="getVolStepFill(3)" />
      <rect x="35" y="4" width="3" height="25" :fill="getVolStepFill(4)" />
      <rect x="42" y="6" width="3" height="21" :fill="getVolStepFill(5)" />
      <rect x="49" y="3" width="3" height="27" :fill="getVolStepFill(6)" />
      <line v-if="muted" x1="0" y1="23" x2="59" y2="10" stroke="#e2e2e2" stroke-width="1.5" />
    </svg>
  </div>
</template>


<script>
import { mapState } from 'vuex'

export default {
  name: 'VolumeDisp',
  computed: {
    ...mapState({
      volume: state => state.trackInfo.volume,
    }),
    muted: function() { return this.volume === 0 },
  },
  methods: {
    getVolStepFill: function(step) {
      return this.muted
        ? '#555'
        : (
          step === 0
          ? '#e2e2e2'
          : this.volume >= (step + 1) / 7 ? '#e2e2e2' : '#555'
        )
    }
  }
}
</script>


<style scoped lang="less">
.volume-disp {
  padding: 15px 9px;
  margin: 9px 13px;
}
</style>
