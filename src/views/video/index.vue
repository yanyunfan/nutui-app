<template>
  <div>
    <nut-navbar  @on-click-back="back" title="视频"></nut-navbar>
    <nut-video :source="source" :options="options" @play="play" @pause="pause" @playend="playend"></nut-video>
    <!--弹幕-->
    <nut-cell>
      <nut-barrage ref="danmu" :danmu="list" :speeds="5000"></nut-barrage>
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
export default defineComponent({
  name: "Video",
  setup() {
    const state = reactive({
      source: {
        src: "https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D", // http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4', // http://vjs.zencdn.net/v/oceans.mp4
        type: "video/mp4",
      },
      options: {
        controls: true,
      },
    });
    const play = (elm: any) => console.log("play", elm);
    const pause = (elm: any) => console.log("pause", elm);
    const playend = (elm: any) => console.log("playend", elm);

    const list = ref(['画美不看', '不明觉厉', '喜大普奔', '男默女泪', '累觉不爱', '爷青结-'])

    return { play, pause, playend, ...toRefs(state), list };
  },
});
</script>
