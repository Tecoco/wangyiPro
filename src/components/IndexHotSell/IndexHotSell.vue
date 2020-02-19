<template>
  <div id="hotSell">
    <div class="category-hotSell-module">
      <div class="hotSell-module-title">
        <span>类目热销榜</span>
      </div>
      <div class="hotSell-module-content">
        <div class="content-top">
          <div class="content-top-left">
            <div class="text">
              <span>热销榜</span>
            </div>
            <div class="img-wrap">
              <img
                src="https://yanxuan-item.nosdn.127.net/db4a9cbd2bdfed303e2536db8b40fe33.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt
              />
            </div>
          </div>
          <div class="content-top-right">
            <div class="text">
              <span>好评榜</span>
            </div>
            <div class="img-wrap">
              <img
                src="https://yanxuan-item.nosdn.127.net/bb9025c24057dfb89403055ac5b9f85c.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt
              />
            </div>
          </div>
        </div>
        <div class="content-bottom">
          <ul>
            <li v-for="(categoryItem, index) in categoryList" :key="index">
              <div class="title">
                <span>{{categoryItem.categoryName}}</span>
              </div>
              <div class="img-wrap">
                <img :src="categoryItem.showPicUrl" alt />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ['categoryList']
};
</script>

<style lang="stylus">
#hotSell
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
  
</style>
