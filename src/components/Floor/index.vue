<template>
  <section class="floor-container">
    <div
      class="floor-item"
      @click="goShop(i)"
      v-for="i in floorList"
      :key="i.id"
    >
      <div>
        <img class="floor-image" :src="i.img" style="" />
      </div>
      <div class="floor-title">
        <strong>{{ i.title }}</strong>
      </div>

      <div class="floor-info">
        <span>{{ Math.round(Math.random() * 4 + 1) }}分</span
        ><i class="floor-info-i"></i
        ><span>月售 {{ Math.round(Math.random() * 700 + 800) }}</span>
      </div>
      <div class="floor-cur">
        <van-tag type="primary" plain text-color="#FF6002">25 减 2</van-tag>
        <van-tag type="primary" plain text-color="#FF6002">30 减 5</van-tag>
        <van-tag type="primary" plain text-color="#FF6002">35 减 10</van-tag>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['floorList'],
  methods: {
    goShop(i) {
      this.$router.push({ path: '/shop', query: { tx: i.img } })
      this.$store.dispatch('getHeaderImag', i)
    },
  },
}
</script>

<style lang="less" scoped>
@import '../../style/mixin';
.floor-container {
  margin: 20px 0;
  .fj(space-evenly);
  flex-wrap: wrap;
  .floor-item {
    .wh(46%,210px);
    margin-bottom: 10px;
    border-radius: 15px;
    background-color: #fff;
    position: relative;
    .floor-image {
      .wh(100%,100%);
      border-radius: 15px;
      margin-bottom: 10px;
    }
    .floor-title {
      margin-bottom: 10px 30px 10px 0;
      font-size: 14px;
      font-style: normal;
    }
    .floor-info {
      .fj(center,center);
      // align-items: center;
      font-size: 12px;
      position: absolute;
      bottom: 40px;
      left: 10px;
      .floor-info-i {
        float: left;
        margin: 0 5px;
        .wh(1px,15px);
        background: #000;
      }
    }
    .floor-cur {
      .fj(space-evenly);
      position: absolute;
      bottom: 10px;
      left: 8px;
    }
  }
}
</style>
