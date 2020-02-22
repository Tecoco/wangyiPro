<template>
  <div id="WorthBuyWrap">
    <div class="top-bar">
      <router-link to="msite">
        <div class="home">
          <i class="iconfont icon-shouye"></i>
        </div>
      </router-link>
      <div class="title"><span>值得买</span></div>
      <div class="right">
        <i class="iconfont icon-sousuo1"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
    </div>
    <div class="swiperTab-wrap">
      <div class="swiperTab-title">
        <img src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
        <span>严选好物 用心生活</span>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(navItem, index) in newNavList" :key="index">
            <a class="link-to-pro" v-for="(item, index) in navItem" :key="index">
              <div class="pro-container">
                <img :src="item.picUrl" />
              </div>
              <div class="text">
                <span class="text-title">{{item.mainTitle}}</span><br>
                <span class="text-desc">{{item.viceTitle}}</span>
              </div>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="waterfall-wrap">

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
/* 引入lodash */
import _ from "lodash";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
  export default {
    data(){
      return {
        navList: [],
      }
    },
    async mounted(){
      let result = await this.$API.getTopicNavData();
      this.navList = result.data.navList;
    },
    computed: {
      newNavList(){
        return _.chunk(this.navList, 8);
      }
    },
     watch: {
      navList(){
        this.$nextTick(() => {
          new Swiper(".swiper-container", {
            loop: true,
            //分页器
            pagination: {
              el: ".swiper-pagination"
            }
          });
        });
      } 
    }
  }
</script>

<style lang="stylus" scoped>
#WorthBuyWrap
  width 100%
  background-color #eee
  overflow hidden
  .top-bar
    display flex
    justify-content space-between
    width 100%
    height 100px
    text-align center
    line-height 100px
    padding 0 24px
    box-sizing border-box
    font-size 36px
    .home
      >i 
        font-size 48px
    .title
    .right
      >i 
        font-size 50px
        &:first-child
          margin-right 30px
  //
  .swiperTab-wrap
    width 100%
    padding 0 24px
    box-sizing border-box
    background url('https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png') no-repeat
    background-size cover
    overflow hidden
    .swiperTab-title
      width 100%
      display flex
      font-size 30px
      color #fff
      padding-top 68px
      margin-bottom 24px
      >img
        width 130px
        height 68px
      span 
        margin 28px 0 0 5px
    //
    .swiper-container 
      width 100%
      height 100%
      background-color #fff
      border-radius 10px
      padding-bottom 70px

      .swiper-wrapper 
        width 100%
        height 100%
        .swiper-slide 
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          height 100%

          .link-to-pro
            width 25%
            text-align center
            padding-top 36px
            .pro-container
              width 100%
              height 120px
              >img 
                width 120px
                height 120px
                display inline
            .text
              width 100%
              height 100%
              line-height 35px
              padding-top 8px
              .text-title
                font-size 28px
                font-weight bold
                color #333
              .text-desc
                font-size 24px
                color #999

      //
      .swiper-pagination
        position absolute
        bottom 28px

      /* 深度选择器的使用 */
      /deep/.swiper-pagination 
        >span.swiper-pagination-bullet
          width 40px
          height 5px
          background-color red
  //瀑布流布局
  .waterfall-wrap
    width 100%
    height 500px
    background-color #eee    
  
</style>
