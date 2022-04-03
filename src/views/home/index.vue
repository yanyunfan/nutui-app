<template>
  <div>
    <!--搜索栏-->
    <nut-searchbar v-model="searchValue">
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
    <nut-swiper :init-page="3" :pagination-visible="true" pagination-color="#426543" auto-play="3000">
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

    <!--音频播放器-->
    <nut-audio
      url="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
      :muted="muted"
      :autoplay="autoplay"
      :loop="true"
      type="icon"
    ></nut-audio>

    <!--商品卡片-->
    <nut-card
      :img-url="state.imgUrl"
      :title="state.title"
      :price="state.price"
      :vipPrice="state.vipPrice"
      :shopDesc="state.shopDesc"
      :delivery="state.delivery"
      :shopName="state.shopName"
    >
    </nut-card>

    <nut-card
      :img-url="state.imgUrl"
      :title="state.title"
      :price="state.price"
      :vipPrice="state.vipPrice"
      :shopDesc="state.shopDesc"
      :delivery="state.delivery"
      :shopName="state.shopName"
    >
    </nut-card>

    <nut-card
      :img-url="state.imgUrl"
      :title="state.title"
      :price="state.price"
      :vipPrice="state.vipPrice"
      :shopDesc="state.shopDesc"
      :delivery="state.delivery"
      :shopName="state.shopName"
    >
    </nut-card>
  </div>
</template>

<script lang="ts">
import {reactive, toRefs, defineComponent} from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    const search = reactive({
      searchValue: ""
    });

    const data = reactive({
      muted: false,
      autoplay: false
    });

    const state = reactive({
      imgUrl: '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
      title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
      price: '388',
      vipPrice: '378',
      shopDesc: '自营',
      delivery: '厂商配送',
      shopName: '阳澄湖大闸蟹自营店>'
    });

    return {...toRefs(search), ...toRefs(data), state};
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

