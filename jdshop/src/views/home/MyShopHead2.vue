<template>
  <div style="padding: 0 15px;">
    <van-swipe :autoplay="3000" style="height: 140px;box-sizing: border-box; border-radius: 6px;">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" style="height:100%; width: 100% ; top: 40px;" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  export default {
    name: 'MyShopHead2',
    data() {
      return {
        images: [
          'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/39975/6/2210/103146/5cbfdd4fEd359fb15/90c41bac5ab851de.jpg!cr_1125x445_0_171!q70.jpg.dpg',
          'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/110156/14/4601/95662/5e21d3abE4c668b71/a011af7eaabe2152.jpg!cr_1125x445_0_171!q70.jpg.dpg',
          'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/60843/35/13956/137896/5db6c72dE727feae9/68060054ec7d376d.jpg!cr_1125x445_0_171!q70.jpg.dpg'
        ]
      }
    }
  }
</script>

<style>
</style>
