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
    ...mapActions('responsive', [ 'getResponsiveReady' ]),
    measureAppSize() {
      const appHeight = window.innerHeight
      const $appEl = this.$el.parentNode
      const $sectionsInsideApp = $appEl.childNodes
      let appContentHeight = 0
      for (let i = 0; i < $sectionsInsideApp.length; i++) {
        const sectionRect = $sectionsInsideApp[i].getBoundingClientRect()
        appContentHeight += sectionRect.height
      }
      this.getResponsiveReady({ appHeight, appContentHeight })
    },
  },
}
</script>
