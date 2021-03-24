<template>
  <div id="test">
    <div class="top">
      <div class="name">cccc</div>
    </div>
    <el-button type="primary">确定</el-button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      test: 'vueDemo'
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
    background-color: yellow;

    .name {
      color: white;
    }
  }
}
</style>
