<template>
  <div class="go-to-item-btn">
    <svg viewBox="0 0 70 70" width="100%" @click="handleGoToItem">
      <path
        d="M 9 35 L 61 5 L 61 65 L 26.36 45"
        stroke="#93a22b" stroke-width="6" fill="none"
        :transform="getTransformStyle()"
      />
    </svg>
  </div>
</template>


<script>
import { mapActions } from 'vuex'
import { toNextItem, toPrevItem } from '../../requests/status'

export default {
  name: 'GoToItemBtn',
  props: {
    dir: {
      validator: val => [ 'prev', 'next' ].indexOf(val) > -1,
    },
  },
  methods: {
    ...mapActions('trackInfo', [ 'updateTrackInfo' ]),
    getTransformStyle: function() {
      return this.dir === 'prev'
        ? ''
        : 'rotate(180, 35, 35)'
    },
    handleGoToItem() {
      const goToItem = this.dir === 'next' ? toNextItem : toPrevItem
      goToItem().then(({ trackInfo }) => {
        this.updateTrackInfo(trackInfo)
      })
    },
  },
}
</script>


<style scoped lang="less">
@import './ctrl-btn.less';

.go-to-item-btn {
  .ctrl-btn();
}
</style>
