<template>
  <div class="home-wrapper" @click="clickEvent">
    home
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

</style>
