<!--我的-->
<template>
  <div class="mine">
    <div class="title">
      ME
    </div>
    <div class="bg">
    </div>
    <div class="card" v-if="userInfo">
      <div class="left">
        <div class="head_image">
          <img :src="userInfo.logo" alt="" />
        </div>
        <div class="tips" @click="goRouter">MY DATA</div>
      </div>
      <div class="right">
        <div class="name">{{userInfo.name == '' ? userInfo.phone.replace(userInfo.phone.substring(3,7), "****") : userInfo.name}}</div>
        <div class="code">
          <div class="text">INVITATION CODE：{{userInfo.code}}</div>
          <div class="copy" @click="handleCopy">COPY</div>
        </div>
        <div class="level">VIP LEVEL：{{userInfo.vip_level}}</div>
        <div class="time">THE REMAINING NUMBER OF DAYS：{{userInfo.remain_day}} DAY</div>
      </div>
    </div>
    <div class="navbar">
      <div class="item" @click="golink('member')">
        <div class="icon">
          <img src="@/assets/img/mine/show_goumai_fill.png" alt="" />
        </div>
        <p>PURCHASE</p>
      </div>
      <div class="item" @click="golink('team')">
        <div class="icon">
          <img src="@/assets/img/mine/tuandui.png" alt="" />
        </div>
        <p>TEAM</p>
      </div>
      <div class="item" @click="golink('profit')">
        <div class="icon">
          <img src="@/assets/img/mine/tixian.png" alt="" />
        </div>
        <p>PROFIT</p>
      </div>
      <div class="item" @click="golink('wallet')">
        <div class="icon">
          <img src="@/assets/img/mine/tuandui.png" alt="" />
        </div>
        <p>WALLET</p>
      </div>
    </div>
    <div class="list">
      <div class="list_item" @click="golink('purchase')">
        <img class="icon" src="../../assets/img/mine/goumaicantuan.png" alt="" />
        <div class="list_name">SUBORDINATE PURCHASE</div>
        <img class="jiantou" src="../../assets/img/mine/goumaicantuan.png" alt="" />
      </div>
      <div class="list_item" @click="golink('announcement')">
        <img class="icon" src="../../assets/img/mine/goumaicantuan.png" alt="" />
        <div class="list_name">PLATFORM ANNOUNCEMENT</div>
      </div>
      <div class="list_item" @click="golink('appDownload')">
        <img class="icon" src="../../assets/img/mine/xiazai.png" alt="" />
        <div class="list_name">APP DOWNLOAD</div>
      </div>
      <div class="list_item">
        <img class="icon" src="../../assets/img/mine/zaixiankefu.png" alt="" />
        <div class="list_name">ONLINE SERVICE</div>
      </div>
      <div class="list_item" @click="golink('modifyPassword')">
        <img class="icon" src="../../assets/img/mine/xiugaimima.png" alt="" />
        <div class="list_name">CHANGE PASSWORD</div>
      </div>
      <div class="list_item" @click="golink('bankCard')">
        <img class="icon" src="../../assets/img/mine/yinhangqia.png" alt="" />
        <div class="list_name">BANK CARD</div>
      </div>
      <div class="list_item">
        <img class="icon" src="../../assets/img/mine/bangzhuzhongxin.png" alt="" />
        <div class="list_name">ABOUT US</div>
      </div>
    </div>
    <div class="exit" @click="exitSystem">
      EXIT THE SYSTEM
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Dialog } from 'vant';

  import {
    getUserInfo,
    getBankCard
  } from '@/network/mine'
  export default {
    data() {
      return {
        userInfo: null,
        bankCardInfo: null
      };
    },

    components: {},

    computed: {},
    created(){
      // this.handleUserInfo()
      getBankCard().then(res => {
        if(res.code == 1){
          this.bankCardInfo = res.data
        }
      })
    },
    mounted() {
      this.userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
    },

    methods: {
      // handleUserInfo(){
      //   getUserInfo().then(res => {
      //     if(res.code == 1){
      //       this.userInfo = res.data
      //     }
      //   })
      // },
      golink(url){
        let path = {
          path: url,
        }
        if(url == 'team'){
          path.query = {
            direct_push: this.userInfo.direct_push,
            total_people: this.userInfo.total_people
          }
        }
        if(url == 'profit'){
          path.query = {
            task_earnings: this.userInfo.task_earnings
          }
        }
        if(url == 'wallet'){
          path.query = {
            balance: this.userInfo.balance
          }
        }
        
        this.$router.push(path)
      },
      goRouter(){
        // 是null或者是数组都跳转到backCrad
        if(this.bankCardInfo == null || Array.isArray(this.bankCardInfo)){
          this.$router.push('/bankCard')
        } else {
          this.$router.push('/card')
        }
      },
      exitSystem(){
        window.sessionStorage.removeItem("token");
        this.$router.push('login')
      },
      handleCopy(){
        this.copy(this.userInfo.code)
      },
      copy(data) {
        let OrderNumber = data;
        let newInput = document.createElement("input");
        newInput.value = OrderNumber;
        document.body.appendChild(newInput);
        newInput.select();
        document.execCommand("Copy");
        newInput.remove();
        Dialog({ message: '复制成功' });
      },

    }
  }

</script>
<style lang='less' scoped>
  @import url('./mine.less');
</style>