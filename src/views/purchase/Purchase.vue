<!-- 下级购买 -->
<template>
  <div class="purchase">
    <div class="header">
      <van-nav-bar
        title="SUBORDINATE PURCHASE"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="empty"></div>
    <div class="list">
      <div class="title"><span></span>LOWER-LEVEL PURCHASE RECORDS</div>
      <div class="item" v-for="(item,index) in 14" :key="index">
        <div class="cont">
          <div class="vip">VIP 1</div>
          <div class="price">+100.00</div>
        </div>
        <div class="hour">TRANSACTION HOUR：2021-08-17 12:43:41</div>
        <div class="level">MEMBERSHIP LEVEL：DIAMOND</div>
      </div>
    </div>
    <div class="empty2"></div>
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

    components: {
    },

    computed: {
      
    },

    mounted() {},

    methods: {
      onClickLeft(){
        this.$router.go(-1)
      }
    }
  }

</script>
<style lang='less' scoped>
  @import url('./purchase.less');
</style>