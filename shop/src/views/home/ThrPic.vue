<template>
  <van-row style="border-radius: 10px 10px 0 0; overflow: hidden;height:100px;">
    <van-col v-for="(item,index) in images" :key="index" span="8">
      <img :src="item">
    </van-col>
  </van-row>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      images: [
        'https://m.360buyimg.com/mobilecms/s250x200_jfs/t1/90605/26/10612/62566/5e1efef3Ea606527f/b3ca094aaffe9025.jpg!q70.jpg.dpg',
        'https://m.360buyimg.com/mobilecms/jfs/t1/101645/37/10572/74169/5e200c92E37f08bb0/d55a3f5d6458f11f.gif',
        'https://m.360buyimg.com/mobilecms/s250x200_jfs/t1/85310/38/10776/58199/5e1ee801E02700761/580129519c606b1e.jpg!q70.jpg.dpg'
      ]
    }
  },
  methods: {
  }
}
</script>
<style scoped>
  img{
    width:125px;
  }
</style>
