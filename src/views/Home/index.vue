<template>
  <section style="" class="home-container">
    <!-- 头部导航栏 -->
    <header>
      <van-nav-bar :border="false" :fixed="true">
        <template #left>
          <h4 @click="showPopup">{{ areaL }}</h4>
          <van-icon name="location-o" size="18" />
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
    </header>
    <!-- 定位组件 -->
    <van-popup
      v-model="show"
      is-link
      position="bottom"
      :style="{ height: '40%' }"
    >
      <areaR @getAreaList="getAreaList" @closeArea="closeArea" />
    </van-popup>
    <!-- 顶部导航 -->
    <div class="grid">
      <div class="van-grid-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-saoyisao"></use>
        </svg>
        <strong>扫一扫</strong>
      </div>
      <div class="van-grid-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-qiche"></use>
        </svg>
        <strong>骑车</strong>
      </div>
      <div class="van-grid-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-huochepiao"></use>
        </svg>
        <strong>火车票机票</strong>
      </div>
      <div class="van-grid-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-luxianchaxun"></use>
        </svg>
        <strong>查路线</strong>
      </div>
    </div>
    <!-- 轮播图 -->
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="#fed002"
      :show-indicators="false"
      touchable
      height="255"
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

    <!-- 底部导航栏 -->
    <floor :floorList="floorList"></floor>
    <!-- 回到顶部组件 -->
    <backTop></backTop>
  </section>
</template>

<script>
import { mapState } from "vuex";
import grid from "@/components/Grid/grid.vue";
import areaR from "@/components/Area//area.vue";
import floor from "@/components/Floor/index";
import backTop from "@/components/backTop/index";
export default {
  data() {
    return {
      // 地址栏显示flag
      show: false,
      // 默认地址
      areaL: "乌鲁木齐",

      floorList: [],
    };
  },
  components: {
    grid,
    areaR,
    floor,
    backTop,
  },
  computed: {
    // 获取仓库轮播图数据并且加工
    ...mapState({
      gridList1: (state) => state.grid.gridList.slice(0, 15),
      gridList2: (state) => state.grid.gridList.slice(15, 30),
      gridList3: (state) => state.grid.gridList.slice(31, 46),
    }),
  },

  mounted() {
    // 仓库派发获取轮播图小组件数据
    this.$store.dispatch("getGridList");
    // 挂载获取floor数据
    this.getFloorList();
  },
  methods: {
    // 显示地址栏
    showPopup() {
      this.show = true;
    },
    // 子组件地址栏的自定义事件,用于显示定位
    getAreaList(areaLi) {
      this.areaL = areaLi;
    },
    // 子组件地址栏的自定义事件,用于隐藏定位
    closeArea() {
      this.show = false;
    },
    // 获取floor数据
    async getFloorList() {
      let result = await this.$API.reqFloorList();
      this.floorList = result.data;
    },
  },
};
</script>

<style type="text/css" lang="less">
@import "../../style/mixin";
.home-container {
  background-color: @bc !important;
  padding: 40px 0;
  .van-nav-bar {
    background-color: @yellow;
    .van-nav-bar__title {
      margin-left: 90px;
    }
    .van-cell {
      line-height: 4vw;
    }
  }
}
.grid {
  margin-top: 6px;
  background-color: #fed002;
  height: 65px;
  .fj(space-evenly);
  align-items: center;
  .van-grid-item {
    // display: flex;
    // justify-content: space-between;
    .fj(space-between);
    flex-direction: column;
    align-items: center;
    strong {
      font-size: 12px;
      margin-top: 3px;
    }
  }
}
</style>
