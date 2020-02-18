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
      <ul ref="navUl">
        <li :class="{active: navIndex === index}" v-for="(navItem, index) in indexCateModule" :key="index"><span>{{navItem.name}}</span></li>
      </ul>
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
      <div class="hotSell-module-title"><span>{{categoryHotSellModule.title}}</span></div>
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
            <li>
              <div class="title"><span>居家生活榜</span></div>
              <div class="img-wrap">
               <img src="https://yanxuan-item.nosdn.127.net/93a20b799b978c1b3e800ce3f0e16842.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
              </div>
            </li>
            <li>
              <div class="title"><span>居家生活榜</span></div>
              <div class="img-wrap">
               <img src="https://yanxuan-item.nosdn.127.net/93a20b799b978c1b3e800ce3f0e16842.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
              </div>
            </li>
            <li>
              <div class="title"><span>居家生活榜</span></div>
              <div class="img-wrap">
               <img src="https://yanxuan-item.nosdn.127.net/93a20b799b978c1b3e800ce3f0e16842.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
              </div>
            </li>
            <li>
              <div class="title"><span>居家生活榜</span></div>
              <div class="img-wrap">
               <img src="https://yanxuan-item.nosdn.127.net/93a20b799b978c1b3e800ce3f0e16842.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
              </div>
            </li>
            <li>
              <div class="title"><span>居家生活榜</span></div>
              <div class="img-wrap">
               <img src="https://yanxuan-item.nosdn.127.net/93a20b799b978c1b3e800ce3f0e16842.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
              </div>
            </li>
            <li>
              <div class="title"><span>居家生活榜</span></div>
              <div class="img-wrap">
               <img src="https://yanxuan-item.nosdn.127.net/93a20b799b978c1b3e800ce3f0e16842.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
              </div>
            </li>
            <li>
              <div class="title"><span>居家生活榜</span></div>
              <div class="img-wrap">
               <img src="https://yanxuan-item.nosdn.127.net/93a20b799b978c1b3e800ce3f0e16842.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
              </div>
            </li>
            <li>
              <div class="title"><span>居家生活榜</span></div>
              <div class="img-wrap">
               <img src="https://yanxuan-item.nosdn.127.net/93a20b799b978c1b3e800ce3f0e16842.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
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
          <li>
            <div class="img-wrap"><img src="https://yanxuan-item.nosdn.127.net/86a517ee37b94e00fcddb0bfd50fc433.png?quality=75&type=webp&imageView&thumbnail=216x216" alt=""></div>
            <div class="price">
              <span>￥290</span>
              <span><del>￥330</del></span>
            </div>
          </li>
          <li>
            <div class="img-wrap"><img src="https://yanxuan-item.nosdn.127.net/86a517ee37b94e00fcddb0bfd50fc433.png?quality=75&type=webp&imageView&thumbnail=216x216" alt=""></div>
            <div class="price">
              <span>￥290</span>
              <span><del>￥330</del></span>
            </div>
          </li>
          <li>
            <div class="img-wrap"><img src="https://yanxuan-item.nosdn.127.net/86a517ee37b94e00fcddb0bfd50fc433.png?quality=75&type=webp&imageView&thumbnail=216x216" alt=""></div>
            <div class="price">
              <span>￥290</span>
              <span><del>￥330</del></span>
            </div>
          </li>
          <li>
            <div class="img-wrap"><img src="https://yanxuan-item.nosdn.127.net/86a517ee37b94e00fcddb0bfd50fc433.png?quality=75&type=webp&imageView&thumbnail=216x216" alt=""></div>
            <div class="price">
              <span>￥290</span>
              <span><del>￥330</del></span>
            </div>
          </li>
          <li>
            <div class="img-wrap"><img src="https://yanxuan-item.nosdn.127.net/86a517ee37b94e00fcddb0bfd50fc433.png?quality=75&type=webp&imageView&thumbnail=216x216" alt=""></div>
            <div class="price">
              <span>￥290</span>
              <span><del>￥330</del></span>
            </div>
          </li>
          <li>
            <div class="img-wrap"><img src="https://yanxuan-item.nosdn.127.net/86a517ee37b94e00fcddb0bfd50fc433.png?quality=75&type=webp&imageView&thumbnail=216x216" alt=""></div>
            <div class="price">
              <span>￥290</span>
              <span><del>￥330</del></span>
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
          <li>
            <div class="img-wrap"><img src="https://yanxuan-item.nosdn.127.net/0fd9f9e40f287ecfe3b54aaafda914f6.png?type=webp&imageView&quality=65&thumbnail=330x330" alt=""></div>
            <div class="good">
              <div class="newItemDesc"><span>赏味正当时，春见耙耙柑 5斤</span></div>
              <div class="price"><span>￥59</span></div>
              <div class="tag-wrap"><span>特价</span></div>
            </div>
          </li>
          <li>
            <div class="img-wrap"><img src="https://yanxuan-item.nosdn.127.net/0fd9f9e40f287ecfe3b54aaafda914f6.png?type=webp&imageView&quality=65&thumbnail=330x330" alt=""></div>
            <div class="good">
              <div class="newItemDesc"><span>赏味正当时，春见耙耙柑 5斤</span></div>
              <div class="price"><span>￥59</span></div>
              <div class="tag-wrap"><span>特价</span></div>
            </div>
          </li>
          <li>
            <div class="img-wrap"><img src="https://yanxuan-item.nosdn.127.net/0fd9f9e40f287ecfe3b54aaafda914f6.png?type=webp&imageView&quality=65&thumbnail=330x330" alt=""></div>
            <div class="good">
              <div class="newItemDesc"><span>赏味正当时，春见耙耙柑 5斤</span></div>
              <div class="price"><span>￥59</span></div>
              <div class="tag-wrap"><span>特价</span></div>
            </div>
          </li>
          <li>
            <div class="img-wrap"><img src="https://yanxuan-item.nosdn.127.net/0fd9f9e40f287ecfe3b54aaafda914f6.png?type=webp&imageView&quality=65&thumbnail=330x330" alt=""></div>
            <div class="good">
              <div class="newItemDesc"><span>赏味正当时，春见耙耙柑 5斤</span></div>
              <div class="price"><span>￥59</span></div>
              <div class="tag-wrap"><span>特价</span></div>
            </div>
          </li>
          <li>
            <div class="img-wrap"><img src="https://yanxuan-item.nosdn.127.net/0fd9f9e40f287ecfe3b54aaafda914f6.png?type=webp&imageView&quality=65&thumbnail=330x330" alt=""></div>
            <div class="good">
              <div class="newItemDesc"><span>赏味正当时，春见耙耙柑 5斤</span></div>
              <div class="price"><span>￥59</span></div>
              <div class="tag-wrap"><span>特价</span></div>
            </div>
          </li>
          <li>
            <div class="img-wrap"><img src="https://yanxuan-item.nosdn.127.net/0fd9f9e40f287ecfe3b54aaafda914f6.png?type=webp&imageView&quality=65&thumbnail=330x330" alt=""></div>
            <div class="good">
              <div class="newItemDesc"><span>赏味正当时，春见耙耙柑 5斤</span></div>
              <div class="price"><span>￥59</span></div>
              <div class="tag-wrap"><span>特价</span></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--  -->
    <div class="sceneLight-shoppingGuide-module">
      <ul>
        <li>
          <div class="title">
            <span>断货补单王</span><br>
            <span>紧急补仓疯抢中</span>
          </div>
          <div class="pic">
            <img src="https://yanxuan-item.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
            <img src="https://yanxuan-item.nosdn.127.net/445689c4faa55f8186c500e68bff73d6.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
          </div>
        </li>
         <li>
          <div class="title">
            <span>断货补单王</span><br>
            <span>紧急补仓疯抢中</span>
          </div>
          <div class="pic">
            <img src="https://yanxuan-item.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
            <img src="https://yanxuan-item.nosdn.127.net/445689c4faa55f8186c500e68bff73d6.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
          </div>
        </li>
         <li>
          <div class="title">
            <span>断货补单王</span><br>
            <span>紧急补仓疯抢中</span>
          </div>
          <div class="pic">
            <img src="https://yanxuan-item.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
            <img src="https://yanxuan-item.nosdn.127.net/445689c4faa55f8186c500e68bff73d6.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
          </div>
        </li>
         <li>
          <div class="title">
            <span>断货补单王</span><br>
            <span>紧急补仓疯抢中</span>
          </div>
          <div class="pic">
            <img src="https://yanxuan-item.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
            <img src="https://yanxuan-item.nosdn.127.net/445689c4faa55f8186c500e68bff73d6.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
          </div>
        </li>
      </ul>
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
      scrollY: 0, //内容滚动的距离
      focusList: [],
      policyDescList: [],
      indexCateModule: [],
      kingKongList: [],
      categoryHotSellModule: {}
    }
  },
  async mounted() {
    //发送ajax请求，获取首页对应的数据
    let indexDatas = await this.$API.getIndexData();
    const {focusList, policyDescList, indexCateModule, kingKongModule, categoryHotSellModule} = indexDatas;
    this.focusList = focusList;
    this.policyDescList = policyDescList;
    this.indexCateModule = indexCateModule;
    this.kingKongList = kingKongModule.kingKongList;
    this.categoryHotSellModule = categoryHotSellModule;
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
  },
  computed: {
    //计算左侧导航对应的下标值，来确定高亮显示位置
    navIndex(){
      const {lefts, scrollX} = this;
      
      let index = lefts.findIndex((left, index)=> (scrollX >= lefts[index] && scrollX < lefts[index+1]));
      if(this.navListScroll && this.index !== index){
        this.index = index;
        this.navListScroll.scrollToElement(this.$refs.navUl.children[index], 1000);
      }
      return index;
    }
  }
};
</script>

<style lang="stylus">
@import '../../common/stylus/mixins.styl';
#msite 
  width 100%
  height 6000px
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
  .swiper-container 
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

    /* 深度选择器的使用 */
    /deep/.swiper-pagination 
      >span.swiper-pagination-bullet-active 
        background-color $mainColor

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
              z-index 99
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
            .price
              color $mainColor
              font-size 28px
              padding 10px 0
            .tag-wrap
              width 54px
              height 30px
              text-align center
              line-height 30px
              border 1px solid $mainColor
              span
                color $mainColor
                font-size 18px
  //
  .sceneLight-shoppingGuide-module
    width 100%
    padding 0 30px
    background-color #fff
    box-sizing border-box
    margin 20px 0
    padding-bottom 26px
    ul
      width 100%
      overflow hidden
      li
        float left
        width 50%
        margin-right 5px
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
          
        
  
     

        
  
</style>
