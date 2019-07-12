<template>
  <path class="progress-fan" :d="genProgressPath()" />
</template>


<script>
import { SVG_CENTER, POLYGON_OUTER_R, POLYGON_ROTATION } from './constants'

export default {
  name: 'ProgressFan',
  methods: {
    genProgressPath: function() {
      const ratio = 0.4
      const startPointStr = [
        SVG_CENTER + POLYGON_OUTER_R * Math.sin(POLYGON_ROTATION),
        SVG_CENTER - POLYGON_OUTER_R * Math.cos(POLYGON_ROTATION),
      ].join(' ')
      const endPointStr = [
        SVG_CENTER + POLYGON_OUTER_R * Math.sin(POLYGON_ROTATION + Math.PI * 2 * ratio),
        SVG_CENTER - POLYGON_OUTER_R * Math.cos(POLYGON_ROTATION + Math.PI * 2 * ratio),
      ].join(' ')
      return `M ${SVG_CENTER} ${SVG_CENTER} L ${startPointStr} A ${POLYGON_OUTER_R} ${POLYGON_OUTER_R} 0 ${ratio > 0.5 ? 1 : 0} 1 ${endPointStr}`
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
