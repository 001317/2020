<template>
  <div>
    <van-swipe>
      <van-swipe-item>
        <van-grid :column-num="column" :gutter="0">
          <van-grid-item :gutter="0" :icon="item1.imgi" :text="item1.txt1" :key="index1" v-for="(item1,index1) in images" />
        </van-grid>
      </van-swipe-item>
      <van-swipe-item>
        <van-grid :column-num="column" :gutter="0">
          <van-grid-item v-for="(item,index) in images" :icon="item.img" :text="item.txt" :key="index" :gutter="0" />
        </van-grid>
      </van-swipe-item>

    </van-swipe>
  </div>
</template>

<script>
  export default {
    name: 'ShopMenu',
    data() {
      return {
        column: 5,
        images: [{
            img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/89640/36/2804/8167/5dd6aca9E4b04fedd/fbc6adc345138b30.png.webp',
            imgi: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp',
            txt: '京东国际',
            txt1: '京东超市'
          },
          {
            img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/32245/22/2820/6521/5c6df9b3E1466dcd3/9f4cd68276f4e971.png.webp',
            imgi: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png.webp',
            txt: '京东拍卖',
            txt1: '数码电器'
          },
          {
            img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/25651/12/1391/4836/5c120c34Eb93a70fa/3a1735f6a79d0721.png.webp',
            imgi: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png.webp',
            txt: '唯品会',
            txt1: '京东服饰'
          },
          {
            img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t28723/45/1332082024/6421/ead422d3/5cdd0be3Nfce1ba98.jpg.dpg',
            imgi: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png.webp',
            txt: '玩3C',
            txt1: '京东生鲜'
          },
          {
            img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/19699/10/1440/6755/5c120ca6Eaa521f62/f9d57f39e55c7321.png.webp',
            imgi: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png.webp',
            txt: '沃尔玛',
            txt1: '京东到家'
          },
          {
            img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/19745/21/1415/4886/5c120cbbEe58af0bf/4d19bf58d42fc9c4.png.webp',
            imgi: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png.webp',
            txt1: '充值缴费',
            txt: '美妆馆'
          },
          {
            img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/19745/21/1415/4886/5c120cbbEe58af0bf/4d19bf58d42fc9c4.png.webp',
            imgi: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png.webp',
            txt1: '9.9元拼',
            txt: '京东旅行'
          },
          {
            img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/14996/29/2195/11094/5c1afdb7Ee54cf069/d6ab6a0f64fee068.png.webp',
            imgi: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png.webp',
            txt1: '领券',
            txt: '拍拍二手'
          },
          {
            img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t5842/205/151189300/13247/a6de2d/591d94edNc42fb94d.png.webp',
            imgi: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png.webp',
            txt1: '赚钱',
            txt: '物流查询'
          },
          {
            img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/28873/5/1455/6885/5c120bb9Eb6610bee/29d349f92aeb6eaf.png.webp',
            imgi: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/22262/9/1470/4527/5c120cd0E5d3c6c66/4792ec307a853e9f.png.webp',
            txt1: 'PLUS会员',
            txt: '全部'
          }
        ]
      }
    }

  }
</script>

<style>
 
</style>
