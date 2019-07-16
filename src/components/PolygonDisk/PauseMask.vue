<template>
  <g>
    <rect class="pause-mask" width="100%" height="100%" />
    <path
      class="play-btn"
      d="M 9 35 L 61 5 L 61 65 L 9 35"
      fill="#e2e2e2"
      transform="scale(0.5) translate(345, 345) rotate(180)"
    />
  </g>
</template>


<script>
export default {
  name: 'PauseMask',
}
</script>


<style scoped language="less">
.pause-mask {
  clip-path: url('#innerPolygonClip');
  fill: rgba(85, 85, 85, 0.5);
}

.play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>
