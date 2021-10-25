<!-- 公告 -->
<template>
  <div class="announcement">
    <div class="header">
      <van-nav-bar
        title="PLATFORM ANNOUNCEMENT"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div style="height:0px;">&nbsp;</div>
    <div class="list">
      <div class="item" v-for="item in 5" @click="handleDetail">
        <div class="name">ANNOUNCEMENT OF FAME</div>
        <div class="intro">If you have any questions or service needs, please consult and verify through the official channel (customer service phone: xxxxxxxxxx).</div>
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
        this.$router.push({
          path: 'mine'
        })
      },
      handleDetail(){
        this.$router.push({
          path: 'announcementDetail'
        })
      }
    }
  }

</script>
<style lang='less' scoped>
  @import url('./announcement.less');
</style>