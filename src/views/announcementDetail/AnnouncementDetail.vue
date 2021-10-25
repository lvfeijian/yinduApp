<!-- 公告详情页 -->
<template>
  <div class="announcement_detail">
    <div class="header">
      <van-nav-bar
        title="PLATFORM ANNOUNCEMENT"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div style="height:0px;">&nbsp;</div>
    <div class="list">
      <div class="item">
        <div class="name">ANNOUNCEMENT OF FAME</div>
        <div class="intro">If you have any questions or service needs, ve any questions or service needs, vuestions or service needs, vuestions or service needs, vuestions or service needs, ve any questions or service needs, please consult and verify through the official channel (customer service phone: xxxxxxxxxx).</div>
        <div class="time">2021.08.19</div>
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
  @import url('./announcementDetail.less');
</style>