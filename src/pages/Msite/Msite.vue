<template>
  <div id="msite">
    <!-- 头部 -->
    <div class="header-search-login">
      <img
        class="logo"
        src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"
      />
      <div class="searchInput">
        <i class="iconfont icon-sousuo"></i>
        <input class="placeholder" type="text" placeholder="搜索商品" />
      </div>
      <div class="btn-login">登录</div>
    </div>
    <!-- 导航 -->
    <div class="nav-list">
      <ul>
        <li class="active"><span>推荐</span></li>
        <li><span>居家生活</span></li>
        <li><span>居家生活</span></li>
        <li><span>居家生活</span></li>
        <li><span>居家生活</span></li>
        <li><span>居家生活</span></li>
        <li><span>居家生活</span></li>
      </ul>
    </div>
    <!-- banner -->
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/6d7c87cf791a2cb01062ab72257a1cec.jpg?type=webp&imageView&quality=75&thumbnail=750x0" />
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/701376163c509d740714fa16dee8ecc7.jpg?type=webp&imageView&quality=75&thumbnail=750x0" />
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/100b633b1b237e0102458bbf4d851cb9.jpg?type=webp&imageView&quality=75&thumbnail=750x0" />
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!-- 服务政策 -->
    <ul class="service-policy">
      <li>
        <i></i>
        <span>网易自营品牌</span>
      </li>
      <li>
        <i></i>
        <span>30天无忧退货</span>
      </li>
      <li>
        <i></i>
        <span>48小时快速退款</span>
      </li>
    </ul>
    <!-- 商品列表导航 -->
    <div class="shopList-nav">
      <ul>
        <li>
          <img src="https://picsum.photos/60/60" alt="">
          <span>新品首发</span>
        </li>
        <li>
          <img src="https://picsum.photos/60/60" alt="">
          <span>新品首发</span>
        </li>
        <li>
          <img src="https://picsum.photos/60/60" alt="">
          <span>新品首发</span>
        </li>
        <li>
          <img src="https://picsum.photos/60/60" alt="">
          <span>新品首发</span>
        </li>
        <li>
          <img src="https://picsum.photos/60/60" alt="">
          <span>新品首发</span>
        </li>
            <li>
          <img src="https://picsum.photos/60/60" alt="">
          <span>新品首发</span>
        </li>
        <li>
          <img src="https://picsum.photos/60/60" alt="">
          <span>新品首发</span>
        </li>
        <li>
          <img src="https://picsum.photos/60/60" alt="">
          <span>新品首发</span>
        </li>
        <li>
          <img src="https://picsum.photos/60/60" alt="">
          <span>新品首发</span>
        </li>
        <li>
          <img src="https://picsum.photos/60/60" alt="">
          <span>新品首发</span>
        </li>
      </ul>
    </div>
    <!-- 促销模块 -->
    <div class="promotion-module">
      <div class="floor-top">
        <img src="https://yanxuan.nosdn.127.net/5db28c137605ea7576c986e9c285e1c6.png?quality=75&type=webp&imageView&thumbnail=750x0" alt="">
      </div>
      <div class="floor-first">
        <img src="https://yanxuan.nosdn.127.net/a4187bffa2a0431ec5d6e2dd1070d6c5.gif?imageView&quality=75" alt="">
      </div>
      <div class="floor-list">
        <ul>
          <li><img src="https://yanxuan.nosdn.127.net/28244c6ae7ef78424ea5317a0d72dd6a.png?quality=75&type=webp&imageView&thumbnail=375x0" alt=""></li>
          <li><img src="https://yanxuan.nosdn.127.net/15b56691109bba3adf6156fd44f14073.png?quality=75&type=webp&imageView&thumbnail=375x0" alt=""></li>
          <li><img src="https://yanxuan.nosdn.127.net/83b35324b02e31aa202a12971fa7f8c3.png?quality=75&type=webp&imageView&thumbnail=375x0" alt=""></li>
          <li><img src="https://yanxuan.nosdn.127.net/2c98b2002572ec4cd0824bc810d7d31f.png?quality=75&type=webp&imageView&thumbnail=375x0" alt=""></li>
        </ul>
      </div>
    </div>
    <!-- 新人专享 -->
    <div class="freshman-module">
      <div class="module-title">
        <span>新人专享礼</span>
      </div>
      <div class="module-content">
        <div class="content-left">
          <div class="font-wrap"><span>新人专享礼包</span></div>
          <div class="img-wrap">
            <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
          </div>
        </div>
        <div class="content-right">
          <div class="module1"></div>
          <div class="module2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
