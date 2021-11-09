<!--介绍-->
<template>
  <div class="introduce">
		<div class="header">
      <van-nav-bar title="INVITATION"/>
    </div>
  	<div class="introduce-bg">
  		<img src="../../assets/img/invite/bg.jpg" alt="">
			<div class="container-box">
				<div class="container-text one">
					<div class="container-icon">1</div>
					<div class="container-title">
						Buy members to watch ads to make money
					</div>
				</div>
				<table>
					<tr>
						<td width="30%">Membership level</td>
						<td width="16%">Price</td>
						<td width="35%">Revenue per ad view</td>
						<td width="16%" rowspan="7">Up to 5<br> views <br>per day</td>
					</tr>
					<tr>
						<td>Copper</td>
						<td>600</td>
						<td>4.8</td>
					</tr>
					<tr>
						<td>Silver</td>
						<td>2600</td>
						<td>21</td>
					</tr>
					<tr>
						<td>Gold</td>
						<td>10000</td>
						<td>86</td>
					</tr>
					<tr>
						<td>Brick</td>
						<td>25000</td>
						<td>242</td>
					</tr>
					<tr>
						<td>Gold bricks</td>
						<td>50000</td>
						<td>533</td>
					</tr>
					<tr>
						<td>Crown</td>
						<td>100000</td>
						<td>1333</td>
					</tr>
				</table>
				<div class="container-text">
					<div class="container-icon">2</div>
					<div class="container-title">
						Invite friends to register to buy members, friends can get 10% commission for buying members
					</div>
				</div>
				<div class="container-text">
					<div class="container-icon">3</div>
					<div class="container-title">
						Your invited friend invites his friend to register to purchase membership, and you will receive 3% of the membership purchase commission.
					</div>
				</div>
				<div class="container-text">
					<div class="container-icon">4</div>
					<div class="container-title">
						Invite to register to make money, watch ads to make money, you can get up to 5 rewards
					</div>
				</div>
				<div class="btn" @click="handleCopy">COPY</div>
			</div>
			<Dialog @close="doClose" @handleBtn="handleBtn" :isShow="isShowDialog" type="1">
				Copy succeeded
			</Dialog>
		
  	</div>
  </div>
</template>

<script>
	import Vue from 'vue';
	import Dialog from '@/components/common/dialog/Dialog'
	import {
		NavBar,
	} from 'vant';
	Vue.use(NavBar);
  export default {
    data() {
      return {
				isShowDialog: false,
      };
    },

    components: {
			Dialog
		},

    computed: {},

    mounted() { },

    methods: {
			handleCopy(){
				let userInfo = JSON.parse(localStorage.getItem('userInfo'))
				let inviteUrl = 'http://m.globejcd.top' + '/#/register?code=' + userInfo.code
        this.copy(inviteUrl)
      },
      copy(data) {
        let OrderNumber = data;
        let newInput = document.createElement("input");
        newInput.value = OrderNumber;
        document.body.appendChild(newInput);
        newInput.select();
        document.execCommand("Copy");
        newInput.remove();
				this.isShowDialog = true
      },
			handleBtn(){
				this.isShowDialog = false
			},
			doClose(){
				this.isShowDialog = false
			}
		}
  }

</script>
<style lang='less' scoped>
  @import url('./invite.less');
</style>