<template>
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
  <nut-swiper :init-page="3" :pagination-visible="true" pagination-color="#426543" auto-play="3000" height="150">
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
    text="华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"
  ></nut-noticebar>

  <!--弹幕-->
  <nut-cell>
    <nut-barrage ref="danmu" :danmu="list" :speeds="5000"></nut-barrage>
  </nut-cell>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HomeIndex',
  setup() {
    const list = ref(['画美不看', '不明觉厉', '喜大普奔', '男默女泪', '累觉不爱', '爷青结-'])
    return {
      list
    }
  }
}
</script>

<style scoped>
.nut-cell,
.nut-barrage {
  padding: 20px 0;
  height: 150px;
}
</style>
