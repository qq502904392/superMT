<template>
  <div>
    <shopHeader></shopHeader>
    <van-tabs
      v-model="active"
      sticky
      color="#fed002"
      title-active-color="#fed002"
      line-height="1px"
      line-width="30px"
    >
      <van-tab title="点餐" to="/shop/goods"> </van-tab>
      <van-tab title="评价" to="/shop/ratings"> 内容 </van-tab>
      <van-tab title="商家" to="/shop/info"> 内容 </van-tab>
    </van-tabs>
    <router-view></router-view>

    <van-submit-bar :price="0" button-text="去结算" button-color="#fed002">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <!-- <template #tip>
        你的收货地址不支持同城送,
        <span>修改地址</span>
      </template> -->
    </van-submit-bar>
  </div>
</template>

<script>
import shopHeader from "@/components/shopHeader/index";
export default {
  data() {
    return {
      list: {},
      num: 0,
    };
  },
  components: {
    shopHeader,
  },
  data() {
    return {
      active: "",
      checked: false,
    };
  },
  mounted() {
    this.$store.dispatch("getShopInfo");
    this.$store.dispatch("getShopRatings");
    this.$store.dispatch("getShopGoods");
  },
};
</script>

<style></style>
