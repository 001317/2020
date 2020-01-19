<template>
  <div>
    <div class="top">
      <MyShopHead></MyShopHead>
      <Banner></Banner>
    </div>
    <ThrPic></ThrPic>
    <ShopMenu></ShopMenu>
  </div>

</template>

<script>
import MyShopHead from '@/views/home/MyShopHead'
import Banner from '@/views/home/Banner'
import ThrPic from '@/views/home/ThrPic'
import ShopMenu from '@/views/home/ShopMenu'
export default {
  name: 'Index',
  components:{
    MyShopHead,
    Banner,
    ThrPic,
    ShopMenu
  },
  data() {
    return {
      title: '东软首页',
      title2: '东软首页2'
    }
  },
  methods: {
    showPopup() {
      this.show = true;
    }
  }
}
</script>
<style scoped>
  .top{
    width: 375px;
    height:187px;
    background:url(https://m.360buyimg.com/mobilecms/s1125x939_jfs/t1/109943/2/4391/83943/5e1c4cf7E6f5589d1/6795905abccef91e.jpg) no-repeat center center;
    background-size: cover;
  }
</style>
