<template>
  <path class="progress-fan" :d="genProgressPath()" />
</template>


<script>
import { mapState } from 'vuex'

import { SVG_CENTER, POLYGON_OUTER_R, POLYGON_ROTATION } from './constants'

export default {
  name: 'ProgressFan',
  computed: mapState({
    ratio: ({ trackInfo: { time, length } }) => (
      length === 0 ? 0 : time / length
    ),
  }),
  methods: {
    genProgressPath: function() {
      const startPointStr = [
        SVG_CENTER + POLYGON_OUTER_R * Math.sin(POLYGON_ROTATION),
        SVG_CENTER - POLYGON_OUTER_R * Math.cos(POLYGON_ROTATION),
      ].join(' ')
      const endPointStr = [
        SVG_CENTER + POLYGON_OUTER_R * Math.sin(POLYGON_ROTATION + Math.PI * 2 * this.ratio),
        SVG_CENTER - POLYGON_OUTER_R * Math.cos(POLYGON_ROTATION + Math.PI * 2 * this.ratio),
      ].join(' ')
      return `M ${SVG_CENTER} ${SVG_CENTER} L ${startPointStr} A ${POLYGON_OUTER_R} ${POLYGON_OUTER_R} 0 ${this.ratio > 0.5 ? 1 : 0} 1 ${endPointStr}`
    }
  }
}
</script>


<style scoped lang="less">
  .progress-fan {
    fill: #eee;
    clip-path: url('#outerPolygonClip');
  }
</style>
