<template>
  <van-swipe class="wrap" :autoplay="3000" indicator-color="white">
    <van-swipe-item>
      <van-grid :column-num="column" icon-size="30px">
        <van-grid-item v-for="(item,index) in first" :key="index" :icon="item.img" :text="item.txt" />
      </van-grid>
    </van-swipe-item>
    <van-swipe-item>
      <van-grid :column-num="column" icon-size="30px">
        <van-grid-item v-for="(item,index) in first" :key="index" :icon="item.img" :text="item.txt2" />
      </van-grid>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
  export default {
    name: 'ShopMenu',
    data() {
      return {
        column: 5,
        first: [{
            img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/85214/22/10591/16309/5e1d7678Eb1ca0f7f/17731dcc3f9fd7a1.png.webp',
            txt: '京东超市',
            txt2: '京东国际'
          },
          {
            img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/106331/11/10653/16676/5e1d774dEd46f78ea/95416b005b867a34.png.webp',
            txt: '数码电器',
            txt2: '京东拍卖'
          },
          {
            img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/89547/14/10538/16176/5e1d7684E03704180/61550d9274e82cbc.png.webp',
            txt: '京东服饰',
            txt2: '唯品会'
          },
          {
            img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/100988/18/10619/17121/5e1d7688E412602ff/50b1935ae75df092.png.webp',
            txt: '京东生鲜',
            txt2: '玩3C'
          },
          {
            img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/99968/19/10560/17489/5e1d768cE0a4eafae/e92e06dd18852b8f.png.webp',
            txt: '京东到家',
            txt2: '沃尔玛'
          },
          {
            img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/97417/39/10487/16365/5e1d7692Edd330358/4e2b42277be20259.png.webp',
            txt: '充值缴费',
            txt2: '美妆馆'
          },
          {
            img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/97282/19/10555/16981/5e1d7696Ee3c5b609/eb18ad8da77ce95b.png.webp',
            txt: '9.9元拼',
            txt2: '京东旅行'
          },
          {
            img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/86442/13/10501/17016/5e1d769bE57cab1cb/7c4aa54e0a56440e.png.webp',
            txt: '领券',
            txt2: '拍拍二手'
          },
          {
            img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/106799/38/10705/16784/5e1d769fEaf123f68/799fc31e4850e450.png.webp',
            txt: '赚钱',
            txt2: '物流查询'
          },
          {
            img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/91489/15/10634/17524/5e1d76a4E514a57ce/1e89e7f74e9a00b3.png.webp',
            txt: 'PLUS会员',
            txt2: '全部'
          }
        ]
      }
    }
  }
</script>

<style>
  .van-grid-item__content {
    background: transparent;
  }

  .van-grid-item__text {
    color: #FFFFFF;
  }

  .wrap {
    width: 375px;
    height: 162px;
    background: url(https://m.360buyimg.com/mobilecms/s750x324_jfs/t1/98104/18/10569/74821/5e1c4c95E0b02e2f2/69a6fb311be82e1d.png.webp);
    background-size: 375px 162px;
  }
</style>
