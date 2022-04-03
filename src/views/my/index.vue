<template>
  <nut-navbar @on-click-back="back" title="我的"></nut-navbar>
  <div class="avatar">
    <nut-avatar size="large"
                icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
    ></nut-avatar><br>
    <span>点击登录/注册</span>
  </div>
  <nut-grid :column-num="1" direction="horizontal" :center="false">
    <nut-grid-item icon="location2" text="地址管理"></nut-grid-item>
    <nut-grid-item icon="order" text="开具发票"></nut-grid-item>
    <nut-grid-item icon="service" text="在线客服"></nut-grid-item>
    <nut-grid-item icon="comment" text="意见反馈"></nut-grid-item>
    <nut-grid-item icon="link" text="隐私协议"></nut-grid-item>
  </nut-grid>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'My'
});
</script>

<style lang="less">
.avatar {
  text-align: center;
  background: #1ab4ee;
  padding-top: 10px;
  height: 100px;
  font-size: 15px;
  color: white;
}

.flex-content {
  line-height: 40px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  background: #ff8881;

  &.flex-content-light {
    background: #ffc7c4;
  }

  &.flex-content-height {
    height: 50px;
  }
}
</style>
