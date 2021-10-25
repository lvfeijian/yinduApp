<!-- 修改密码 -->
<template>
  <div class="modify_password">
    <div class="header">
      <van-nav-bar
        title="CHANGE PASSWORD"
        left-arrow
        @click-left="onClickLeft"
      />
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
        this.$router.push({
          path: 'mine'
        })
      }
    }
  }

</script>
<style lang='less' scoped>
  @import url('./modifyPassword.less');
</style>