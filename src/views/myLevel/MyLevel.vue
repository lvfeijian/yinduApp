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
		<div class="progress-box">
			
			<!-- for循环开始 -->
			<div class="progress" v-for="(item,index) in vipList" :key="index">
				<div class="cire-box" :class="index != vipList.length-1 && curVip == item.name ? 'isActive' : 'active'"></div>
				<div class="left-cire" :class="curVip == item.name ? 'isActive' : 'active'"></div>
				<div class="vip-title">{{item.name}}</div>
			</div>
		</div>
        <div class="tips">CURRENT LEVEL </div>
        <div class="btn">INVITE NOW</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    getMyPush
  } from '@/network/mylevel.js';
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
		vipList:null ,
		curVip:null,
      };
    },

    components: {},

    computed: {},
    mounted() {
		getMyPush().then(res => {
		  if(res.code == 1){
			let newData = res.data
		    this.vipList = newData.vip
			this.curVip = newData.vip_level
		  }
		})
	},

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