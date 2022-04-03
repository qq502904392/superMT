<template>
  <div>
    <van-tabbar
      v-model="active"
      active-color="#fed002"
      inactive-color="#000"
      route
    >
      <van-tabbar-item name="home" icon="home-o" to="/home"
        >首页</van-tabbar-item
      >
      <van-tabbar-item name="search" icon="search">标签</van-tabbar-item>
      <van-tabbar-item name="order" icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item name="user" icon="setting-o" to="/user"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "home",
    };
  },
};
</script>

<style>
</style>