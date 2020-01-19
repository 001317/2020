<template>
  <div>
    <div class="top">
      <MyShopHead class='f'></MyShopHead>
      <MyShopHead2></MyShopHead2>
    </div>
    <div class="top1">

      <ShopMenu></ShopMenu>
      <zhuhuichang></zhuhuichang>
      <Jdmiaosha></Jdmiaosha>
      <newperson></newperson>
    </div>
    <div class="floor">

    </div>
    <mullist> </mullist>
  </div>
</template>

<script>
  import MyShopHead from '@/views/home/MyShopHead.vue'
  import MyShopHead2 from '@/views/home/MyShopHead2.vue'
  import ShopMenu from '@/views/home/ShopMenu.vue'
  import zhuhuichang from '@/views/home/zhuhuichang.vue'
  import Jdmiaosha from '@/views/home/Jdmiaosha.vue'
  import newperson from '@/views/home/newperson.vue'
  import mullist from '@/views/fenlei/mullist.vue'
  export default {
    name: 'index',
    components: {
      MyShopHead,
      MyShopHead2,
      ShopMenu,
      zhuhuichang,
      Jdmiaosha,
      newperson,
      mullist

    },
    data() {
      return {
        title: '东软首页',
        title2: '东软首页2'
      }
    },
    methods: {

    }
  }
</script>

<style>
  .top {
    background: url(https://m.360buyimg.com/mobilecms/s1125x939_jfs/t1/92463/25/10852/165400/5e2186f9E931d0b81/5cafaab8138e78c7.png) no-repeat center center;
    height: 187px;
    width: 100%;
    background-size: cover;
    overflow: auto;
  }
  .f{
    display: fixed;
    overflow: hidden;
  }
  .floor {
    background: #ff0000;
    width: 100%;
    height: 200px;
  }
</style>
