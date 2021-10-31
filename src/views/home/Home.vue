<!-- Home -->
<template>
	<div class="home">
		<!-- 背景图 -->
		<div class="home-bg">
			<div class="home-title">HOME</div>
			<!-- 轮播图 -->
			<div class="home-banner">
				<van-swipe class="my-swipe" :autoplay="3000" :show-indicators="false">
				  <van-swipe-item v-for="(item,index) in bannerImg" :key="index" @click="onBanner(item.url)">
						<img :src="item.logo" alt="" />
				  </van-swipe-item>
				</van-swipe>
			</div>
		</div>
		<!-- 提示轮播 -->
		<div class="home-tip">
			<van-notice-bar left-icon="volume-o" :scrollable="false">
				<van-swipe vertical class="notice-swipe" :autoplay="5000" :show-indicators="false">
					<van-swipe-item class="swipe-item" v-for="(item,index) in noticeData" :key="index" @click="handleNotice(item.id)">{{item.title}}</van-swipe-item>
				</van-swipe>
			</van-notice-bar>
		</div>
		<!-- 列表项 -->
		<div class="item-box">
			<div class="item-list"  v-for="(item,index) in listData" :key="index" @click="onItemBanner(item.path)">
				<img :src="require('../../assets/img/home/' + item.url)"/>
			</div>
		</div>
		
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		getSwiperList,
		noticeListApi
	} from '@/network/home'
	import {
		NoticeBar,
		Swipe,
		SwipeItem ,
		Lazyload
	} from 'vant';
	Vue.use(NoticeBar);
	Vue.use(Swipe);
	Vue.use(SwipeItem);
	Vue.use(Lazyload);
	export default {
		data() {
			return {
				listData: [
					{
						url: "create-task.png",
						path: 'task'
					},
					{
						url: "free-center.png",
						path: 'free'
					},
					{
						url: "upgrade-vip.png",
						path: 'member'
					}
				],
				bannerImg: [],
				noticeData: []
			};
		},

		components: {},

		computed: {},
		mounted() {
			this.getNoticeList()
			getSwiperList().then(res => {
				if(res.code == 1){
					this.bannerImg = res.data
				}
			})
		},

		methods: {
			/**
			 * 轮播图点击
			 */
			onBanner: function(url){
				window.location.href = url
			},
			/**
			 * 列表点击
			 */
			onItemBanner: function(path){
				this.$router.push({
					path
				})
			},
			// 公告点击
			handleNotice(id){
				this.$router.push({
					path: 'announcementDetail',
					query: {
						id
					}
				})
			},
			getNoticeList(){
        noticeListApi({
          type: 0
        }).then(res => {
          if(res.code == 1){
            this.noticeData = res.data
          }
        })
      }
		}
	}
</script>
<style lang='less' scoped>
	@import url('./home.less');
</style>
