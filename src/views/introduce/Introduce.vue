<!--介绍-->
<template>
  <div class="introduce">
    <div class="header">
      <van-nav-bar title="INTRODUCE"/>
    </div>
  	<div class="introduce-bg">
  		<img src="../../assets/img/invite/bg.jpg" alt="">
		<div class="title">Company project introduction</div>
		<div class="container" v-html="company"></div>
  	</div>
  </div>
</template>

<script>
	import Vue from 'vue';
  import {
    getCompanyIntro
  } from '@/network/introduct'
	import {
		NavBar,
	} from 'vant';
	Vue.use(NavBar);
  export default {
    data() {
      return {
        company: ''
      }
    },

    components: {},
    watch:{
			'$route':function(to,from){
				document.body.scrollTop = 0
				document.documentElement.scrollTop = 0
			}
		},
    computed: {},
    created(){
      getCompanyIntro().then(res => {
        if(res.code == 1){
          this.company = res.data.company
        }
      })
    },
    mounted() {},

    methods: {}
  }

</script>
<style lang='less' scoped>
  @import url('./introduce.less');
</style>