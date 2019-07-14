<template>
  <div class="track-info">
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
  components: {
    WidthLimitedContent
  }
}
</script>


<style scoped lang="less">
.track-info {
  margin-top: 30px;
  text-align: center;
  font-family: sans-serif;
  font-weight: 100;
}

.title-text {
  color: #d1879c;
  font-size: 18px;
}

.artist-text {
  color: #555;
  font-size: 14px;
}
</style>
