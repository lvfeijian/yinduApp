<!-- 钱包 -->
<template>
  <div class="wallet">
    <div class="header">
      <van-nav-bar
        title="WALLET"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="account">
      <div class="text">ACCOUNT BALANCE</div>
      <div class="price">₹5000</div>
    </div>
    <div class="card">
      <div class="tips">AVAILABLE CASH AMOUNT：₹50000</div>
      <div class="withdraw">
        <div class="sign">₹</div>
        <van-field class="ipt" v-model="money" type="number" placeholder="" />
        <div class="withdraw_all">WITHDRAW ALL</div>
      </div>
      <div class="btn">WITHDRAW</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
Vue.use(NavBar);
import { Field } from 'vant';
Vue.use(Field);
  export default {
    data() {
      return {
        money: ''
      };
    },

    components: {},

    computed: {},

    mounted() { 
    },

    methods: {
      onClickLeft(){
        this.$router.go(-1)
      }
    }
  }

</script>
<style lang='less' scoped>
  @import url('./wallet.less');
</style>