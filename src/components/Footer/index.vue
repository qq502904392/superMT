<template>
  <footer>
    <van-tabbar
      v-model="active"
      active-color="#fed002"
      inactive-color="#000"
      route
    >
      <van-tabbar-item name="home" icon="wap-home" to="/home"
        >首页</van-tabbar-item
      >
      <van-tabbar-item name="search" icon="send-gift" to=""
        >搜索</van-tabbar-item
      >
      <van-tabbar-item name="order" icon="cart">购物车</van-tabbar-item>
      <van-tabbar-item name="user" icon="friends" to="/user"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      active: "",
    };
  },
};
</script>

<style></style>
