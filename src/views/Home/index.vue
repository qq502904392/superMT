<template>
  <section style="" class="home-container">
    <!-- 头部导航栏 -->
    <navBar :areaL="areaL"></navBar>
    <!-- 定位组件 -->
    <van-popup v-model="show" is-link position="bottom" :style="{ height: '40%' }">
      <areaR @getAreaList="getAreaList" @closeArea="closeArea" />
    </van-popup>
    <!-- 顶部导航 -->
    <gridItem></gridItem>
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
import { mapState } from 'vuex'
import grid from '@/components/Grid/grid.vue'
import areaR from '@/components/Area//area.vue'
import floor from '@/components/Floor/index'
import backTop from '@/components/backTop/index'
import navBar from '@/views/Home/navBar/index'
import gridItem from '@/views/Home/gridItem/index'
export default {
  data() {
    return {
      // 地址栏显示flag
      show: false,
      // 默认地址
      areaL: '乌鲁木齐',

      floorList: [],
    }
  },
  components: {
    grid,
    areaR,
    floor,
    backTop,
    navBar,
    gridItem,
  },
  computed: {
    // 获取仓库轮播图数据并且加工
    ...mapState({
      gridList1: state => state.grid.gridList.slice(0, 15),
      gridList2: state => state.grid.gridList.slice(15, 30),
      gridList3: state => state.grid.gridList.slice(31, 46),
    }),
  },

  mounted() {
    // 仓库派发获取轮播图小组件数据
    this.$store.dispatch('getGridList')
    // 挂载获取floor数据
    this.getFloorList()
  },
  methods: {
    // 子组件地址栏的自定义事件,用于显示定位
    getAreaList(areaLi) {
      this.areaL = areaLi
    },
    // 子组件地址栏的自定义事件,用于隐藏定位
    closeArea() {
      this.show = false
    },
    // 获取floor数据
    async getFloorList() {
      let result = await this.$API.reqFloorList()
      this.floorList = result.data
    },
  },
}
</script>

<style type="text/css" lang="less">
@import '../../style/mixin';
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
</style>
