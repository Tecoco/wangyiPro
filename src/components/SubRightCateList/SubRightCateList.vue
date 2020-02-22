<template>
  <div id="subRightWrap">
    <div class="sub-content">
      <div class="banner">
        <img src="https://yanxuan.nosdn.127.net/868844d3288f130c1aa808312dbbd1d8.png?quality=75&type=webp&imageView&thumbnail=0x196" alt="">
      </div>
      <div class="cate-list">
        <ul>
          <li v-for="(cateItem, index) in cateLists[0].categoryList" :key="index">
            <div class="cate-img">
              <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?quality=75&type=webp&imageView&thumbnail=144x144" alt="">
            </div>
            <div class="cate-text">{{cateItem.name}}</div>
          </li>
          
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'

export default {
  props: ['cateNavList'],
  data(){
    return {
    }
  },
  mounted(){
    this.$store.dispatch('getCateListDataAction');
  },
  computed: {
     ...mapState({
       cateLists: state => state.cateLists
    })
  }
}
</script>

<style lang="stylus">
#subRightWrap
  .sub-content
    width 100%
    .banner
      width 528px
      height 192px
      >img 
        width 100%
        height 100%
    .cate-list
      margin-top 30px
      width 100%
      >ul
        // display flex
        // flex-wrap wrap
        width 100%
        overflow hidden
        // box-sizing border-box
        >li
          width 144px
          height 216px
          margin-right 47px
          float left
          &:nth-child(3), &:nth-child(6)
            margin-right 0
          .cate-img
            width 100%
            height 144px
            >img 
              width 100%
              height 100%
          .cate-text
            width 100%
            height 72px
            font-size 24px
            text-align center
            line-height 40px

            

  
 

 
</style>
