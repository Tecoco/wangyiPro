<template>
  <div id="msite">
    <div id="target"></div>
    <!-- 固定顶部的容器 -->
    <div class="fixed-header">
      <!-- 头部 -->
      <div class="header-search-login">
        <img
          class="logo"
          src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"
        />
        <div class="searchInput">
          <i class="iconfont icon-sousuo"></i>
          <input class="placeholder" type="text" placeholder="搜索商品, 共20868款好物" />
        </div>
        <div class="btn-login">登录</div>
      </div>
      <!-- 导航 -->
      <div class="nav-list">
        <ul>
          <li  @click="changeNavIndex(index)" :class="{active: navIndex === index}" v-for="(navItem, index) in indexCateModule" :key="index"><span>{{navItem.name}}</span></li>
        </ul>
      </div>
     
    </div>

    <!-- 箭头包裹容器 -->
    
      <div class="arrow-wrap" @click="handleMask">
        <i class="iconfont" :class="toggleArrow ? 'icon-jiantoushang' : 'icon-icon_arrow_bottom'"></i>
      </div>
    
    <!-- 礼物 -->
    <div class="user-gift"></div>
    <!-- 回到顶部 -->
    <transition name="fade">
      <div class="go-top" v-show="isShowGoTop" @click="handleGoTop"></div>
    </transition>
    <!-- 遮罩层容器 :style="{'display': isShowMask?'block':'none'}"-->
    <div class="mask-wrap" v-show="isShowMask">
      <div class="mask-top" @click="isShowMask=true">
        <div class="nav-title">
          全部频道
        </div>
        <div class="more-cate">
          <ul class="cate-list">
            <li  @click="changeNavIndex(index)" :class="{active: navIndex === index}" v-for="(navItem, index) in indexCateModule" :key="index"><span>{{navItem.name}}</span></li>
          </ul>
        </div>
      </div>
      <!-- toggleIsShowMask -->
      <div class="mask-bottom" @click="isShowMask=false, toggleArrow=false"></div>
    </div>
    <!-- banner -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(focusItem, index) in focusList" :key="index">
            <img :src="focusItem.picUrl" />
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    <!-- 服务政策 -->
    <ul class="service-policy">
      <li v-for="(policyItem, index) in policyDescList" :key="index">
        <img class="icon" :src="policyItem.icon" alt="">
        <span>{{policyItem.desc}}</span>
      </li>
    </ul>
    <!-- 商品列表导航 -->
    <div class="shopList-nav">
      <ul>
        <li v-for="(kingKongItem, index) in kingKongList" :key="index">
          <img :src="kingKongItem.picUrl" alt="">
          <span>{{kingKongItem.text}}</span>
        </li>
      </ul>
    </div>
    <!-- 促销模块 -->
    <div class="promotion-module">
      <div class="floor-top">
        <div class="prom-good">
          <img src="https://yanxuan-item.nosdn.127.net/51348ec7731f5ed5c4bb9e0bed88717c.png?imageView&thumbnail=168x0&quality=75" alt="">
          <div class="price-wrap">
            <span>￥15.9</span>
            <span><del>￥17.9</del></span>
          </div>
        </div>
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
          <div class="module1">
            <div class="small-title">
              <span class="big-title">福利社</span><br>
              <span class="sub-title">今日特价</span>
            </div>
            <div class="small-img">
              <div class="discount">
                <span class="price1">¥36</span><br>
                <span class="price2"><del>¥39</del></span>
              </div>
              <img src="https://yanxuan-item.nosdn.127.net/858cc027d5dae682799a633cd331a29a.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            </div>
          </div>
          <div class="module2">
            <div class="small-title">
              <span class="big-title">新人拼团</span><br>
              <span class="sub-title">1元起包邮</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 类目热搜榜 -->
    <div class="category-hotSell-module">
      <div class="hotSell-module-title"><span>类目热销榜</span></div>
      <div class="hotSell-module-content">
        <div class="content-top">
          <div class="content-top-left">
            <div class="text">
              <span>热销榜</span>
            </div>
            <div class="img-wrap">
              <img src="https://yanxuan-item.nosdn.127.net/db4a9cbd2bdfed303e2536db8b40fe33.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            </div>
          </div>
          <div class="content-top-right">
             <div class="text">
              <span>好评榜</span>
            </div>
            <div class="img-wrap">
              <img src="https://yanxuan-item.nosdn.127.net/bb9025c24057dfb89403055ac5b9f85c.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            </div>
          </div>
        </div>
        <div class="content-bottom">
          <ul>
            <li v-for="(categoryItem, index) in categoryList" :key="index">
              <div class="title"><span>{{categoryItem.categoryName}}</span></div>
              <div class="img-wrap">
               <img :src="categoryItem.showPicUrl" alt="">
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 限时购 -->
    <div class="flashSale-module">
      <div class="flashSale-module-title">
        <div class="flashSale"><span>限时购</span></div>
        <div class="count-time">
          <span class="hour">00</span>
          <span class="dot">:</span>
          <span class="minute">00</span>
          <span class="dot">:</span>
          <span class="second">00</span>
        </div>
        <div class="more">更多 ></div>
      </div>
      <div class="flashSale-content">
        <ul>
          <li v-for="(flashSaleItem, index) in flashSaleItemList" :key="index">
            <div class="img-wrap"><img :src="flashSaleItem.picUrl" alt=""></div>
            <div class="price">
              <span>￥{{flashSaleItem.activityPrice}}</span>
              <span><del>￥{{flashSaleItem.originPrice}}</del></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 新品首发 -->
    <div class="newItem-module">
      <div class="newItem-title">
        <div class="newItem"><span>新品首发</span></div>
        <div class="more">更多 ></div>
      </div>
      <div class="newItem-content">
        <ul>
          <li v-for="(newItem, index) in newItemList" :key="index">
            <div class="img-wrap"><img :src="newItem.primaryPicUrl" alt=""></div>
            <div class="good">
              <div ref="title" class="newItemDesc"><span>{{newItem.name}}</span></div>
              <div class="price"><span>￥{{newItem.retailPrice}}</span></div>
              <div class="tag-wrap"><span>{{newItem.itemTagList[0].name}}</span></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--  -->
    <div class="sceneLight-shoppingGuide-module">
      <ul>
        <li v-for="(shoppingItem, index) in sceneLightShoppingGuideModule" :key="index">
          <div class="title">
            <span>{{shoppingItem.styleItem.title}}</span><br>
            <span>{{shoppingItem.styleItem.desc}}</span>
          </div>
          <div class="pic">
            <img :src="shoppingItem.styleItem.picUrlList[0]" alt="">
            <img :src="shoppingItem.styleItem.picUrlList[1]" alt="">
          </div>
        </li>
      </ul>
    </div>
    <!-- 底部 -->
    <div class="footer-wrap">
      <div class="footer-gow">
        <div class="download">
          <div><a href="###">下载APP</a></div>
          <div><a href="###">电脑版</a></div>
        </div>
        <p class="copyright">
          <span>网易公司版权所有 © 1997-</span>
          <span>2020</span><br>
          <span>食品经营许可证：JY13301080111719</span>
        </p>
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
      isShowGoTop: false, //标识回到顶部的按钮是否显示
      scrollToTop: '',
      toggleArrow: false, //标示是否切换箭头状态
      // roateVaule: 45,
      isShowMask: false, //标识是否显示遮罩层
      navIndex: 0,
      focusList: [],
      policyDescList: [],
      indexCateModule: [],
      kingKongList: [],
      categoryList: {},
      flashSaleItemList: [],
      newItemList: [],
      sceneLightShoppingGuideModule: []
    }
  },
  async mounted() {
    //发送ajax请求，获取首页对应的数据
    let indexDatas = await this.$API.getIndexData();
    const {focusList, policyDescList, indexCateModule, kingKongModule, categoryHotSellModule, flashSaleModule, newItemList, sceneLightShoppingGuideModule} = indexDatas;
    this.focusList = focusList;
    this.policyDescList = policyDescList;
    this.indexCateModule = indexCateModule;
    this.kingKongList = kingKongModule.kingKongList;
    this.categoryList = categoryHotSellModule.categoryList.splice(2);
    this.flashSaleItemList = flashSaleModule.itemList;
    this.sceneLightShoppingGuideModule = sceneLightShoppingGuideModule;
    this.newItemList = newItemList.splice(0, 6);
    //在mounted()方法里监听mousewheel
    window.addEventListener('scroll',this.handleScrollGoTop,false);
    //
    this.$nextTick(() => {
      //创建Swiper实例对象
      new Swiper(".swiper-container", {
        loop: true,
        //分页器
        pagination: {
          el: '.swiper-pagination'
        },
      });
      //创建BScroll实例对象
      new BScroll('.nav-list', {
        scrollX: true,
        probeType: 2,
        click: true
      });

    });
    //
    // if (this.$refs.title.scrollHeight > this.$refs.title.offsetHeight) {
    //   this.$refs.title.style.height = 72 + "px";
    //   //正好是行高的两倍,也就是两行文本所需的高度
    // }
  },
  methods: {
    changeNavIndex(index){
      this.navIndex = index;
    },
    //点击箭头出现遮罩层的事件回调处理
    handleMask(){
      this.toggleArrow = !this.toggleArrow;
      // this.roateVaule = 45;
      this.isShowMask = !this.isShowMask;
    },
    //滚轮滑动事件处理
    handleScrollGoTop(){
      this.scrollToTop = document.documentElement.scrollTop || document.body.scrollTop;
      let browserHeight = window.outerHeight;
      this.isShowGoTop = this.scrollToTop >= browserHeight ? true : false;
    },
    //处理回到顶部
    handleGoTop(){
      // document.documentElement.scrollTop = '';
      target.scrollIntoView();
    }
    
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop); 
  }
};
</script>

