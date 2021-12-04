<template>
  <div class="layout-container">
    <!-- layout 的子路由出口，或者说是二级路由 -->
    <router-view/>
    <!-- /子路由出口 -->

    <!-- 底部导航栏 -->
    <nut-tabbar :bottom="true">
      <nut-tabbar-item tab-title="首页" icon="home" to="/"></nut-tabbar-item>
      <nut-tabbar-item tab-title="分类" icon="category" to="/category"></nut-tabbar-item>
      <nut-tabbar-item tab-title="发现" icon="find" to="/video"></nut-tabbar-item>
      <nut-tabbar-item tab-title="购物车" icon="cart" num="200" to="/cart"></nut-tabbar-item>
      <nut-tabbar-item tab-title="我的" icon="my" to="/my"></nut-tabbar-item>
    </nut-tabbar>
    <!-- /底部导航栏 -->
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex'
}
</script>

<style scoped lang="less"></style>
