<!--介绍-->
<template>
  <div class="introduce">
  	<van-nav-bar title="INTRODUCE"/>
  	<div class="introduce-bg">
  		<img src="../../assets/img/invite/invitation.png" alt="">
		<div class="title">Company project introduction</div>
		<div class="container">555222222222222222222222222222222222222222222222222222222222.。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。</div>
  	</div>
  </div>
</template>

<script>
	import Vue from 'vue';
	import {
		NavBar,
	} from 'vant';
	Vue.use(NavBar);
  export default {
    data() {
      return {
      };
    },

    components: {},

    computed: {},

    mounted() { },

    methods: {}
  }

</script>
<style lang='less' scoped>
  @import url('./Introduce.less');
</style>