<style lang="stylus">
@import '../../common/stylus/mixins.styl';
#msite 
  width 100%
  margin-bottom 100px
  background-color #eee
  overflow hidden 
  //固定头部的容器
  .fixed-header
    position fixed
    left 0
    top 0
    width 100%
    z-index 99
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
      // overflow hidden
      
      background-color #fff
      >ul
        width 1580px
        padding-left 30px
        display flex
        li
          position relative
          padding 0 16px
          height 60px
          padding 0 28px
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
  //箭头容器
  .arrow-wrap
    width 150px
    height 60px
    position fixed
    top 90px
    right 0
    text-align center
    line-height 60px      
    color #999 
    z-index 999 
    background-image linear-gradient(to right, rgba(255,255,255,0) 1%, rgba(255,255,255,0.5) 4%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,1) 30%, rgba(255,255,255,1) 40%)
   
  //礼物
  .user-gift
    width 112px
    height 80px
    position fixed
    right 0
    bottom 240px
    z-index 5
    background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/wapNewUserEntry-b69d0624fd.png?imageView&type=webp')
    background-size cover
  //回到顶部
  .go-top
    width 82px
    height 82px
    position fixed
    right 20px
    bottom 120px
    z-index 5
    background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goToTop-f502426678.png?imageView&type=webp')
    background-size cover
  .fade-enter-active, .fade-leave-active
    transition opacity .5s
  .fade-enter, .fade-leave-to
    opacity 0
  
  //遮罩层容器
  .mask-wrap
    width 100%
    height calc(100vh - 90px)
    position fixed 
    bottom 0
    left 0
    z-index 100
    background-color rgba(0, 0, 0, 0.4) 
    .mask-top
      width 100%
      .nav-title
        width 100%
        height 60px
        line-height 60px
        font-size 28px
        padding-left 30px
        box-sizing border-box
        background-color #fff
      .more-cate
        padding-top 24px
        width 100%
        background-color #fff
        .cate-list
          width 100%
          overflow hidden
          li
            float left 
            width 150px
            height 56px
            line-height 56px
            margin-left 30px
            margin-bottom 40px
            border 1px solid #ccc
            &.active
              color $mainColor
              border 1px solid $mainColor
            span
              display block
              width 100%
              height 100%
              text-align center
    .mask-bottom
      width 100%
      height 100%
      // background-color red
    //轮播图
  .swiper-container 
    margin-top 150px
    width 100%
    height 370px
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        width 100%
        height 100%
        >img 
          display inline-block
          width 100%
          height 100%
    .swiper-pagination
      position absolute
      bottom 35px

    /* 深度选择器的使用 */
    /deep/.swiper-pagination 
      // >span.swiper-pagination-bullet-active 
      //   background-color $mainColor
      >span.swiper-pagination-bullet
        width 40px
        height 5px
        background-color #fff

  //服务政策
  .service-policy
    width 100%
    height 72px
    padding 0 30px
    background-color #fff
    box-sizing border-box
    display flex
    li
      display flex
      width 33.3333%
      height 100%
      text-align center
      line-height 72px
      .icon
        width 32px
        height 32px
        vertical-align center 
        margin 20px 5px 0
  //商品列表导航
  .shopList-nav
    width 100%
    height 340px
    padding-bottom 32px
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
          width 110px
          height 110px
          border-radius 30px
        span 
          margin-top 10px
  //促销模块
  .promotion-module
    width 100%
    background-color #fff
    .floor-top, .floor-first
      position relative
      img 
        width 100% 
      .prom-good
        overflow hidden
        position absolute
        left 75px
        top 45px
        width 168px
        height 168px
        >img
          position absolute
          left 0
          top -10px
        .price-wrap
          position absolute
          left 0
          bottom 5px
          width 152px
          height 36px
          text-align center
          line-height 42px
          background-color #F48F18
          border-radius 20px
          color #fff
          padding 0 10px
          span 
            &:nth-child(1)
              font-size 14px
            &:nth-child(2)
              font-size 10px  
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
    padding 0 30px 30px 30px
    box-sizing border-box
    background-color #fff
    margin 20px 0
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
        >div
          width 100%
          height 215px
          border-radius 5px
          box-sizing border-box
          overflow hidden
        .module1,.module2
          position relative
          padding 20px 0 0 30px
          margin-bottom 5px
          background-color #fbe2d3
          .small-title
            span 
              line-height 40px
            .big-title
              font-size 32px
            .sub-title
              font-size 20px
          .small-img
            position absolute
            right 0
            top 0
            width 200px
            height 200px
            padding-top 20px
            .discount
              width 80px
              height 80px
              background-color #f6a447
              border-radius 50%
              position absolute
              right 30px
              top 15px
              z-index 1
              >span 
                position absolute
                left 20px
                color #fff
              .price1
                top 20px
              .price2
                top 40px
            img 
              width 200px
              height 200px
        .module2
          background-color #ffecc2
          .sub-title
            background-color rgba(0,0,0,0.2)
            border-radius 5px
            color #fff
            padding 0 8px

  //类目热搜榜
  .category-hotSell-module
    width 100%
    padding 0 30px 20px 
    box-sizing border-box
    background-color #fff
    .hotSell-module-title
      width 100%
      height 100px
      line-height 100px
      font-size 32px
    //内容顶部
    .hotSell-module-content
      width 100%
      .content-top
        display flex
        width 100%
        height 200px
        >div
          width 50%
          height 100%
          border-radius 5px
        .content-top-left, .content-top-right
          display flex
          width 50%
          background-color #f9f3e4
          padding-left 20px
          line-height 150px
          margin 0 10px 10px 0
          >div
            width 50%
            height 100%
          .text
            position relative
            font-size 28px
            &::after
              content ''
              display block
              position absolute
              left 0
              top 50%
              margin-top 10px
              width 48px
              height 4px
              background-color #666
          .img-wrap
            width 100%
            height 100%
            img 
              width 100%
              height 100%
        .content-top-right
          background-color #ebeff6
          margin-right 0
      .content-bottom
        margin-top 10px
        width 100%
        ul
          width 100%
          overflow hidden
          box-sizing border-box
          li
            position relative
            width 165px
            height 180px
            float left
            border-radius 5px
            background-color #f5f5f5
            margin 0 10px 10px 0
            &:nth-child(4), &:nth-child(8)
              margin-right 0
            .title
              width 100%
              height 36px
              font-size 24px
              text-align center
              line-height 36px
              padding-top 10px
            .img-wrap 
              position absolute
              left 50%
              transform translateX(-50%)
              top 50px
              width 120px
              height 120px
              text-align center
              img 
                width 100%
                height 100%
  //限时购
  .flashSale-module
    width 100%
    padding 0 30px
    background-color #fff
    box-sizing border-box
    margin 20px 0
    .flashSale-module-title
      display flex
      width 100%
      height 100px
      line-height 100px
      font-size 32px
      .flashSale
        flex-grow 1
      .count-time
        flex-grow 7
        .hour, .minute, .second
          width 36px
          height 36px
          background-color #333
          text-align center
          line-height 36px
          color #fff
          font-size 24px
          padding 0 5px
          border-radius 5px
        .dot
          margin 0 10px
      .more
        flex-grow 2
        text-align right
    .flashSale-content
      width 100%
      box-sizing border-box
      ul
        width 100%
        overflow hidden
        li
          width 216px
          float left
          padding-bottom 30px
          margin-right 20px
          border-radius 5px
          &:nth-child(3), &:nth-child(6)
            margin-right 0
          >.img-wrap
            width 216px
            height 216px
            background-color #f5f5f5
            img
              width 100%
              height 100%
          .price
            width 100%
            margin-top 10px
            padding-left 20px
            span 
              &:nth-child(1)
                color $mainColor
                font-size 28px
                margin-right 10px
              &:nth-child(2)
                font-size 24px
  //新品首发
  .newItem-module
    width 100%
    padding 0 30px
    background-color #fff
    box-sizing border-box
    margin 20px 0
    padding-bottom 26px
    .newItem-title
      display flex
      width 100%
      height 100px
      line-height 100px
      font-size 32px
      .newItem
        flex-grow 1
      .more
        flex-grow 2
        text-align right
    .newItem-content
      width 100%
      box-sizing border-box
      ul
        width 100%
        overflow hidden
        li
          width 216px
          float left
          padding-bottom 30px
          margin-right 20px
          border-radius 5px
          &:nth-child(3), &:nth-child(6)
            margin-right 0
          >.img-wrap
            width 216px
            height 216px
            background-color #f5f5f5
            img
              width 100%
              height 100%
          .good
            width 100%
            .newItemDesc
              width 100%
              font-size 24px
              line-height 35px
              margin-top 10px
              height 66px
              overflow hidden
              text-overflow ellipsis
              display -webkit-box
              -webkit-line-clamp 2
              -webkit-box-orient vertical
              text-align justfiy 
            .price
              color $mainColor
              font-size 28px
              padding 10px 0
            .tag-wrap
              float left
              text-align center
              line-height 30px
              border 1px solid $mainColor
              span
                color $mainColor
                font-size 12px
                padding 3px
  //
  .sceneLight-shoppingGuide-module
    width 100%
    padding 10px 30px 0
    background-color #fff
    box-sizing border-box
    margin 20px 0
    padding-bottom 26px
    ul
      width 100%
      overflow hidden
      li
        float left
        width 342px
        margin-right 5px
        margin-bottom 5px
        padding 20px 0 0 20px
        box-sizing border-box
        background-color #f5f5f5
        .title
          >span
            line-height 42px
            &:nth-child(1)
              font-size 32px
            &:nth-child(2)
              font-size 24px
              color #7f7f7f
        .pic
          display flex
          img
           width 150px
           height 150px
        &:nth-child(2), &:nth-child(4)
          margin-right 0
  //底部
  .footer-wrap
    width 100%
    height 244px
    padding 54px 20px 30px
    background-color #414141
    box-sizing border-box
    color #999
    text-align center
    font-size 24px
    .download
      width 100%
      height 100%
      margin-bottom 36px
      >div
        width 172px
        height 62px
        line-height 62px
        display inline-block
        border 1px solid #999
        >a
          disply block
          width 100%
          height 100%
          color #fff
      >div:nth-child(1)
        margin-right 50px
        
    .copyright
      width 100%
      line-height 35px
      font-size 20px
  
     

        
  
</style>
