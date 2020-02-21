<template>
  <div id="cateListWrap">
    <!-- 头部搜索 -->
    <div class="header-search-login">
        <div class="searchInput">
            <i class="iconfont icon-sousuo"></i>
            <input class="placeholder" type="text" placeholder="搜索商品, 共20868款好物" />
        </div>
    </div>
    <!-- 商品列表区域 -->
    <div class="good-wrap">
      <div class="left-wrap">
        <ul class="navList">
          <li @click="changeNavIndex(index)"
            :class="{active: cateNavIndex === index}"
             v-for="(cateNavItem, index) in cateNavList" :key="index">
             <span>{{cateNavItem.name}}</span>
          </li>
        </ul>
      </div>
      <div class="right-wrap"><!-- 容器 -->
        <div class="right-content">
          <SubRightCateList :cateNavList="cateNavList"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import SubRightCateList from '../../components/SubRightCateList/SubRightCateList'

  export default {
    components: {SubRightCateList},
    data(){
      return {
        cateNavList: [],
        cateNavIndex: 0
      }
    },
   async mounted(){
      //发送ajax请求
      let cateNavRes = await this.$API.getCateNavData();
      this.cateNavList = cateNavRes.data.categoryL1List;

      this.$nextTick(()=>{
       

        new BScroll('.right-wrap', {
          scrollY: true,
          probeType: 2, //实时派发，但不计算惯性移动的距离
          click: true
        });
      });
    },
    methods: {
      changeNavIndex(index){
        this.cateNavIndex = index;
      }
    },
    watch: {
      cateNavList(){
        this.$nextTick(()=>{
          new BScroll('.left-wrap', {
            scrollY: true,
            probeType: 2, //实时派发，但不计算惯性移动的距离
            click: true
            });
        });
      }
    }
   
  }
</script>

<style lang="stylus" >
@import '../../common/stylus/mixins.styl';
#cateListWrap
  // 头部搜索部分
  .header-search-login 
    display flex
    width 100%
    height 90px
    padding 20px
    box-sizing border-box
    background-color #fff
    
    .searchInput 
        width 100%
        height 60px
        text-align center
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
  //商品列表区域
  .good-wrap
    display flex
    width 100%
    height 100%
    border-top 1px solid #eee
    margin-top 5px
    //左侧
    .left-wrap
      width 162px      
      height calc(100vh - 250px)
      margin 40px 0 30px 0
      overflow hidden
      border-right 1px solid #eee
      .navList
        padding-bottom 48px
        box-sizing border-box
        width 100%
        li
          width 100%
          height 50px
          line-height 50px
          margin-top 40px
          font-size 28px
          border-left 6px solid #fff
          box-sizing border-box
          text-align center
          &:first-child
            margin-top 0
          &.active
            color #ab2b2b
            border-left 6px solid #ab2b2b
            box-sizing border-box
          span 
            display inline-block
            width 100%
            height 100%
    //右侧
    .right-wrap
      width calc(100vw - 163px)
      height calc(100vh - 250px)
      margin-top 30px
      overflow hidden
      .right-content
        width 100%
        height calc(100vh - 249px)
        padding 0 30px 30px
        box-sizing border-box
        //.sub-content区域
</style>
