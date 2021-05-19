<template>
  <div class="home-wrapper" @click="clickEvent">
    <div class="title">test</div>
    <div>kkkk</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
name: "index",
  data(){
    return{}
  },
  mounted() {
  this.getTestData({id:1}).then(res=>{
    console.log(res,'kkkkkkkk')
    }).catch(err=>console.log(err))
  },
  methods:{
  ...mapActions('home',['getLists','getTestData']),
    clickEvent(){
      this.getLists({userId: 1}).then(res=>{
        console.log('resssssss: ',res)
      })
    }
  },
}
</script>

<style scoped lang="scss">
.home-wrapper{

  height: 100px;
  width: 100px;
  background-color: $hs-primary-color;
  .title{
    color:$hs-success-color;
  }
}
</style>
