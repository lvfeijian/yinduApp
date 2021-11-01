<!-- 我的等级 -->
<template>
  <div class="my_level">
    <div class="header">
      <van-nav-bar
        title="INVITE"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="content">
      <img class="img" src="../../assets/img/mine/huangjinhuiyuan.png" alt="" />
      <div class="title">GOLD VIP</div>
      <div class="days">
        THE REMAINING NUMBER OF DAYS：18 DAY
      </div>
      <div class="buy">DIRECT PURCHASE</div>
      <div class="level">
        <div class="next_level">10 PEOPLE TO UPGRADE TO THE NEXT LEVEL</div>
        <!-- <van-steps :active="active">
          <van-step>SILVER</van-step>
          <van-step>GOLD</van-step>
          <van-step>DIAMOND</van-step>
        </van-steps> -->
        <div class="tips">CURRENT LEVEL</div>
        <div class="btn">INVITE NOW</div>
      </div>
    </div>
  </div>
</template>

<script>
  
  import Vue from 'vue';
	import {
		taskDetailApi
	} from '@/network/task'
	import {
		NavBar, Step, Steps
	} from 'vant';
  Vue.use(Step);
  Vue.use(Steps);
	Vue.use(NavBar);
  export default {
    data() {
      return {
        active: 1,
      };
    },

    components: {},

    computed: {},

    mounted() {},

    methods: {
      onClickLeft(){
        this.$router.go(-1)
      }
    }
  }

</script>
<style lang='less' scoped>
  @import url('./myLevel.less');
</style>