<!-- 登录页 -->
<template>
  <div class="login">
    <div class="logo">
      <img src="@/assets/img/login/logo.png" alt="">
    </div>
    <div class="title">LOG<span></span>IN</div>
    <input class="userInput" type="number" v-model="phone" @input="changeNumber" placeholder="ACCOUNT NUMBER" max="11">
    <input class="pwdInput" type="password" v-model="password" placeholder="PASSWORD" maxlength="18">
    <div class="login_btn" @click="handleLogin">PASSWORD</div>
    <div class="switch" @click="goLink">REGISTERED ACCOUNT</div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Notify  } from 'vant';
Vue.use(Notify);
export default {
  data () {
    return {
      phone: '',
      password: ''
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    changeNumber(){
      if(this.phone.length>11){
        this.phone = this.phone.slice(0,11)
      }
    },
    handleLogin(){
      if(this.phone.trim().length !=11){
        Notify({ type: 'danger', message: '手机号码格式不对' });
        return
      }
      if(this.password.trim().length < 6){
        Notify({ type: 'danger', message: '密码长度需要大于6位' });
        return
      }

    },
    goLink(){
      this.$router.push({
        path: '/register'
      })
    }
  }
}

</script>
<style lang='less' scoped>
  @import url('./login.less');
</style>