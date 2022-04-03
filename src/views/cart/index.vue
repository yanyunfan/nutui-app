<template>
  <nut-navbar
    :left-show="false"
    @on-click-back="back"
    @on-click-title="title"
    @on-click-icon="icon"
    @on-click-right="rightClick"
    title="购物车"
    desc="编辑"
  >
    <template #right>
      <nut-icon class="right" name="more-x"></nut-icon>
    </template>
  </nut-navbar>

  <!--抽奖-->
  <nut-countup
    ref="countupMachineDom"
    type="machine"
    :machine-num="machineNum"
    :machine-prize-num="5"
    :machine-prize-level="prizeLevel"
    :custom-bg-img="bgImage"
    :num-width="100"
    :num-height="100"
    :during="3000"
    @scroll-end="scrollAniEnd"
  >
  </nut-countup>
  <nut-button @click="startRole" :disabled="startFlag">抽奖</nut-button>
</template>

<script lang="ts">
import {ref, defineComponent, onMounted} from "vue";

export default defineComponent({
  name: 'Cart',
  setup() {
    const methods = {
      back() {
        alert('header头部， 点击返回');
      },
      title() {
        alert('header头部， 点击title');
      },
      rightClick() {
        alert('右侧点击事件');
      }
    };

    const countupMachineDom = ref(null);
    const startFlag = ref(false);
    const machineNum = ref(3);
    const bgImage = ref('https://img10.360buyimg.com/imagetools/jfs/t1/121466/20/6784/28830/5f06e7f2Edbb8998c/9bdd9e7b24dff9fe.png');
    const prizeLevel = ref(0);
    const startRole = () => {
      prizeLevel.value = Math.floor(Math.random() * 5 + 1);
      startFlag.value = true;
      countupMachineDom.value.machineLuck();
    };

    const scrollAniEnd = () => {
      console.log('恭喜中奖！！！');
      setTimeout(() => {
        startFlag.value = false;
      }, 300);
    }

    return {
      ...methods,
      countupMachineDom,
      startFlag,
      machineNum,
      bgImage,
      prizeLevel,
      startRole,
      scrollAniEnd
    }
  }
});
</script>
