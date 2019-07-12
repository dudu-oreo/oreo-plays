<template>
<image
  class="disk-cover-image"
  xlink:href="../../assets/test.jpg"
  :width="SVG_SIZE" :height="SVG_SIZE"
/>
</template>


<script>
import { SVG_SIZE } from './constants'
export default {
  name: 'DiskCover',
  data: function() {
    return {
      SVG_SIZE,
    }
  }
}
</script>


<style scoped lang="less">
.disk-cover-image {
  clip-path: url('#innerPolygonClip');
}
</style>
