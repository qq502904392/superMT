<template>
  <section>
    <van-button
      color="rgba(0,0,0,.3)"
      round
      class="backTop"
      size="mini"
      @click="backTop"
      v-show="scrollType"
    >
      <van-icon class="icon-backTop" name="arrow-up" size="15" />
    </van-button>
  </section>
</template>

<script>
export default {
  name: "backTop",
  data() {
    return {
      scrollType: false, // 控制按钮显示和隐藏
      timerId: null,
      scrollTop: 0,
    };
  },
  // 组件创建监听scroll此方法
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  // 组件销毁移除监听
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
    window.clearInterval(this.timerId);
  },
  methods: {
    backTop() {
      this.timerId = setInterval(() => {
        // 给返回增加动画效果
        const upSpeed = Math.floor(-this.scrollTop / 5);
        document.documentElement.scrollTop = this.scrollTop + upSpeed;
        if (this.scrollTop === 0) {
          clearInterval(this.timerId);
        }
      }, 30);
    },
    handleScroll() {
      // 当滚动的距离大于700 时出现该按钮
      this.scrollTop = window.pageYOffset;
      if (window.pageYOffset / 100 > 7) {
        this.scrollType = true;
      } else {
        this.scrollType = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.backTop {
  position: fixed;
  bottom: 60px;
  right: 0.2rem;
  z-index: 999;
  border: none;
}
</style>