<!-- app下载 -->
<template>
  <div class="app_download">
    <div class="header">
      <van-nav-bar
        title="APP DOWNLOAD"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="content">
      <img class="logo" src="../../assets/img/appDownload/logo.png" alt="" />
      <div class="btn_apple" @click="downApple">
        <img src="../../assets/img/appDownload/pingguo.png" alt="" />
        <div class="text">APPLE CLIENT DOWNLOAD</div>
      </div>
      <div class="btn_android">
        <img src="../../assets/img/appDownload/anzhuo.png" alt="" />
        <div class="text">ANDROID CLIENT DOWNLOAD</div>
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

    mounted() { },

    methods: {
      onClickLeft(){
        this.$router.go(-1)
      },
      downApple(){
        
      }
    }
  }

</script>
<style lang='less' scoped>
  @import
  url('./appDownload.less');
</style>