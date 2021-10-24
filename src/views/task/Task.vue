<!-- Home -->
<template>
	<div class="task">
		<van-nav-bar title="VIP TASK" left-arrow  @click-left="onClickLeft"/>
		<div class="task-bg">
			<div class="task-container">
				<div class="item-list"  v-for="(item,index) in bannerImg" :key="index">
					<img :src="require('../../assets/img/home/' + item)" alt="">
				</div>
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
				bannerImg:[
					"banner-one.png",
					"banner-two.png",
					"banner-three.png",
					"banner-four.png",
					"banner-five.png",
					"banner-six.png",
					"banner-seven.png",
					"banner-eight.png",
				]
			};
		},

		components: {},

		computed: {},

		mounted() {},

		methods: {
			onClickLeft: function(){
				console.log("返回");
			}
		}
	}
</script>
<style lang='less' scoped>
	@import url('./task.less');
</style>
