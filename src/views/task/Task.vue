<!-- Home -->
<template>
	<div class="task">
		<van-nav-bar title="VIP TASK" left-arrow  @click-left="onClickLeft"/>
		<div class="task-bg">
			<div class="task-container">
				<div class="item-list"  v-for="(item,index) in bannerImg" :key="index" @click="onTaskDetail(item.id)">
					<img :src="item.logo" :alt="item.title">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		getTaskList
	} from '@/network/task'
	import {
		NavBar,
	} from 'vant';
	Vue.use(NavBar);
	export default {
		data() {
			return {
				bannerImg:[]
			};
		},

		components: {},

		computed: {},

		mounted() {
			// 获取任务中心数据
			getTaskList().then(res => {
				if(res.code == 1){
					this.bannerImg = res.data
				}
			})
		},
		
		methods: {
			// 任务详情跳转
			onTaskDetail: function(id){
				this.$router.push({
					path: 'taskDetail',
					query:{
						id
					}
				})
			},
			
			onClickLeft: function(){
				this.$router.push({
					path: 'home'
				})
			}
		}
	}
</script>
<style lang='less' scoped>
	@import url('./task.less');
</style>
