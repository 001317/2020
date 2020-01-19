<template>
 <div class="xr">
    <van-row>
      <van-col span="11" v-for="(item,index) in imgs" :key="index" offset="0">
        <img :src="item.img" class="c1"></img>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  export default{
    name:'newperson',
    data(){
      return{
        imgs:[{
          img:'https://m.360buyimg.com/mobilecms/s376x240_jfs/t1/49601/16/12206/115887/5d91b4d5E34709952/aba2bcb4855e6e52.png!q70.jpg.dpg'},
          {
            img:'https://m.360buyimg.com/mobilecms/s376x240_jfs/t1/32449/33/15631/174497/5cc2d86bE0289110c/9c53e25651659d43.png!q70.jpg.dpg'}

        ]
      }
    }
  }
</script>

<style>
 .xr{
  background: #E45041;
  }
  .c1{
    height: 120.06px;
    width: 176.6px;
    margin-left: 12px;

  }
</style>
