<template>
  <div class="a">
    <div class="b" style="height: 35.1px;">
      <img src="../../../build/jdms.png" alt="" class="jd">
      <div class="sp">12点场</div>
      <van-count-down :time="time" style="display: inline-block;" />
    </div>
    <div class="c">
      <van-swipe :loop="false" :width="100">
        <van-swipe-item v-for="(item,indedx) in imgs" :key="index">
          <img :src="item.img" style="height: 66.34px; width: 66.34px; margin: 10px 20px 8px ;" />
          <div class="d1"><span>{{item.txt}}</span></div>
          <div class="d2"><span style="display: block;">{{item.price}}</span></div>
        </van-swipe-item>


      </van-swipe>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Jdmiaosha',
    data() {
      return {
        column: 9,
        time: 30 * 60 * 60 * 1000,
        imgs: [{
            img: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/90947/17/10613/196297/5e1e6cddEa9f41bcc/1cb34005844fbd14.jpg.dpg',
            txt: '￥2030',
            price: '￥3060'
          },
          {
            img: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/97763/14/10616/84596/5e2012d9Ec48cecca/eb48947161b492a3.jpg.dpg',
            txt: '￥7669',
            price: '￥8199'
          },
          {
            img: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/99762/11/10772/113012/5e216cd4Eb8786dd9/abe90ddbf2173f7f.jpg.dpg',
            txt: '￥2189',
            price: '￥3999'
          },
          {
            img: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/54035/39/9563/346461/5d6ce103E17579dee/48654239e52c37bc.jpg.dpg',
            txt: '￥32.8',
            price: '￥37.9'
          },
          {
            img: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/108514/34/4590/200967/5e216955Edef9f224/1a8ac6d72669099f.jpg.dpg',
            txt: '￥369',
            price: '￥799'
          },
          {
            img: '<img onerror="__reloadResource(this)" class="seckill-photo" src="//img14.360buyimg.com/n1/s150x150_jfs/t1/89566/15/10743/185526/5e203171E9c5bd1f8/a9074e547bc6bb13.jpg.dpg" style="width: 66px; height: 66px;">',
            txt: '￥299',
            price: '￥399'
          },
          {
            img: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/106058/20/10779/173395/5e218811E45954ffd/a63bc561c790720e.png.webp',
            txt: '￥4398',
            price: '￥7999'
          },
          {
            img: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/86321/6/10627/169262/5e201de5E548f4d1d/c5f3588fe3acbee4.png.webp',
            txt: '￥45499',
            price: '￥5499'
          },
          {
            img: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/89489/21/10925/165692/5e2259edEa2c9a90b/c21fc09ab2f31fd6.jpg.dpg',
            txt: '￥199',
            price: '￥219'
          },
          {
            img: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/108586/2/4367/24461/5e1d2f21E10411013/0c0071d8ea0b6dd6.jpg.dpg',
            txt: '￥1298',
            price: '￥2599'
          }

        ]
      }
    }
  }
</script>

<style scoped>
  .a {
    padding: 10px;
    background: #e45041;
    box-sizing: border-box;
    height:170.64px ;
  }

  .b {
    height: 170.64px;
    background: url(../../../build/jdmsbj.png);
    /* background-size: contain; */
    background: #FFFFFF;
    border-radius: 10px 10px 0 0;
  }

  .jd {
    height: 27px;
    width: 69px;
    margin: 3px 20px;
  }

  .sp {
    display: inline-block;
    height: 33.6px;
    line-height: 33.6px;
    width: 50px;
    font-size: 12px;
    color: black;
    font-weight: 700;
    ;
  }

  .c {
    background: white;
    border-radius: 0 0 8px 8px;
  }

  .c .d1 {
    color: #e93b3d;
    font-size: 16px;
    line-height: 16px;
    height: 16px;
    text-align: center;
  }

  .c .d2 {
    color: #999;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    text-decoration: line-through;
  }
</style>
