<!-- Home -->
<template>
	<div class="free">
		<van-nav-bar title="FREE MISSION" left-arrow  @click-left="onClickLeft"/>
		<div class="free-bg">
			<img class="img-box" src="../../assets/img/home/free.png" alt="">
			<div class="container-box">
				<div class="container-title">Company project introduction</div>
				<div class="container-text">555222222222222222222222222222222222222222222222222222222222.。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。fdddddddddddddddddddddddddddddddddddddddddd</div>
			</div>
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

		mounted() {},

		methods: {
			onClickLeft: function(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style lang='less' scoped>
	@import url('./free.less');
</style>
