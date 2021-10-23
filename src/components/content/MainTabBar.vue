<template>
    <tab-bar>
        <tab-bar-item path="/home">
            <img src="@/assets/img/5.png" alt="" slot="item-icon">
            <img src="@/assets/img/1.png" alt="" slot="item-icon-active">
        </tab-bar-item>
        <tab-bar-item path="/categroy">
            <img src="@/assets/img/6.png" alt="" slot="item-icon">
            <img src="@/assets/img/2.png" alt="" slot="item-icon-active">
        </tab-bar-item>
        <tab-bar-item path="/cart">
            <img src="@/assets/img/7.png" alt="" slot="item-icon">
            <img src="@/assets/img/3.png" alt="" slot="item-icon-active" class="one">
        </tab-bar-item>
        <tab-bar-item path="/login">
            <img src="@/assets/img/8.png" alt="" slot="item-icon">
            <img src="@/assets/img/4.png" alt="" slot="item-icon-active">
        </tab-bar-item>
        
    </tab-bar>
</template>
<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'
export default {
    name:'MainTabBar',
    components: {
        TabBar,
        TabBarItem
    }
}
</script>
<style scoped>
img{
    vertical-align: center;
}
.one{
    width: 25px;
    height: 20px;
    margin-top: 10px;
}
</style>