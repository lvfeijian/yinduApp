<!-- 广告收益 -->
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
        <div class="price">₹{{task_earnings}}</div>
      </div>
    </div>
    <div class="list">
      <div class="title"><span></span>EARNINGS RECORD</div>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="item" v-for="(item,index) in earningList" :key="index">
          <div class="cont">
            <div class="vip">{{item.task_name}}</div>
            <div class="price">+{{item.amount}}</div>
          </div>
          <div class="hour">{{item.create_time}}</div>
        </div>
      </van-list>
    </div>

  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar, List } from 'vant';
Vue.use(List);
Vue.use(NavBar);
import {
  taskEaningsApi
} from '@/network/mine'
  export default {
    data() {
      return {
        earningList: [],
        loading: false, // 是否处于加载状态，加载过程中不触发load事件
        finished: false, // 是否已加载完成，加载完成后不再触发load事件
        page: 1,
        total: 0,
        task_earnings: 0
      }
    },

    components: {},

    computed: {},
    created(){
      this.task_earnings = this.$route.query.task_earnings
    },
    mounted() { },

    methods: {
      onClickLeft(){
        this.$router.go(-1)
      },
      onLoad(){
        taskEaningsApi({
          page: this.page,
          limit: 20
        }).then(res => {
          if(res.code == 1){
            // this.earningList.push(res.data)
            for (let i = 0; i < 20; i++) {
              this.earningList.push({
                "id": 1,
                "task_name": "ONE", // 任务名称
                "create_time": "2021-10-28 16:50:36", // 时间
                "amount": "1.00" // 收益
              });
            }
            this.page+=1
            this.loading = false;
            // 数据全部加载完成
            if (this.earningList.length >= 400) {
              this.finished = true;
            }
          }
        })
      },
      
    }
  }

</script>
<style lang='less' scoped>
  @import url('./profit.less');
</style>