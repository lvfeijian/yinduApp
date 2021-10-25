<!-- 收益 -->
<template>
  <div class="profit">
    <div class="header">
      <van-nav-bar
        title="PROFIT"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="empty"></div>
    <div class="bg">
      <div style="height:0px;">&nbsp;</div>
      <div class="card">
        <img src="../../assets//img/profit/积分.png" alt="" />
        <p class="earning">MY EARNINGS</p>
        <div class="price">₹5000</div>
      </div>
    </div>
    <div class="list">
      <div class="title"><span></span>EARNINGS RECORD</div>
      <div class="item" v-for="(item,index) in 14" :key="index">
        <div class="cont">
          <div class="vip">TRANSACTION COMPLETE</div>
          <div class="price">+100.00</div>
        </div>
        <div class="hour">2021-08-17 12:43:41</div>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
Vue.use(NavBar);
  export default {
    data() {
      return {
      }
    },

    components: {},

    computed: {},

    mounted() { },

    methods: {
      onClickLeft(){
        this.$router.go(-1)
      }
    }
  }

</script>
<style lang='less' scoped>
  @import url('./profit.less');
</style>