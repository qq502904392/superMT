<template>
  <div
    style="
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      background-color: #fff;
      border-radius: 15px;
      height: 200px;
    "
  >
    <div
      v-for="i in 100"
      :key="i"
      style="width: 48%; margin-bottom: 10px; border-radius: 15px"
    >
      <div>
        <img src="./images/1.jpeg" style="width: 90%" />
      </div>
      <i style="font-size: 11px; font-style: normal"
        >阿珍味道米粉(长江路直营点)</i
      >
      <div style="font-size: 9px"><i>4.8分</i><i>|</i><i>月售 5250</i></div>
      <div style="display: flex; justify-content: space-evenly">
        <van-tag type="primary" plain text-color="#fed002">25 减 2</van-tag>
        <van-tag type="primary" plain text-color="#fed002">25 减 2</van-tag>
        <van-tag type="primary" plain text-color="#fed002">25 减 2</van-tag>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>