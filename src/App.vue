<template>
  <div id="app">
    <router-view />
    <van-tabbar
      v-model="active"
      active-color="#ee0a24"
      inactive-color="#000"
      route
    >
      <van-tabbar-item name="name" icon="home-o" to="/">标签</van-tabbar-item>
      <van-tabbar-item name="search" icon="search" to="user"
        >标签</van-tabbar-item
      >
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
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
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
