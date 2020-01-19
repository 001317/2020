<template>
  <div style="padding:0px 15px;">
    <van-swipe style="height:140px;border-radius: 10px;" :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img style="width:100%;height:100%" :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>

</template>

<script>
export default {
  name: 'Banner',
  data() {
    return {
      images: [
        'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/103194/31/10779/110327/5e1fd90bE1c78ecc3/8f947b50822620a0.jpg!cr_1125x445_0_171!q70.jpg.dpg',
        'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/90250/32/10615/152248/5e1c0b0aEa9b2181c/96a656944b17dfb4.jpg!cr_1125x445_0_171!q70.jpg.dpg',
        'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/106103/26/10749/142976/5e1ed8d4Ec7c61e51/5d6ac56006c5fc73.jpg!cr_1125x445_0_171!q70.jpg.dpg'
      ]
    }
  },
  methods: {
  }
}
</script>
<style scoped>
</style>