//引入BetterScroll
import BScroll from 'better-scroll'
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  data(){
    return {
      lefts: [], //获取所有右侧的li标对应累计的值
      scrollY: 0 //内容滚动的距离
    }
  },
  mounted() {
    this.$nextTick(() => {
      //创建Swiper实例对象
      new Swiper(".swiper-container", {
        loop: true,
        //分页器
        pagination: {
          el: ".swiper-pagination"
        }
      });
      //创建BScroll实例对象
      this.navListScroll = new BScroll('.nav-list', {
        scrollX: true,
        probeType: 2,
        click: true
      });
      //绑定事件
      this.navListScroll.on('scroll', ({x, y})=>{
        this.scrollX = Math.abs(x);
      });

      this.navListScroll.on('scrollEnd', ({x, y})=>{
        this.scrollX = Math.abs(x);
      });
    });
  }
};
</script>

<style lang="stylus">
@import '../../common/stylus/mixins.styl';
#msite 
  width 100%
  height 3000px
  background-color #eee

  // 头部搜索部分
  .header-search-login 
    display flex
    width 100%
    height 90px
    padding 20px
    box-sizing border-box
    background-color #fff

    .logo 
      width 140px
      height 40px
      margin 10px 0 0 15px

    .searchInput 
      width 440px
      height 60px
      background #ededed
      position relative
      margin 0 15px
      border-radius 10px

      .iconfont 
        font-size 30px
        position absolute
        left 10px
        top 25%

      input 
        border-radius 10px
        height 60px
        width 390px
        background #ededed
        margin-left 50px

    .btn-login 
      width 74px
      height 40px
      line-height 40px
      color #b4282d
      text-align center
      border 1px solid #b4282d
      margin-top 10px

  // 导航栏
  .nav-list 
    width 100%
    height 60px
    line-height 60px
    font-size 28px
    background-color #fff
    ul
      height 100%
      display flex
      li
        position relative
        padding 0 16px
        white-space nowrap
        &.active
          color $mainColor
          span 
            &::after
              content ''
              display block
              position absolute
              left 0
              bottom 0
              width 100%
              height 4px
              background-color $mainColor
  //轮播图
  .banner 
  	width 100%
    margin-top 45px
    height 370px

    .swiper-container 
      width 100%
      height 100%

      .swiper-wrapper 
        width 100%
        height 100%

        .swiper-slide 
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          height 100%

			img 
				display inline-block
				width 100%
				height 100%

      /* 深度选择器的使用 */
      /deep/.swiper-pagination 
        >span.swiper-pagination-bullet-active 
          background red

  //服务政策
  .service-policy
    width 100%
    height 72px
    display flex
    li
      width 33.3333%
      height 100%
      text-align center
      line-height 72px
      background-color #fff
  //商品列表导航
  .shopList-nav
    width 100%
    height 340px
    background-color #fff

    ul
      width 100%
      height 100%
      li
        margin 10px 0
        display flex
        flex-direction column
        align-items center
        width 20%
        height 156px
        float left
        img 
          border-radius 30px
        span 
          margin-top 10px
  //促销模块
  .promotion-module
    width 100%
    background-color #fff
    .floor-top, .floor-first
      img 
        width 100% 
    .floor-first, .floor-list
      padding 0 20px
      background-color #1674e3
    .floor-list
      width 100%
      overflow hidden
      padding-bottom 20px
      ul
        width 100%
        li
          width 350px
          height 186px
          margin-top 10px
          float left
          img 
            width 100%  
            height 100%  
          &:nth-child(2n+1)
            margin-right 10px     
  //新人专享
  .freshman-module
    width 100%
    padding 0 30px
    box-sizing border-box
    background-color #fff
    margin-top 20px
    //标题
    .module-title
      width 100%
      height 90px
      color #333
      font-size 32px
      text-align center
      line-height 90px
      span
        position relative
        &::before,&::after
          content ''
          display block
          position absolute
          left -48px
          top 50%
          width 30px
          height 4px
          background-color #333
        &::after
          left auto
          right -48px
    //内容
    .module-content
      display flex
      width 100%
      >div
        width 50%
        height 434px
      //左边内容
      .content-left
        background-color #F9E9CF
        margin-right 5px
        border-radius 5px
        .font-wrap
          width 100%
          font-size 32px
          padding 40px 0 0 40px
          box-sizing border-box
        .img-wrap
          width 100%
          height 258px
          margin-top 45px
          position relative
          img 
            width 258px
            height 258px
            position absolute
            left 50%
            transform translate(-50%)
            top 0
            
      //右边内容
      .content-right
        background-color #666
        
  
</style>
