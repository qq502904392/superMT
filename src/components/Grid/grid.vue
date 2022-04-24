<template>
  <section class="item">
    <div class="item-i" v-for="v in gridList" :key="v.id">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="`#${v.icon}`"></use>
      </svg>
      <span>{{ v.name }}</span>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ['gridList'],
}
</script>

<style scoped type="text/css" lang="less">
@import '../../style/mixin';
.item {
  .fj(space-evenly);
  flex-wrap: wrap;
  align-content: space-between;
  height: 200px;
  .item-i {
    width: 20%;
    .fj(center);
    flex-direction: column;
    font-size: 15px;
    align-items: center;
    margin-bottom: 15px;
  }
  .icon {
    .wh(45px,45px);
  }
  span {
    font-size: 12px;
    margin-top: 10px;
  }
}
</style>
