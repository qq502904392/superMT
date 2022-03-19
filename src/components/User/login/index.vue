<template>
  <div>
    <div class="regisTop">登陆</div>

    <van-form @submit="onSubmit">
      <van-field
        class="regisIpt"
        v-model="nickName"
        name="nickName"
        label="姓名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写姓名' }]"
      />
      <van-field
        class="regisIpt"
        v-model="cellphone"
        name="cellphone"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        class="regisIpt"
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block color="#fed002" type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickName: "",
      cellphone: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      // this.$emit("userInfo", values);
      // this.$router.push("/login");
    },
  },
};
</script>

<style lang="less">
body {
  background-color: #f6f6f6;
  padding: 0;
  margin: 0;
}
.regisTop {
  height: 45px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  line-height: 45px;
  background-color: #fed002;
}
.regisIpt {
  margin: 15px 0;
}
</style>