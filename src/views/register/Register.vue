<!-- 注册页 -->
<template>
  <div class="register">
    <div class="logo">
        <img src="@/assets/img/login/logo.png" alt="">
    </div>
    <div class="title">REGISTER</div>
    <input class="userInput" type="number" ref="phone" v-model="phone" @input="changeNumber" placeholder="PHONE NUMBER" maxlength="11">
    <input class="pwdInput" type="password" ref="password" v-model="password" placeholder="INPUT PASSWORD" maxlength="18">
    <input class="confirmPwdInput" type="password" v-model="confirmPassword" placeholder="CONFIRM PASSWORD" maxlength="18">
    <input class="code" ref="code" type="text" v-model="code" placeholder="INVITATION CODE">
    <div class="register_btn" @click="handleRegister">REGISTER</div>
    <div class="switch" @click="goLink">REGISTERED ACCOUNT</div>
    <div class="down_app">DOWNLOAD&nbsp;&nbsp;APP</div>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  userRegister
} from '@/network/register'
import { Notify } from 'vant';
Vue.use(Notify);
export default {
  data () {
    return {
        phone: '',
        password: '',
        confirmPassword: '',
        code: ''
    }
  },

  components: {},

  computed: {},
  created(){
    this.code = this.$route.query.code || ''
  },
  mounted() {
  },

  methods: {
    changeNumber(){
      if(this.phone.length>11){
        this.phone = this.phone.slice(0,11)
      }
    },
    // 注册
    handleRegister(){
      if(this.phone.trim().length != 11){
        Notify({ type: 'danger', message: 'Wrong mobile phone number format' });
        this.$refs.phone.focus()
        return
      }
      if(this.password.trim().length < 6){
        Notify({ type: 'danger', message: 'password length is greater than 6 digits' });
        this.$refs.password.focus()
        return
      }
      if(this.confirmPassword != this.password){
        Notify({ type: 'danger', message: 'two passwords are inconsistent' });
        return
      }
      if(this.code.length == 0){
        Notify({ type: 'danger', message: 'Please fill in the verification code' });
        this.$refs.code.focus()
        return
      }
      userRegister({
        phone: this.phone,
        password: this.password,
        repassword: this.confirmPassword,
        code: this.code
      }).then(res => {
        if(res.code == 1){
          this.$router.push('/login')
        }
      })
    },
    goLink(){
      this.$router.push({
        path: '/login'
      })
    }
  }
}

</script>
<style lang='less' scoped>
  @import url('./register.less');
</style>