<template>
  <section class="container">
    <div class="user-top">
      <span v-if="cellphone">您好&nbsp;{{ cellphone }}</span>
      <div v-else>
        <van-icon name="friends-o" />
        <router-link to="/login">登陆</router-link>&nbsp;/
        <router-link to="/regis">注册</router-link>
      </div>
    </div>
    <div class="user-info">
      <div class="user-info-item">
        <van-icon name="cart-o" size="30" />
        <span>购物车</span>
      </div>
      <div class="user-info-item">
        <van-icon name="star-o" size="30" />
        <span>收藏</span>
      </div>
      <div class="user-info-item">
        <van-icon name="guide-o" size="30" />
        <span>导航</span>
      </div>
      <div class="user-info-item">
        <van-icon name="credit-pay" size="30" />
        <span>钱包</span>
      </div>
    </div>
    <div class="user-order">
      <div class="user-title">我的订单</div>
      <div class="user-order-i">
        <div class="user-info-item">
          <van-icon name="scan" size="30" />
          <span>扫一扫</span>
        </div>
        <div class="user-info-item">
          <van-icon name="balance-o" size="30" />
          <span>钱包</span>
        </div>
        <div class="user-info-item">
          <van-icon name="hot-sale-o" size="30" />
          <span>热卖</span>
        </div>
        <div class="user-info-item">
          <van-icon name="diamond-o" size="30" />
          <span>会员</span>
        </div>
        <div class="user-info-item">
          <van-icon name="thumb-circle-o" size="30" />
          <span>点赞</span>
        </div>
      </div>
    </div>
    <van-button
      class="logout"
      v-show="cellphone"
      color="linear-gradient(to right, #ff6034, #ee0a24)"
      @click="logout"
    >
      登出
    </van-button>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      userList: {},
    };
  },
  computed: {
    ...mapState({
      cellphone: (state) => state.grid.cellphone,
    }),
  },

  methods: {
    logout() {
      localStorage.removeItem("userId");
      this.$store.dispatch("clearUserInfo");
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../style/mixin";
.container {
  background-color: @bc;
  .logout {
    width: 100%;
    margin-top: 20px;
    // border-radius: 15px;
    .borderRadius (15px);
  }
}
.user-top {
  padding: 10px 15px;
  font-weight: 700;
  height: 100px;
  background-image: linear-gradient(
    to top,
    rgba(255, 0, 0, 0),
    rgba(254, 208, 2, 1)
  );
  line-height: 100px;
  text-align-last: left;
}
.user-info {
  .wh(94%,50px);
  .borderRadius (15px);
  .fj(space-around,center);
  padding: 10px 0;
  margin-left: 3%;
  background-color: @bc;
  // align-items: center;
  .user-info-item {
    font-size: 12px;
    display: flex;
    flex-direction: column;
  }
}
.user-title {
  height: 15px;
  text-align: left;
  line-height: 50px;
  padding: 0 10px;
  font-size: 12px;
}
.user-order {
  .wh(94%,100px);
  background-color: @bc;
  .borderRadius (15px);
  margin-left: 3%;
  margin-top: 10px;

  .user-order-i {
    .fj(space-around);

    align-items: center;
    font-size: 12px;
    .user-info-item {
      margin-top: 30px;
      font-size: 12px;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
