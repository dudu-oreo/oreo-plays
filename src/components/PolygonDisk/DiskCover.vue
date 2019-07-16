<template>
  <g>
    <defs>
      <filter id="pause-mask-blur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
      </filter>
    </defs>
    <image
      class="disk-cover-image"
      xlink:href="../../assets/oreo.jpg"
      :width="SVG_SIZE" :height="SVG_SIZE"
      :filter="paused ? 'url(#pause-mask-blur)' : ''"
    />
  </g>
</template>


<script>
import { mapState } from 'vuex'

import { SVG_SIZE } from './constants'

export default {
  name: 'DiskCover',
  data: function() {
    return {
      SVG_SIZE,
    }
  },
  computed: mapState({
    paused: state => state.trackInfo.paused
  }),
}
</script>


<style scoped lang="less">
.disk-cover-image {
  clip-path: url('#innerPolygonClip');
}
</style>
