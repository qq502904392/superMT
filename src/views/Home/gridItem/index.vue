<template>
  <section class="grid">
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
  </section>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@import '../../../style/mixin';

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
