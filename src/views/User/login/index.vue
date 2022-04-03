<template>
  <div>
    <div class="regisTop">登陆</div>
    <div class="form-tittle">
      <span :class="{ on: show }" @click="showOther">密码登录</span>&nbsp;
      <span :class="{ on: !show }" @click="showOther">短信登陆</span>
    </div>
    <van-form class="form-container">
      <van-field
        class="regisIpt"
        v-model="cellphone"
        name="pattern"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ pattern, required: true, message: '格式不正确' }]"
      />
      <van-field
        v-show="show"
        class="regisIpt"
        v-model="password"
        :type="checked ? 'text' : 'password'"
        name="password"
        label="密码"
        placeholder="请输入密码"
        :rules="[
          {
            required: true,
            message: '请填写密码',
          },
        ]"
      >
        <template #right-icon>
          <van-switch v-model="checked" size="24" active-color="#fed002" />
        </template>
      </van-field>
      <van-field
        v-show="!show"
        class="regisIpt"
        v-model.number="sms"
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
      <div style="margin: 16px">
        <van-button
          round
          block
          color="#fed002"
          type="info"
          native-type="submit"
          @click="Submit"
          >登陆</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      time: 0,
      sms: "",
      nickName: "",
      cellphone: "",
      password: "",
      switchChecked: false,
      show: true,
      showSms: true,
      pattern: /\d{6}/,
    };
  },
  methods: {
    Submit() {
      if (this.show) {
        if (this.password !== 666) {
          this.$toast("密码错误");
        }
      } else {
        if (this.sms !== 666) {
          this.$toast("验证码错误");
        }
      }
    },
    showOther() {
      this.show = !this.show;
    },
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
  padding: 10px 10px;
}
.form-tittle {
  margin-top: 20px;
  text-align: center;
  height: 20px;
  line-height: 20px;
  .on {
    font-weight: 700;
    color: #fed002;
  }
}
.regisTop {
  color: #fff;
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