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
				<img :src="require('../../assets/img/home/' + item.img)" />
				<div class="score-title">{{item.title}}</div>
				<div class="score-btn" :class="{'active':item.select == true}" @click="onItemList(item)">
					{{item.price}}
				</div>
			</div>
			<div class="pay-btn" @click="onPayBtn()">
				<div class="pay-title">PAY</div>
			</div>
		</div>
		<van-popup v-model="show" round position="bottom" :style="{ height: '33%' }">
			<div class="pay-box">
				<div class="pay-title">PAY IMMEDIATELY</div>
				<div class="pay-container">
					<div class="wallet">
						<img src="../../assets/img/home/wallet.png" alt="">
					</div>
					<div class="small-title">BANK CARD</div>
					<div class="pay-check" @click="onCheck">
						<van-icon v-if="showIcon" name="checked" size="23px" />
					</div>
				</div>
				<div class="pay-btntwo" @clcik="onPatBtnTwo">PAY</div>
			</div>

		</van-popup>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		NavBar,
		Dialog,
		Popup,
		Icon
	} from 'vant';
	Vue.use(NavBar);
	Vue.use(Dialog);
	Vue.use(Popup);
	Vue.use(Icon);
	export default {
		data() {
			return {
				vipList: [{
						img: "silver.png",
						title: "SILVER VIP",
						price: "₹600",
						select: true
					},
					{
						img: "gold.png",
						title: "GOLD VIP",
						price: "₹2600",
						select: false
					},
					{
						img: "diamond.png",
						title: "DIAMOND VIP",
						price: "₹10000",
						select: false
					},
					{
						img: "golden.png",
						title: "GOLDEN DIAMOND VIP",
						price: "₹25000",
						select: false
					},
					{
						img: "black.png",
						title: "BLACK DIAMOND VIP",
						price: "₹50000",
						select: false
					},
					{
						img: "grown.png",
						title: "GROWN VIP",
						price: "₹100000",
						select: false
					},
				],
				show: false, // 弹窗显示
				showIcon: false, // 图标选中
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
			 * 支付设置
			 */
			onItemList: function(item) {
				// this.show = true;
				item.select = true
				if(item.select){
					item.select = false
				}else{
					item.select = true
				}
			},
			/**
			 * 升级会员支付
			 */
			onPayBtn: function() {
				Dialog.alert({
					title: '标题',
					width: 264,
					message: '弹窗内容',
					theme: 'round-button',
				}).then(() => {
					// on close
				});
			},
			/**
			 * 图标选中
			 */
			onCheck: function() {
				if (this.showIcon) {
					this.showIcon = false
				} else {
					this.showIcon = true
				}

			},

			/**
			 * 支付2
			 */
			onPatBtnTwo: function() {
				console.log("支付2");
			}
		}
	}
</script>
<style lang='less' scoped>
	@import url('./member.less');
</style>
