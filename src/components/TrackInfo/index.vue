<template>
  <div class="track-info" :style="getResponsiveStyle()">
    <WidthLimitedContent
      :height="32"
      :padding="50"
      bgColor="#2e2e2e"
    >
      <span class="title-text">{{ title }}</span>
    </WidthLimitedContent>
    <WidthLimitedContent
      :height="18"
      :padding="50"
      bgColor="#2e2e2e"
    >
      <span class="artist-text">{{ artist }}</span>
    </WidthLimitedContent>
    <div class="artist-wrapper">
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex'

import { getTopMarginOfSection } from '../../utils/responsive'

import WidthLimitedContent from './WidthLimitedContent'

export default {
  name: 'TrackInfo',
  props: {
    title: {
      type: String,
      default: '未知曲目',
    },
    artist: {
      type: String,
      default: '未知艺术家',
    },
  },
  computed: mapState({
    appWidth: state => state.responsiveUI.appWidth,
    appHeight: state => state.responsiveUI.appHeight,
  }),
  components: {
    WidthLimitedContent
  },
  methods: {
    getResponsiveStyle() {
      return `margin-top: ${getTopMarginOfSection(this.appWidth, this.appHeight, 0.4)}px;`
    },
  },
}
</script>


<style scoped lang="less">
.track-info {
  text-align: center;
  font-family: sans-serif;
  font-weight: 300;
}

.title-text {
  color: #c08a8e;
  font-size: 18px;
}

.artist-text {
  color: #555;
  font-size: 14px;
}
</style>
