<template>
  <div style="background-color: #f3f3f4; padding: 40px 0">
    <van-nav-bar :border="false" :fixed="true">
      <template #left>
        <h6 @click="showPopup">{{ areaL }}</h6>
        <van-icon name="location-o" size="16" />
      </template>
      <template #title>
        <van-search
          background="#fed002"
          shape="round"
          show-action
          placeholder="请输入搜索关键词"
        >
          <template #action>
            <div>搜索</div>
          </template>
        </van-search>
      </template>
      <template #right>
        <van-icon name="add-o" size="20px" dot />
      </template>
    </van-nav-bar>

    <van-notice-bar
      scrollable
      text="技术是开发它的人的共同灵魂。"
      background="#fed002"
    />

    <van-popup
      v-model="show"
      is-link
      position="bottom"
      :style="{ height: '40%' }"
    >
      <areaR @getAreaList="getAreaList" @closeArea="closeArea" />
    </van-popup>

    <div class="grid">
      <div class="van-grid-item">
        <van-icon name="scan" size="30px" />
        <strong>扫一扫</strong>
      </div>
      <div class="van-grid-item">
        <van-icon name="shop-o" size="30px" />
        <strong>骑车</strong>
      </div>
      <div class="van-grid-item">
        <van-icon name="video-o" size="30px" />
        <strong>火车票机票</strong>
      </div>
      <div class="van-grid-item">
        <van-icon name="cluster-o" size="30px" />
        <strong>查路线</strong>
      </div>
    </div>

    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      show-indicators
      touchable
    >
      <van-swipe-item>
        <grid :gridList="gridList1"></grid>
      </van-swipe-item>
      <van-swipe-item>
        <grid :gridList="gridList2"></grid>
      </van-swipe-item>
      <van-swipe-item>
        <grid :gridList="gridList3"></grid>
      </van-swipe-item>
    </van-swipe>
    <!-- <div
      style="
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin-top: 10px;
      "
    > -->
    <!-- v-for="(item, index) in 100"
        :key="index" -->
    <floor style="margin-bottom: 10px"></floor>
    <!-- </div> -->
    <backTop></backTop>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import grid from "./child/index.vue";
import areaR from "./child/area.vue";
// import Footer from "@/components/Foooter/index";
import floor from "@/views/Floor/index";
import backTop from "@/components/backTop/index";
export default {
  data() {
    return {
      show: false,
      areaL: "乌鲁木齐",
      active: "home",
    };
  },
  components: {
    grid,
    areaR,
    // Footer,
    floor,
    backTop,
  },
  computed: {
    ...mapState({
      gridList1: (state) => state.gridList.slice(0, 15),
      gridList2: (state) => state.gridList.slice(5, 20),
      gridList3: (state) => state.gridList.slice(10, 25),
    }),
  },
  mounted() {
    this.$store.dispatch("getGridList");
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    getAreaList(areaLi) {
      this.areaL = areaLi;
    },
    closeArea() {
      this.show = false;
    },
  },
};
</script>

<style lang="less" scoped>
.van-search {
  padding: 0 10px;
}
.app {
  padding: 20px 0;
}
.van-nav-bar {
  background-color: #fed002;
}
.grid {
  padding: 0rem;
  background-color: #fed002;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .van-grid-item {
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    strong {
      font-size: 12px;
      margin-top: 3px;
    }
  }
}
</style>