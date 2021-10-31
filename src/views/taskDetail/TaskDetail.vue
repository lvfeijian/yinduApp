<!-- Home -->
<template>
	<div class="task_detail">
		<van-nav-bar :title="videoInfo && videoInfo.title" left-arrow  @click-left="onClickLeft"/>
		<div class="video" v-if="videoInfo">
			<!-- <img :src="videoInfo.logo" alt="" /> -->
			<video controls="controls" :src="videoInfo.video_url"></video>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		taskDetailApi
	} from '@/network/task'
	import {
		NavBar,
	} from 'vant';
	Vue.use(NavBar);
	export default {
		data() {
			return {
				id: null,
				videoInfo: null
			};
		},

		components: {},

		computed: {},
		created(){
			this.id = this.$route.query.id
			this.getTaskDetail()
		},
		mounted() {
		},
		
		methods: {
			getTaskDetail(){
				taskDetailApi({
					id: this.id
				}).then(res => {
					if(res.code == 1){
						this.videoInfo = res.data
					}
				})
			},
			onClickLeft: function(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style lang='less' scoped>
	@import url('./taskDetail.less');
</style>
