<template>
  <div class="polygon-disk" :style="getResponsiveStyle()">
    <svg
      :viewBox="`0 0 ${SVG_SIZE} ${SVG_SIZE}`"
      width="100%"
      @click="handleTogglePause"
    >
      <defs>
        <polygon id="innerPolygon" :points="genInnerPolygonStr()" />
        <polygon id="outerPolygon" :points="genOuterPolygonStr()" />
        <clipPath id="innerPolygonClip">
          <use href="#innerPolygon" xlink:href="#innerPolygon" />
        </clipPath>
        <clipPath id="outerPolygonClip">
          <use href="#outerPolygon" xlink:href="#outerPolygon" />
        </clipPath>
      </defs>
      <use href="#outerPolygon" xlink:href="#outerPolygon" fill="#555" />
      <ProgressFan />
      <DiskCover />
      <PauseMask v-if="paused" />
    </svg>
  </div>
</template>


<script>
import { mapState, mapActions } from 'vuex'

import { togglePause } from '../../requests/status'

import {
  SVG_SIZE, SVG_CENTER,
  POLYGON_OUTER_R, POLYGON_INNER_R, POLYGON_ROTATION
} from './constants'
import ProgressFan from './ProgressFan'
import DiskCover from './DiskCover'
import PauseMask from './PauseMask'

export default {
  name: 'DiskPolygon',
  data: function() {
    return {
      SVG_SIZE,
    }
  },
  computed: mapState({
    appHeight: state => state.responsive.appHeight,
    appContentHeight: state => state.responsive.appContentHeight,
    paused: state => state.trackInfo.paused
  }),
  methods: {
    ...mapActions('trackInfo', [ 'updateTrackInfo' ]),
    getResponsiveStyle() {
      return `margin-top: ${(this.appHeight - this.appContentHeight) * 0.23}px;`
    },
    genPolygonStr: function(r) {
      const points = []
      for (let i = 0; i < 7; i++) {
        const pointAngle = Math.PI * 2 / 7 * i
        const point = [
          SVG_CENTER + r * Math.sin(pointAngle + POLYGON_ROTATION),
          SVG_CENTER - r * Math.cos(pointAngle + POLYGON_ROTATION),
        ]
        points.push(point.join())
      }
      return points.join(' ')
    },
    genInnerPolygonStr: function() {
      return this.genPolygonStr(POLYGON_INNER_R)
    },
    genOuterPolygonStr: function() {
      return this.genPolygonStr(POLYGON_OUTER_R)
    },
    handleTogglePause() {
      togglePause().then(({ trackInfo }) => {
        this.updateTrackInfo(trackInfo)
      })
    },
  },
  components: {
    ProgressFan,
    DiskCover,
    PauseMask,
  }
}
</script>


<style scoped lang="less">
.polygon-disk {
  text-align: center;
  width: calc(100% - 72px);
  margin: auto;
}
</style>
