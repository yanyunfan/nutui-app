<template>
  <div>
    <!--搜索栏-->
    <nut-searchbar v-model="searchValue">
      <template v-slot:leftout>
        <nut-icon @click="clickLeft" size="20" name="left"></nut-icon>
      </template>
      <template v-slot:leftin>
        <nut-icon size="14" name="search2"></nut-icon>
      </template>
      <template v-slot:rightin>
        <nut-icon size="20" name="photograph"></nut-icon>
      </template>
      <template v-slot:rightout>
        <nut-icon size="20" name="message"></nut-icon>
      </template>
    </nut-searchbar>

    <!--轮播-->
    <nut-swiper :init-page="page" :pagination-visible="true" pagination-color="#426543" auto-play="3000">
      <nut-swiper-item>
        <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt=""/>
      </nut-swiper-item>
      <nut-swiper-item>
        <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt=""/>
      </nut-swiper-item>
      <nut-swiper-item>
        <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt=""/>
      </nut-swiper-item>
    </nut-swiper>

    <!--公告栏-->
    <nut-noticebar
      text="华为新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"
    ></nut-noticebar>

    <nut-audio
      url="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
      :muted="muted"
      :autoplay="autoplay"
      :loop="true"
      type="icon"
    ></nut-audio>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent } from 'vue';
export default defineComponent ({
  name: 'Home',
  setup() {
    const state = reactive({
      page: 2,
    });

    const data = reactive({
      muted: false,
      autoplay: false
    });

    return { ...toRefs(state), ...toRefs(data)};
  }
});
</script>

<style lang="less">
.nut-cell,
.nut-barrage {
  padding: 20px 0;
  height: 150px;
}
.nut-swiper-item {
  line-height: 150px;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>

