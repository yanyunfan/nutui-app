<template>
  <div>
    <nut-navbar  @on-click-back="back" title="购物车"></nut-navbar>
  </div>
</template>

<script lang="ts">
import { defineComponent} from "vue";
export default defineComponent ({
  name: 'Cart'
});
</script>
