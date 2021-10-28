<!--介绍-->
<template>
  <div class="introduce">
  	<van-nav-bar title="INVITATION"/>
  	<div class="introduce-bg">
  		<!-- <img src="../../assets/img/invite/invitation.png" alt=""> -->
		<!-- <div class="title">Buy members to watch ads to make money</div>
		<div class="container">5552222222222222222222222222</div> -->
		<div class="container-box">
			<div class="container-text">
				<div class="container-icon">1</div>
				<div class="container-title">
					Buy members to watch ads to make money
				</div>
			</div>
			<div class="table">
				<div class="table-flex">
					<div class="table-row"v-for="(item,index) in 7" :key="index">
						<div class="one">Membership level</div>
						<div class="two">Price</div>
						<div class="three">Revenue per ad view</div>
					</div>
				</div>
				<div class="table-colum">Up to 5 views per day</div>
			</div>
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
					Invite to register to make money, watch ads to make money, you can get up to 4 rewards
				</div>
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
      };
    },

    components: {},

    computed: {},

    mounted() { },

    methods: {}
  }

</script>
<style lang='less' scoped>
  @import url('./invite.less');
</style>