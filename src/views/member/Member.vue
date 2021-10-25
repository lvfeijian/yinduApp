<!-- Home -->
<template>
	<div class="member">
		<van-nav-bar title="UPGRADE MEMBER" left-arrow @click-left="onClickLeft" />
		<!-- 积分版头部 -->
		<div class="member-container">
			<div class="member-score">
				<img src="../../assets/img/home/score.png">
				<div class="member-title">
					UPGRADE VIP TO EARN MORE MONEY
				</div>
			</div>
			<!-- 积分版列表 -->
			<div class="score-item" v-for="(item,index) in vipList" :key="index">
				<img :src="require('../../assets/img/home/' + item.img)"/>
				<div class="score-title">{{item.title}}</div>
				<div class="score-btn">
					<div class="score-money">{{item.price}}</div>
				</div>
			</div>
			<div class="pay-btn" @click="onPayBtn()">
				<div class="pay-title">PAY</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		NavBar,
		Dialog 
	} from 'vant';
	Vue.use(NavBar);
	Vue.use(Dialog);
	export default {
		data() {
			return {
				vipList: [{
						img: "silver.png",
						title: "SILVER VIP",
						price: "₹600"
					},
					{
						img: "gold.png",
						title: "GOLD VIP",
						price: "₹2600"
					},
					{
						img: "diamond.png",
						title: "DIAMOND VIP",
						price: "₹10000"
					},
					{
						img: "golden.png",
						title: "GOLDEN DIAMOND VIP",
						price: "₹25000"
					},
					{
						img: "black.png",
						title: "BLACK DIAMOND VIP",
						price: "₹50000"
					},
					{
						img: "grown.png",
						title: "GROWN VIP",
						price: "₹100000"
					},
				]
			};
		},

		components: {},

		computed: {},

		mounted() {},

		methods: {
			onClickLeft: function() {
				this.$router.go(-1)
			},
			/**
			 * 支付
			 */
			onPayBtn: function(){
				Dialog.alert({
				  title: '标题',
				  width: 264,
				  message: '弹窗内容',
				  theme: 'round-button',
				}).then(() => {
				  // on close
				});
			}
		}
	}
</script>
<style lang='less' scoped>
	@import url('./member.less');
</style>
