<!-- 修改密码 -->
<template>
  <div class="modify_password">
    <div class="header">
      <van-nav-bar
        title="CHANGE PASSWORD"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="content">
      <input type="text" v-model="password" maxlength="18" placeholder="CHANGE NEW PASSWORD">
      <input type="text" v-model="confirmPwd" maxlength="18" placeholder="CONFIRM THE NEW PASSWORD">
    </div>
    <div class="ok" @click="submit">ok</div>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar, Notify } from 'vant';
Vue.use(NavBar);
Vue.use(Notify);
  export default {
    data() {
      return {
        password:'',
        confirmPwd:''
      };
    },

    components: {},

    computed: {},

    mounted() { },

    methods: {
      submit(){
        if(this.password.trim().length<6){
          Notify({ type: 'danger', message: '密码长度需要大于6位' });
        }
        if(this.confirmPwd != this.password){
          Notify({ type: 'danger', message: '两次密码不一致' });
        }
      },
      onClickLeft(){
        this.$router.push({
          path: 'mine'
        })
      }
    }
  }

</script>
<style lang='less' scoped>
  @import url('./modifyPassword.less');
</style>