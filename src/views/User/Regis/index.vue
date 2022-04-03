<template>
  <div>
    <div class="regisTop">
      {{ regisT }}
    </div>

    <van-form @submit="onSubmit" class="form-container">
      <van-field
        class="regisIpt"
        v-model="nickName"
        name="nickName"
        label="用户名"
        placeholder="请输入用户名"
        :rules="[{ required: true }]"
      />
      <van-field
        class="regisIpt"
        v-model="sms"
        center
        clearable
        label="验证码"
        placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button
            size="small"
            type="primary"
            v-if="showSms"
            @click="sendSms"
            >发送验证码</van-button
          >
          <van-button
            size="small"
            type="primary"
            v-else
            :disabled="!showSms"
            color="#ccc"
            >已发送{{ time }}</van-button
          >
        </template>
      </van-field>
      <van-field
        class="regisIpt"
        v-model="password"
        :type="checked ? 'password' : 'text'"
        name="password"
        label="密码"
        placeholder="请输入密码"
        :rules="[
          {
            required: true,
          },
        ]"
      >
        <template #right-icon>
          <van-switch v-model="checked" size="24" active-color="#fed002" />
        </template>
      </van-field>

      <div style="margin: 16px">
        <van-button round block color="#fed002" type="info" native-type="submit"
          >注册</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSms: true,
      time: 0,
      nickName: "",
      sms: "",
      password: "",
      checked: true,
    };
  },
  props: ["regisT"],
  methods: {
    sendSms() {
      this.showSms = false;

      this.time = 30;
      const timerId = setInterval(() => {
        this.time--;
        if (this.time <= 0) {
          clearInterval(timerId);
          this.showSms = true;
        }
      }, 1000);
    },
    onSubmit() {
      // this.$emit("userInfo", values);
      this.$toast("注册成功");
      this.$router.push("/login");
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
.form-container {
  padding: 50px 10px;
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
  border-radius: 15px;
}
</style>