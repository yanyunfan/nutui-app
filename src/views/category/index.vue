<template>
  <div>
    <nut-navbar  @on-click-back="back" title="分类"></nut-navbar>
    <nut-elevator :index-list="dataList" :height="260" @click-item="clickItem" @click-index="clickIndex"></nut-elevator>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      acceptKey: 'num',
      dataList: [
        {
          title: 'A',
          list: [
            {
              name: '安徽',
              id: 1
            }
          ]
        },
        {
          title: 'B',
          list: [
            {
              name: '北京',
              id: 2
            }
          ]
        },
        {
          title: 'G',
          list: [
            {
              name: '广西',
              id: 3
            },
            {
              name: '广东',
              id: 4
            }
          ]
        },
        {
          title: 'H',
          list: [
            {
              name: '湖南',
              id: 5
            },
            {
              name: '湖北',
              id: 6
            }
          ]
        }
      ]
    });

    const clickItem = (key: string, item: any) => {
      console.log(key, JSON.stringify(item));
    };

    const clickIndex = (key: string) => {
      console.log(key);
    };

    return { ...toRefs(state), clickItem, clickIndex };
  }
};
</script>
