<template>
  <section>
    <van-area
      title="标题"
      :area-list="areaList"
      :columns-num="3"
      :columns-placeholder="['请选择', '请选择', '请选择']"
      @confirm="onConfirm"
      @cancel="cleanArea"
      :value="areaLi"
    />
  </section>
</template>

<script>
import { areaList } from "@vant/area-data";
export default {
  data() {
    return {
      areaList,
      areaLi: "",
    };
  },
  methods: {
    onConfirm(data) {
      this.areaLi = data[1].name;
      this.$emit("getAreaList", this.areaLi);
      this.$emit("closeArea");
      // this.areaLi = "";
    },
    cleanArea() {
      // this.areaLi = "";
      this.$emit("closeArea");
    },
  },
};
</script>

<style>
</style>