<template>
  <van-tree-select
    height="55vw"
    :items="items"
    :main-active-index.sync="activeIndex"
  >
    <template slot="content">
      <van-image v-if="activeIndex === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      <van-image v-if="activeIndex === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
    </template>
  </van-tree-select>
</template>

<script>
  export default {
      name: 'mullist',
      data() {
        return{
          items,
          activeId: 1,
          activeIndex: 0
        }
      }
   
  }
</script>

<style>
</style>
