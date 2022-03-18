<template>
  <div>
    <van-grid square :border="false" column-num="5">
      <van-grid-item
        v-for="value in gridList"
        :key="value.id"
        icon="search"
        :text="value.name"
        icon-size="20px"
      />
    </van-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["gridList"],
};
</script>

<style>
.van-grid-item__text {
  font-size: 9px;
}
</style>