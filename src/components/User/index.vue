<template>
  <div>
    <regis regisT="注册"></regis>
  </div>
</template>

<script>
import regis from "./Regis/index.vue";
export default {
  data() {
    return {
      userList: {},
    };
  },
  components: {
    regis,
  },
  methods: {
    // userInfo(value) {
    //   this.userList = value;
    //   // const { nickName, cellphone, password } = this.userList;
    //   // this.$API.post("/regist", { nickName, cellphone, password });
    //   // this.$router.push("login");
    // },
  },
};
</script>

<style>
</style>