<template>
  <div class="home-wrapper" @click="clickEvent">
    <div class="title">test</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
name: "index",
  data(){
    return{}
  },
  methods:{
  ...mapActions('home',['getLists']),
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
