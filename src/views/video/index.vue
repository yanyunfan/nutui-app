<template>
  <div>
    <nut-navbar  @on-click-back="back" title="视频"></nut-navbar>
    <nut-video :source="source" :options="options"></nut-video>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  name: 'VideoIndex',
  setup() {
    const state = reactive({
      source: {
        src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4', // http://vjs.zencdn.net/v/oceans.mp4
        type: 'video/mp4'
      },
      options: {
        autoplay: true,
        muted: true,
        controls: true
      }
    })

    return { ...toRefs(state) }
  }
}
</script>

<style scoped>

</style>
