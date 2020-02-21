<template>
  <div id="searchWrap">
    <!-- 头部搜索 -->
    <div class="header-search-login">
        <div class="searchInput">
            <i class="iconfont icon-sousuo"></i>
            <input class="placeholder" type="text" placeholder="搜索商品, 共20868款好物" />
        </div>
        <div class="cancel" @click="handleCancel">取消</div>
        
    </div>
      <!-- 遮罩层容器-->
    <div class="content-wrap">
      <div class="content-top">
        <div class="nav-title">
          热门搜索
        </div>
        <div class="more-cate">
          <!-- <ul class="cate-list">
            <li v-for="(keyWordsItem, index) in searchAllDataObj.hotKeywordVOList" :key="index">
              <span>{{keyWordsItem.keyWord}}</span>
            </li>
          </ul> -->
        </div>
      </div>
      <!-- toggleIsShowcontent -->
      <div class="content-bottom"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex";
  export default {
    data(){
        return {
        }
    },
    mounted(){
      //发送ajax请求
      this.$store.dispatch('getSearchDataAction');
    },
    methods: {
        //取消 事件回调处理
        handleCancel(){
            this.$router.push({path: 'msite'});
        }
    },
    computed: {
        searchAllDataObj: state => state.searchAllDataObj
    }
  }
</script>

<style lang="stylus">
#searchWrap
  // 头部搜索部分
  .header-search-login 
    display flex
    width 100%
    height 90px
    padding 20px
    box-sizing border-box
    background-color #fff
    .searchInput 
        width 90%
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
            font-size 28px
            margin-left 50px
    .cancel 
        width 10%
        height 40px
        line-height 40px
        font-size 28px
        text-align center
        margin-top 10px


  //搜索内容区域
  .content-wrap
    width 100%
    height calc(100vh - 90px)
    position fixed 
    bottom 0
    left 0
    z-index 100
    background-color #eee 
    .content-top
      width 100%
      .nav-title
        width 100%
        height 60px
        line-height 60px
        font-size 28px
        padding-left 30px
        color #999
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
    .content-bottom
      width 100%
      height 100%
      // background-color red
    
 
</style>
