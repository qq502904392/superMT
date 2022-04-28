<template>
  <van-nav-bar :border="false" :fixed="true">
    <template #left>
      <h4 @click="showPopup">{{ areaL }}</h4>
      <van-icon name="location-o" size="18" />
    </template>
    <template #title>
      <van-search background="#fed002" shape="round" show-action placeholder="请输入搜索关键词">
        <template #action>
          <div>搜索</div>
        </template>
      </van-search>
    </template>
    <template #right>
      <van-icon name="add-o" size="20px" dot />
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  props: ['areaL'],
  methods: {
    // 显示地址栏
    showPopup() {
      this.show = true
    },
  },
}
</script>

<style></style>
