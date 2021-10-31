<!-- 公告 -->
<template>
  <div class="announcement">
    <div class="header">
      <van-nav-bar
        title="PLATFORM ANNOUNCEMENT"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div style="height:0px;">&nbsp;</div>
    <div class="list">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="item" v-for="(item,index) in noticeListData" :key="index" @click="handleDetail(item.id)">
          <div class="name">{{item.title}}</div>
          <div class="intro" v-html="item.content"></div>
          <div class="time">{{item.create_time}}</div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar, List } from 'vant';
Vue.use(NavBar).use(List)
import {
  noticeListApi
} from '@/network/home'
  export default {
    data() {
      return {
        noticeListData: [],
        loading: false, // 是否处于加载状态，加载过程中不触发load事件
        finished: false, // 是否已加载完成，加载完成后不再触发load事件
        page: 1,
        total: 0,
      };
    },

    components: {},

    computed: {},

    mounted() {},

    methods: {
      onClickLeft(){
        this.$router.push({
          path: 'mine'
        })
      },
      handleDetail(id){
        this.$router.push({
          path: 'announcementDetail',
          query: {
						id
					}
        })
      },
      onLoad(){
        noticeListApi({
          type: 1,
          page: this.page,
          limit: 20
        }).then(res => {
          console.log(res);
          if(res.code == 1){
            // this.noticeListData.push(res.data)
            for (let i = 0; i < 20; i++) {
              this.noticeListData.push({
                "id": 1,
                "title": "ANNOUNCEMENT OF FAME - 1",
                "create_time": "2021.10.27",
                "content": "\n<p>Our company solemnly declares that the Beijing branch ofXXX Co., Ltd. does not have a \"gift department\". In addition,our company does not have any cooperative relationshipwith \"Investment Co. Ltd.\" and its related products, nordoes it have any business contacts.</p>\n<p><br></p>\n<p>I would liknto remind everyone to invest cautiously. Ifyou have any questions or service needs, please consultand verify through Ping An's official channels (website:,customer service phone: хххххххх).</p>\n<p><br></p>\n"
              });
            }
            this.page+=1
            this.loading = false;
            // 数据全部加载完成
            if (this.noticeListData.length >= 40) {
              this.finished = true;
            }
          }
        })
      },
      
    }
  }

</script>
<style lang='less' scoped>
  @import url('./announcement.less');
</style>