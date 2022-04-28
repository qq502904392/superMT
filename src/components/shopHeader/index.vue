<template>
  <section>
    <div class="text" :style="{ backgroundImage: 'url(' + backgroundImgs + ')' }">
      <div class="back" @click="$router.back()">
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div class="avatar"><img :src="backgroundImgs" /></div>
      <div class="info">
        <div class="info-first">
          <van-tag color="#fed002" text-color="#AC0000">品牌</van-tag>
          <div class="info-t">{{ image.title }}</div>
        </div>
        <div class="info-second">
          <span>{{ info.score }}</span>
          <span>月售{{ info.sellCount }}单</span>
          <span>{{ info.description }}</span>
          <span>约{{ info.deliveryTime }}分钟</span>
          <span>距离{{ info.distance }}</span>
        </div>
        <div class="info-third">
          <van-tag v-if="info.supports" color="#ffe1e1" text-color="#ad0000" size="mini">{{
            info.supports[0].name
          }}</van-tag>

          <span v-if="info.supports">
            {{ info.supports[0].content }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      show: false,
      backgroundImgs: '',
      actions: [{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }],
    }
  },
  methods: {
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false
      Toast(item.name)
    },
  },
 
  
  computed: {
    ...mapState({
      info: state => state.shop.info,
      image: state => state.shop.images,
    }),
    ...mapGetters(['backImg']),
  },
}
</script>

<style lang="less" scoped>
@import '../../style/mixin';
.text {
  height: 160px;
  padding: 44px 0 0 0;
  position: relative;
  .back {
    position: fixed;
    left: 10px;
    top: 10px;
    .icon-fanhui {
      .sc(30px,#ccc);
    }
  }
  .avatar {
    border: 1px solid #ccc;
    position: absolute;
    top: 35px;
    left: 50%-8px;
    .wh(70px,70px);
    img {
      .wh(100%,100%);
    }
  }
  .info {
    padding: 32px 36px 20px 36px;
    background-color: @fc;
    height: 100px;
    margin-top: 44px;
    border-top: 1px solid @fc;
    .info-first {
      font-weight: 700;
      font-size: 20px;
      .fj(center,left);
      // align-items: left;
      .info-t {
        margin-left: 10px;
      }
    }
    .info-second {
      height: 30px;
      line-height: 30px;
      font-size: 12px;
      span {
        margin: 0 5px;
      }
    }
    .info-third {
      margin-top: 12px;
      display: flex;
      font-size: 12px;
      height: 15px;
      line-height: 15px;
      span {
        margin-left: 10px;
      }
    }
  }
}
</style>
