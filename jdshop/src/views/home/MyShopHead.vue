<template>
  <div class="h">
    <van-row>
      <van-col span="3">
        <van-icon name="wap-nav" color="#fff" size="30px" style="padding: 5px 15px;" />
      </van-col>
      <van-col span="4" class="jd" style="height: 28px;margin-top: 4px; ">
        <van-image
        style="box-sizing: border-box; padding:12px; top: -6px;"
          width="50"
          height="41"
          fit="cover"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAAAXNSR0IArs4c6QAAA/tJREFUWAnNmF9oU1ccx8/v5iZXov2nTVOloowJDjfYk4w1SW2xVdDik08iYw8Dqw9j4tsYFMZe3HAMBg593B5mVQSLD0abalL/FcUHNwTFvsjU/HFNW21N0tzfvifNiTf3pqajtc2B8Pv9vvec3/3c8+fec0KiSkm0hyIsuNNazaD6tY0jl8alFm8P/SEEH7Belz5BhJkSRBNw0gjjJOgesxh1Gfqd5kjkH3ubSrFeSVwKDVBgFPWCuR52I36f4EF3ytz5TE4kAsFrgumkb9vWC3TqVE7qlYpWSVwODT25A8BnEn8/fJwKhbrmu+eKAVqANpl5vhpvD57g/ftdFr3gvpchdmmugxjiWZPZTWw2YKybTKKtxGI7eu1DO0RxOnyTev5iFa4dtl5/L4DrWn0DdPZs1noj5SdCoS2c5z4i+oqZ1yhdWpNFHxbdmP9G9CelL/sQt0Sjj/03YkfZo3+KZXRHgby1/MN4V9cmFS87oLqxPxJ50rK+tROvnrtKK1pPLjv7ndJWDFACYBrMkNfYh+F+pYCK9otkd/cG6a8ooATwXbnyjEj8Jn1VMDd1nsnukvGKA0oIN3tOSmstLMxuGdcEYOPI1TEM81MrIDGFagZwDozLVzSJVu7v12qiB+cAKWHtQcxD11Qs1lRDgKKwO7JCZvN5Xy0BOr5qJj6XtQPItM7ae9J3C5GqHUAy26yAWNWzjcPDEwsBdGyBrImWwi9ss1h8bs2FHc5TQHJVQCbhsTaUfoM3V3GnYq+30DjxIvUZgOTOu1SwRRuWQVVA1PGXWkmH6A2Fw6/LtMUGPHvMngKAQ1J7JyD39nqJeXNZY+Z4WbzIIBns7MBGdp8tzbRhuC9L7Z2AyX8n9qLr5eGnVPBhv1UKFumkAzs/MDl/zn4PjcSv9UNDL2X6eQFlYxwVf3YyaGGn9v+VZKCjNyMyt3Hqa7a2Rm9MGobnuNIcL8epnp6Wmek3X2Y58y2erE5VnLMU93mNgXJt4VE6sKcpJ17txk7liMlmu70lVm2eNHFQ9Z68rieDoR9NU6zHim7DUbsNcJvld9DeWMaaxv0LWSDJ5/Hj8UAwj7nlxqJqwBGzEVPjowxPbqmUV2mof8QXjV5UsbS6aXJhBSHJXCk5xVgZEqd9sVjZxlJdsls84NdSK6Qs5psvbaEtUUoQH/LFouftueadg6oi5kQOXfc9zg99SlsqK78W6Nk/Vxvuj/2xmANO3scxB9XNASb/VxnQNfHL2uj1B0pfEktiDC+H3zWPfrrafzQ6IG5jMPDipUlAjeOp/sJ/Jvebm+pGaXBwuhqQptEjDN9NZ73CoE5BTzNTGi+ruCa0u6u8ntG6cLhs7+ds+1b5D7N0Tl8rtx1wAAAAAElFTkSuQmCC"/>
      </van-col>

      <van-col span="14">

        <van-field left-icon="search" placeholder="冰激凌" style="padding: 2px 2px; margin-top: 4px; border-radius: 0 20px 20px 0; "/>
      </van-col>
      <van-col span="3">
        <span style="color: #FFFFFF; display: inline-block;box-sizing: border-box;padding: 8px; font-size: 1.2em; ">
          登录
        </span>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
    name: 'MyShopHead',
    props: ['a', 'b'],
    data() {
      return {
        search: '冰激凌'
      }
    },
    methods: {

    }
  }
</script>

<style>
  .h{
    display: fixed;
    height: 40px;
  }
  .jd{
    background: #fff;
    border-radius: 20px 0 0 20px;
  }
</style>
