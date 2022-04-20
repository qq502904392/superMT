<template>
  <section style="display: flex">
    <aside>
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          v-for="(good, index) in goods"
          :key="index"
          :title="good.name"
        >
        </van-sidebar-item>
      </van-sidebar>
    </aside>
    <section class="goods-main">
      <div v-for="(good, index) in goods" :key="index">
        <div class="good-title">
          <span> {{ good.name }}</span>
        </div>
        <van-card
          v-for="(food, index) in good.foods"
          :key="index"
          num="0"
          :price="food.price"
          :desc="food.description"
          :title="food.name"
          :thumb="food.image"
        >
          <template>
            <span>{{ food.info }}</span>
          </template>
          <template #footer>
            <van-button size="mini">+</van-button>
            <van-button size="mini">-</van-button>
          </template>
        </van-card>
      </div>
    </section>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      goods: (state) => state.shop.goods,
    }),
  },
  data() {
    return {
      activeKey: 0,
    };
  },
};
</script>

<style lang="less" scoped>
@import "../../../style/mixin";
.goods-main {
  flex: 1;
  height: 500px;
  overflow-y: scroll;
  .good-title {
    font-size: 14px;
    // height: 20px;
    // width: 100%;
    .wh(100%,20px);
    line-height: 25px;
    text-align: left;
    background-color: #fff;
  }
}
.van-sidebar-item--select::before {
  background-color: #fed002;
}
.van-sidebar-item {
  line-height: 12px;
}
</style>
