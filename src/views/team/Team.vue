<!-- 团队 -->
<template>
  <div class="team">
    <div class="header">
      <van-nav-bar
        title="TEAM"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="empty"></div>
    <div class="switch">
      <div class="switch_item" :class="chooseIndex ? 'active' : ''" @click="handleSwitch">
        <div class="text">DIRECT PUSH</div>
        <div class="number">10</div>
      </div>
      <div class="switch_item" :class="chooseIndex ? '' : 'active'" @click="handleSwitch">
        <div class="text">TOTAL PEOPLE</div>
        <div class="number">32</div>
      </div>
    </div>
    <div class="table">
      <div class="table_header">
        <div class="header_item">VIP LEVEL</div>
        <div class="header_item">ACCOUNT</div>
        <div class="header_item name">NAME</div>
      </div>
      <div class="table_body">
        <div class="table_item" v-for="item in 3">
            <div class="level">
              GOLD VIP
            </div>
            <div class="number">
              156****8987
            </div>
            <div class="name">
              TONY
            </div>
        </div>
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
        chooseIndex: true
      };
    },

    components: {},

    computed: {},

    mounted() { },

    methods: {
      onClickLeft(){
        this.$router.go(-1)
      },
      handleSwitch(){
        this.chooseIndex = !this.chooseIndex
      }
    }
  }

</script>
<style lang='less' scoped>
  @import url('./team.less');
</style>