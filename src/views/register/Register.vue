<!-- 注册页 -->
<template>
  <div class="register">
    <div class="logo">
        <img src="@/assets/img/login/logo.png" alt="">
    </div>
    <div class="title">REGISTER</div>
    <input class="userInput" type="number" ref="phone" v-model="phone" @input="changeNumber" placeholder="PHONE NUMBER" maxlength="10">
    <input class="pwdInput" type="password" ref="password" v-model="password" placeholder="INPUT PASSWORD" maxlength="18">
    <input class="confirmPwdInput" type="password" v-model="confirmPassword" placeholder="CONFIRM PASSWORD" maxlength="18">
    <input class="code" :disabled="isInvite" ref="code" type="text" v-model="code" placeholder="INVITATION CODE">
    <div class="register_btn" @click="handleRegister">REGISTER</div>
    <div class="switch" @click="goLink">REGISTERED ACCOUNT</div>
    <div class="down_app" @click="goDownload">DOWNLOAD&nbsp;&nbsp;APP</div>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  userRegister
} from '@/network/register'
import { Notify } from 'vant';
import { Toast } from 'vant';
Vue.use(Toast);
Vue.use(Notify);
export default {
  data () {
    return {
        phone: '',
        password: '',
        confirmPassword: '',
        code: '',
        isInvite: false
    }
  },

  components: {},

  computed: {},
  created(){
    this.code = this.$route.query.code || ''
    if(this.code != ''){
      this.isInvite = true
    }
  },
  mounted() {
  },

  methods: {
    changeNumber(){
      if(this.phone.length>10){
        this.phone = this.phone.slice(0,10)
      }
    },
    // 注册
    handleRegister(){
      if(this.phone.trim().length != 10){
        Toast('Wrong mobile phone number format');
        this.$refs.phone.focus()
        return
      }
      if(this.password.trim().length < 6){
        Toast('password length is greater than 6 digits');
        this.$refs.password.focus()
        return
      }
      if(this.confirmPassword != this.password){
        Toast('two passwords are inconsistent');
        return
      }
      if(this.code.length == 0){
        Toast('Please fill in the verification code');
        this.$refs.code.focus()
        return
      }
      Toast.loading({
        message: 'register...',
        forbidClick: true,
        duration: 10000
      });
      userRegister({
        phone: this.phone,
        password: this.password,
        repassword: this.confirmPassword,
        code: this.code
      }).then(res => {
        if(res.code == 1){
          this.$router.push('/login')
          Toast('Register success, Please login');
        }
      })
    },
    goLink(){
      this.$router.push({
        path: '/login'
      })
    },
    goDownload(){
      this.$router.push({
        path: '/appDownload'
      })
    }
  }
}

</script>
<style lang='less' scoped>
  @import url('./register.less');
</style>