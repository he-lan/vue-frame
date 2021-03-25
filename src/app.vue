<template>
  <div id="test">
    <div class="top">
      <div class="name">{{ msg }}</div>
    </div>
    <el-button type="primary" @click="getData">确定</el-button>

  </div>
</template>

<script>
import { getList } from '../src/utils/api'
export default {
  data() {
    return {
      obj:{
        a:'aaaaa'
      },
      msg:''
    }
  },
  methods:{
    getData(){
      getList( {userId: 1}).then(res=>{
        console.log('getList :  ',res)
      })
      this.msg=this.obj.b??'ddd';

    }
  }
}
</script>

<style lang="scss">
#test {
  color: red;
  .top {
    height: 100px;
    width: 100px;
    background-color: red;

    .name {
      color: white;
    }
  }
}
</style>
