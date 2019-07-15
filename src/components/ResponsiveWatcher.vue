<!-- this component should be a direct descendant of <App> -->

<template>
  <div />
</template>


<script>
import { mapActions } from 'vuex'

export default {
  name: 'ResponsiveWatcher',
  mounted() {
    this.measureAppSize()
    window.addEventListener('resize', this.measureAppSize)
  },
  methods: {
    ...mapActions('responsiveUI', [ 'getResponsiveReady' ]),
    measureAppSize() {
      const $appEl = this.$el.parentNode
      const appElRect = $appEl.getBoundingClientRect()
      const appWidth = appElRect.width
      const appHeight = window.innerHeight
      this.getResponsiveReady({ width: appWidth, height: appHeight })
    },
  },
}
</script>
