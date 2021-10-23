<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
    </div>
</template>
<script>
export default {
    name: 'TabBarItem',
    props: {
        path: String
    },
    data(){
       return{
           
       }
    },
    methods: {
        itemClick(){
            if(this.$route.path != this.path){
                this.$router.push(this.path)
            }
        }
    },
    computed: {
        isActive(){
            return this.$route.path.indexOf(this.path) === -1
           
        }
    }
   
}
</script>
<style>
.tab-bar-item{
    flex: 1;
    text-align: center;
    font-size: 14px;
} 
</style>