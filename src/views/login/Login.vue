<!-- 登录页 -->
<template>
  <div class="login">
    <div class="logo">
      <img src="@/assets/img/login/logo.png" alt="">
    </div>
    <div class="title">LOG<span></span>IN</div>
    <input class="userInput" type="number" v-model="phone" @input="changeNumber" placeholder="ACCOUNT NUMBER" max="10">
    <input class="pwdInput" type="password" v-model="password" placeholder="PASSWORD" maxlength="18">
    <div class="login_btn" @click="handleLogin">PASSWORD</div>
    <div class="switch" @click="goLink">REGISTERED ACCOUNT</div>
    <div class="tips">IF YOU FORGET YOUR PASSWORD, <br>PLEASE CONTACT THE STAFF</div>
      
  </div>
</template>

<script>
import Vue from 'vue';
import {
  userLogin
} from '@/network/login'
import { Notify ,Toast } from 'vant';
Vue.use(Notify);
Vue.use(Toast);
export default {
  data () {
    return {
      phone: '',
      password: '',
      loading: false,
    }
  },

  components: {},

  computed: {},

  mounted() {
    const token = window.localStorage.getItem('token')
    if(token){
    }
  },

  methods: {
    changeNumber(){
      if(this.phone.length>10){
        this.phone = this.phone.slice(0,10)
      }
    },
    handleLogin(){
      if(this.phone.trim().length !=10){
        Notify({ type: 'danger', message: 'Wrong mobile phone number format' });
        return
      }
      if(this.password.trim().length < 6){
        Notify({ type: 'danger', message: 'password length is greater than 6 digits' });
        return
      }
      Toast.loading({
        message: 'login...',
        forbidClick: true,
        duration: 10000
      });
      userLogin({
        phone: this.phone,
        password: this.password
      }).then(res => {
        if(res.code == 1){
          localStorage.setItem('token', res.data.token)
          this.$router.push('/home')
        }
      })
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