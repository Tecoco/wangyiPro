<template>
  <div id="footerWrap">
      <div :class="{active: $route.path === '/msite'}" @click="navToggle('/msite')" class="navItem">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </div>
      <div :class="{active: $route.path === '/cateList' || $route.path === `/cateList/cateId/${$route.params.id}`}" @click="navToggle('/cateList')" class="navItem">
        <i class="iconfont icon-fenlei"></i>
        <span>分类</span>
      </div>
      <div :class="{active: $route.path === '/topic'}" @click="navToggle('/topic')" class="navItem">
        <i class="iconfont icon-zhaopian-"></i>
        <span>值得买</span>
      </div>
      <div :class="{active: $route.path === '/cart'}" @click="navToggle('/cart')" class="navItem">
        <i class="iconfont icon-gouwuche"></i>
        <span>购物车</span>
      </div>
      <div :class="{active: $route.path === '/profile'}" @click="navToggle('/profile')" class="navItem">
        <i class="iconfont icon-geren"></i>
        <span>个人</span>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      methods: {
          /* 单击footer的每项会跳转到相应的页面，根据路由路径确定
              编程式路由跳转
           */
          navToggle(path){
            path !== this.$route.path && this.$router.replace(path);
          }
      }
  }
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixins.styl"
/* 底部导航 */
#footerWrap
  display flex
  border-top 1px solid #d9d9d9
  position fixed
  left 0
  bottom 0
  width 100%
  height 98px
  background-color #fff
  z-index 3
  /* 导航的每一项 */
  .navItem
    display flex
    flex-direction column
    width 20%
    height 98px
    text-align center
    &.active
      color $mainColor
    .iconfont
      font-size 36px
      line-height 60px
 
</style>
