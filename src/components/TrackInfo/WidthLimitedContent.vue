<template>
  <div class="full-width-wrapper" :style="`height: ${this.height}px`">
    <div class="content-area" :style="genContentAreaStyle()">
      <div :class="`content-slot ${isContentOverflow ? '' : 'not-overflow'}`">
        <slot>
        </slot>
      </div>
    </div>
    <div class="blurred-area-left" :style="genBlurredAreaStyle()" />
    <div class="blurred-area-right" :style="genBlurredAreaStyle()" />
  </div>
</template>


<script>
import {
  BLURRED_AREA_SHADOW, ESCAPE_BLURRED_WIDTH,
  ROLL_PAUSE_DURATION,
  ROLL_TRANSLATE_STEP,
} from './constants'

export default {
  name: 'WidthLimitedContent',

  props: {
    padding: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
    },
    bgColor: {
      type: String,
      default: '#fff',
    },
  },

  data: function() {
    return {
      isContentOverflow: false,
    }
  },

  mounted: function() {
    this.checkContentWidth()
  },
  updated: function() {
    this.checkContentWidth()
    if (this.isContentOverflow) {
      this.rollPauseTimeStamp = null
      this.rollLeft = true
      window.requestAnimationFrame(this.roll)
    }
  },
  beforeUpdate: function() { window.cancelAnimationFrame(this.roll) },
  beforeDestroy: function() { window.cancelAnimationFrame(this.roll) },

  methods: {
    checkContentWidth: function() {
      const $contentAreaEl = this.$el.getElementsByClassName('content-area')[0]
      const $contentAreaElRect = $contentAreaEl.getBoundingClientRect()
      const $contentSlotEl = this.$el.getElementsByClassName('content-slot')[0]
      const $contentSlotElRect = $contentSlotEl.getBoundingClientRect()
      this.isContentOverflow =
      ($contentAreaElRect.width - 2 * ESCAPE_BLURRED_WIDTH) < $contentSlotElRect.width
    },
    roll: function() {
      if (this.rollPauseTimeStamp && (Date.now() - this.rollPauseTimeStamp < ROLL_PAUSE_DURATION)) {
        return window.requestAnimationFrame(this.roll)
      }

      this.rollPauseTimeStamp = null

      const $contentAreaEl = this.$el.getElementsByClassName('content-area')[0]
      const $contentAreaElRect = $contentAreaEl.getBoundingClientRect()
      const $contentSlotEl = this.$el.getElementsByClassName('content-slot')[0]
      const $contentSlotElRect = $contentSlotEl.getBoundingClientRect()
      const widthOverflowed = $contentSlotElRect.width - $contentAreaElRect.width
      const translatedX = $contentSlotElRect.left - $contentAreaElRect.left

      if (this.rollLeft && translatedX <= - widthOverflowed - ESCAPE_BLURRED_WIDTH) {
        this.rollLeft = false
        this.rollPauseTimeStamp = Date.now()
      }
      else if (!this.rollLeft && translatedX >= 0 + ESCAPE_BLURRED_WIDTH) {
        this.rollLeft = true
        this.rollPauseTimeStamp = Date.now()
      }

      const newTranslateX = this.rollLeft ? (translatedX - ROLL_TRANSLATE_STEP) : (translatedX + ROLL_TRANSLATE_STEP)
      $contentSlotEl.style.transform = `translate(${newTranslateX}px, -50%)`

      window.requestAnimationFrame(this.roll)
    },
    genBlurredAreaStyle: function() {
      const blurredAreaWidth = this.padding - ESCAPE_BLURRED_WIDTH
      return `width: ${blurredAreaWidth}px; height: ${this.height}px; background: ${this.bgColor}; box-shadow: ${BLURRED_AREA_SHADOW} ${this.bgColor};`
    },
    genContentAreaStyle: function() {
      return `height: ${this.height}px; line-height: ${this.height}px;`
    },
  },
}
</script>


<style scoped lang="less">
.full-width-wrapper {
  overflow: hidden;
  display: flex;
}

.blurred-area-left {
  order: 1;
  z-index: 666; // let shadow above content
}

.blurred-area-right {
  order: 3;
  z-index: 667; // let shadow above content
}

.content-area {
  order: 2;
  flex-grow: 1;
  position: relative;
  overflow: hidden;
}

.content-slot {
  white-space: pre;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);

  &.not-overflow {
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
