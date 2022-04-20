<template>
  <div id="app">
    <keep-alive exclude="/shop">
      <router-view />
    </keep-alive>
    <Footer v-show="this.$route.meta.show"></Footer>
  </div>
</template>
<script>
import Footer from "@/components/Footer/index";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      timerId: "",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.justifyPos);
  },
  methods: {
    justifyPos() {
      if (this.timerId) clearTimeout(this.timerId);
      this.timerId = setTimeout(() => {
        this.$route.meta.y = window.pageYOffset;
      }, 300);
    },
  },
};
</script>
<style lang="less" scoped>
@import "./style/mixin";
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
